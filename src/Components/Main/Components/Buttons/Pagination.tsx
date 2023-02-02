import React from 'react';
import './Pagination.css';

const Pagination: React.FC = () => {
  return (
    <div className="wrapper">
      <div className="line">
        <button
          // onClick={() => dispatch(decrementPage())}
          className="page control"
        >
          Previous
        </button>
        {buttons.map((el: string | number) => (
          <button
            disabled={el === '..' || el === '...' || el === '....'}
            key={el}
            // onClick={handler}
            className="page"
          >
            {el}
          </button>
        ))}
        <button
          // onClick={() => dispatch(incrementPage())}
          className="page control"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
