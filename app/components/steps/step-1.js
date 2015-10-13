import React from 'react';

export default ({ status, takeoff, land, emergency, move, turn }) => {

  return (
    <div>
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
    </div>
  );
}
