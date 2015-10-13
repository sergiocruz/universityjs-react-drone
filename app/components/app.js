import { socket } from './lib/socket';
import keys from './lib/keys';
import React from 'react';

export default class App extends React.Component {

  constructor() {
    super();

    // state
    this.state = {
      status: 'landed'
    };

    // Bindings
    this._changeStatus = this._changeStatus.bind(this);
    this._takeoff = this._takeoff.bind(this);
    this._land = this._land.bind(this);
    this._onKeydown = this._onKeydown.bind(this);
    this._turn = this._turn.bind(this);
    this._emergency = this._emergency.bind(this);
  }

  componentDidMount() {

    socket.on('connected', () => {
      console.log('connected!');

      socket.on('hello', function(data) {
        console.log('hello', data);
      })

      socket.on('didTakeoff', () => {
        console.log('did take off!');
        this._changeStatus('flying');
      });

      socket.on('didLand', () => {
        console.log('did land!');
        this._changeStatus('landed');
      });
    });

    document.addEventListener('keydown', this._onKeydown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this._onKeydown);
  }

  render() {

    // Methods that will be passed as props
    const droneMethods = {
      status: this.state.status,
      takeoff: this._takeoff,
      land: this._land,
      turn: this._turn,
      move: this._move,
      emergency: this._emergency
    };

    return (
      <div>

        { this.props.children && React.cloneElement(this.props.children, droneMethods) }

      </div>
    );
  }

  _changeStatus(status) {
    this.setState({
      status: status
    });
  }

  _takeoff(e) {

    if (e) {
      e.preventDefault();
    }

    console.log('_takeoff()');
    socket.emit('takeoff');
  }

  _land(e) {

    if (e) {
      e.preventDefault();
    }

    console.log('_land()');
    socket.emit('land');
  }

  _move(direction, e) {

    if (e) {
      e.preventDefault();
    }

    console.log('_move()', direction);
    socket.emit('move', direction);

  }

  _turn(direction, e) {

    if (e) {
      e.preventDefault();
    }

    console.log('_turn()', direction);
    socket.emit('turn', direction);
  }

  _emergency(e) {
    if (e) {
      e.preventDefault();
    }

    socket.emit('emergency');
  }

  _onKeydown(e) {

    // debugger;
    // return;

    // console.log('keydown', e.which, keys, e.which === keys.RIGHT);

    switch (e.which) {

      case keys.SPACE:
        if (this.state.status === 'landed') {
          this._takeoff();
        } else {
          this._land();
        }
        break;

      case keys.ARROW_RIGHT:

        console.log('RIGHT');

        if (!e.shiftKey) {
          this._move('right');
        } else {
          this._turn('right');
        }

        break;

      case keys.ARROW_LEFT:

        console.log('LEFT');

        if (!e.shiftKey) {
          this._move('left');
        } else {
          this._turn('left');
        }

        break;

      case keys.ARROW_UP:

        console.log('UP');

        if (!e.shiftKey) {
          this._move('forward');
        } else {
          this._move('up');
        }

        break;

      case keys.ARROW_DOWN:

        console.log('DOWN');

        if (!e.shiftKey) {
          this._move('backward');
        } else {
          this._move('down');
        }

        break;

    }
  }

}
