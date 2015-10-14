import React from 'react';

export default ({ status, takeoff, land, emergency, move, turn }) => {

  return (
    <div className="angular-2-sucks">

      <div className="buttons">
        <button onClick={takeoff}>Takeoff</button>
        <button onClick={land}>Land</button>
        <button onClick={emergency}>Emergency</button>
      </div>

    </div>
  );
}
