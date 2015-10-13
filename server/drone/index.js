import RollingSpider from 'rolling-spider';
import log from './logger';

const rollingSpider = new RollingSpider({
  uuid: 'RS_Serggg'
});

const promise = new Promise(function(resolve, reject) {

  log('connecting...');
  rollingSpider.connect(function() {
    log('setup...');
    rollingSpider.setup(function() {
      rollingSpider.flatTrim();
      rollingSpider.startPing();
      rollingSpider.flatTrim();

      rollingSpider.signalStrength(function (err, strength) {
        if (err) throw err;
        log(`signal strength is: ${strength}`);
      });

      // Resolve promise
      resolve();

      log('listening...');
    });
  });

});

let action = promise;

/**
 * Drone module
 */
const drone = (function() {

  /**
   * Makes drone take off
   * @return {Promise}
   */
  function takeoff() {

    log('taking off...');

    action = action.then(function() {
      return new Promise(function(resolve, reject) {

        rollingSpider.flatTrim(function() {
          rollingSpider.takeOff(function() {
            log('took off????');
          });
          resolve();

          log('hovering!');
        });


      });
    });

    return action;

  }

  /**
   * Lands drone
   * @return {Promise}
   */
  function land() {

    log('land...');

    action = action.then(function() {
      return new Promise(function(resolve, reject) {
        rollingSpider.land(function() {
          log('landed!');
          resolve();
        });


      });
    });

    return action;
  }

  /**
   * Move drone
   * @param {Object}
   * @return {Promise}
   */
  function move({direction = 'up', speed = 60, steps = 2}) {

    log('move...', direction);

    action = action.then(function() {
      return new Promise(function(resolve, reject) {

        // Direction should be: `up`, `down`, `left`, or `right`
        rollingSpider[direction]({ speed, steps }, function() {
          log('down!');
          resolve();
        });


      });
    });

    return action;

  }

  /**
   * Turn left or right
   * @return {Promise}
   */
  function turn({ direction = 'right', speed = 60, steps = 2 }) {

    log('turn...', direction);

    action = action.then(function() {
      return new Promise(function(resolve, reject) {

        // Turning right or left?
        let methodName = (direction === 'right') ?
          'turnRight' : 'turnLeft';

        rollingSpider[methodName]({ speed, steps }, function() {
          log('turned!', direction);
          resolve();
        });

      });
    });

    return action;


  }

  /**
   * Causes the drone to shut off the motors "instantly"
   * Sometimes has to wait for other commands ahead of it to
   * complete... not fully safe yet
   *
   * @return {Promise}
   */
  function emergency() {

    log('emergency...');

    action = action.then(function() {
      return new Promise(function(resolve, reject) {

        rollingSpider.emergency(function() {
          log('emergency!');
          resolve();
        });


      });
    });

    return action;

  }

  /**
   * Module pattern, exposing functions
   */
  return {
    takeoff,
    land,
    move,
    turn,
    emergency
  };

})();

/**
 * Exports drone module
 */
export default drone;
