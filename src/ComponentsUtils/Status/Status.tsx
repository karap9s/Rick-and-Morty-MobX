import React, { useEffect, useState } from 'react';
import { mainStore } from '../../Store/MainStore';
import { IStatus, TCheckedStatus, TStatusKeys } from '../../Types/MainTypes';
import './Status.css';

const Status: React.FC = () => {
  const { setStatus } = mainStore;

  const statusMap: IStatus = {
    any: '',
    alive: 'alive',
    dead: 'dead',
    unknown: 'unknown',
  };

  const [checkedStatus, setCheckedStatus] = useState<TCheckedStatus>(
    JSON.parse(
      localStorage.getItem('checkedStatus') ||
        JSON.stringify({
          any: true,
          alive: false,
          dead: false,
          unknown: false,
        })
    )
  );

  const handleRadioStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    const status: TStatusKeys = e.target.value.toLowerCase() as TStatusKeys;
    switch (e.target.value.toLowerCase()) {
      case 'any':
        setStatus(statusMap[status]);
        setCheckedStatus({
          any: true,
          alive: false,
          dead: false,
          unknown: false,
        });
        break;
      case 'alive':
        setStatus(statusMap[status]);
        setCheckedStatus({
          any: false,
          alive: true,
          dead: false,
          unknown: false,
        });
        break;
      case 'dead':
        setStatus(statusMap[status]);
        setCheckedStatus({
          any: false,
          alive: false,
          dead: true,
          unknown: false,
        });
        break;
      case 'unknown':
        setStatus(statusMap[status]);
        setCheckedStatus({
          any: false,
          alive: false,
          dead: false,
          unknown: true,
        });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    localStorage.setItem('checkedStatus', JSON.stringify(checkedStatus));
  });

  return (
    <div className="status">
      <h3>Status:</h3>
      <div className="any">
        <input
          checked={checkedStatus.any}
          type="radio"
          name="status"
          id="any"
          value={'Any'}
          onChange={handleRadioStatus}
        />
        <label htmlFor="any">Any</label>
      </div>
      <div className="dead">
        <input
          checked={checkedStatus.dead}
          type="radio"
          name="status"
          id="dead"
          value={'Dead'}
          onChange={handleRadioStatus}
        />
        <label htmlFor="dead">Dead</label>
      </div>
      <div className="alive">
        <input
          checked={checkedStatus.alive}
          type="radio"
          name="status"
          id="alive"
          value={'Alive'}
          onChange={handleRadioStatus}
        />
        <label htmlFor="alive">Alive</label>
      </div>
      <div className="unknown">
        <input
          checked={checkedStatus.unknown}
          type="radio"
          name="status"
          id="unknown"
          value={'Unknown'}
          onChange={handleRadioStatus}
        />
        <label htmlFor="unknown">Unknown</label>
      </div>
    </div>
  );
};

export default Status;
