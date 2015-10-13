import React from 'react';

export default ({ status, takeoff, land, emergency, move, turn }) => {

  return (
    <div>
      <p>
        <strong>Status: </strong>
        { status }
      </p>

      <ul>
        <li>
          <a href="" onClick={takeoff}>Takeoff</a>
        </li>
        <li>
          <a href="" onClick={land}>Land</a>
        </li>
        <li>
          <a href="" onClick={emergency}>Emergency</a>
        </li>
      </ul>

      <h2>Moving drone</h2>
      <ul>
        <li>
          <a href="" onClick={move.bind(null, 'forward')}>Move forward</a>
        </li>
        <li>
          <a href="" onClick={move.bind(null, 'right')}>Move right</a>
        </li>
        <li>
          <a href="" onClick={move.bind(null, 'left')}>Move left</a>
        </li>
        <li>
          <a href="" onClick={move.bind(null, 'backward')}>Move backward</a>
        </li>
      </ul>

      <h2>Turning drone</h2>
      <ul>
        <li>
          <a href="" onClick={turn.bind(null, 'up')}>Rise drone</a>
        </li>
        <li>
          <a href="" onClick={turn.bind(null, 'right')}>Turn right</a>
        </li>
        <li>
          <a href="" onClick={turn.bind(null, 'down')}>Lower drone</a>
        </li>
        <li>
          <a href="" onClick={turn.bind(null, 'left')}>Turn left</a>
        </li>
      </ul>
    </div>
  );
}
