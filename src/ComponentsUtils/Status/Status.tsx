import React from 'react';
import './Status.css';

const Status: React.FC = () => {
  return (
    <div className="status">
      <h3>Status:</h3>
      <div className="any">
        <input
          // checked={checkedStatus.any}
          type="radio"
          name="status"
          id="any"
          value={'Any'}
          // onChange={handleRadioStatus}
        />
        <label htmlFor="any">Any</label>
      </div>
      <div className="dead">
        <input
          // checked={checkedStatus.dead}
          type="radio"
          name="status"
          id="dead"
          value={'Dead'}
          // onChange={handleRadioStatus}
        />
        <label htmlFor="dead">Dead</label>
      </div>
      <div className="alive">
        <input
          // checked={checkedStatus.alive}
          type="radio"
          name="status"
          id="alive"
          value={'Alive'}
          // onChange={handleRadioStatus}
        />
        <label htmlFor="alive">Alive</label>
      </div>
      <div className="unknown">
        <input
          // checked={checkedStatus.unknown}
          type="radio"
          name="status"
          id="unknown"
          value={'Unknown'}
          // onChange={handleRadioStatus}
        />
        <label htmlFor="unknown">Unknown</label>
      </div>
    </div>
  );
};

export default Status;
