import React from 'react';

export default ({ status, takeoff, land, emergency, move, turn }) => {

  return (
    <div className="angular-2-sucks">
      <p className="status">
        <strong>Status: </strong>
        { status }
      </p>

      <img src="images/goat.png" alt="" id="goat"/>

      <div className="buttons">
        <button onClick={takeoff}>Takeoff</button>
        <button onClick={land}>Land</button>
        <button onClick={emergency}>Emergency</button>
      </div>

      <ul className="d-arrows left">
        <li className="d-arrow">
          <i className="fa fa-arrow-up"></i>
          <a href="" onClick={move.bind(null, 'forward')}>Move forward</a>
        </li>
        <li className="d-arrow">
          <i className="fa fa-arrow-right"></i>
          <a href="" onClick={move.bind(null, 'right')}>Move right</a>
        </li>
        <li className="d-arrow">
          <i className="fa fa-arrow-left"></i>
          <a href="" onClick={move.bind(null, 'left')}>Move left</a>
        </li>
        <li className="d-arrow">
          <i className="fa fa-arrow-down"></i>
          <a href="" onClick={move.bind(null, 'backward')}>Move backward</a>
        </li>
      </ul>

      <ul className="d-arrows right">
        <li className="d-arrow">
          <i className="fa fa-arrow-up"></i>
          <a href="" onClick={turn.bind(null, 'up')}>Rise drone</a>
        </li>
        <li className="d-arrow">
          <i className="fa fa-arrow-right"></i>
          <a href="" onClick={turn.bind(null, 'right')}>Turn right</a>
        </li>
        <li className="d-arrow">
          <i className="fa fa-arrow-left"></i>
          <a href="" onClick={turn.bind(null, 'down')}>Lower drone</a>
        </li>
        <li className="d-arrow">
          <i className="fa fa-arrow-down"></i>
          <a href="" onClick={turn.bind(null, 'left')}>Turn left</a>
        </li>
      </ul>
    </div>
  );
}
