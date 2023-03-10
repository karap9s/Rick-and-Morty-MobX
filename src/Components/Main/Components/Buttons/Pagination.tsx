import React, { useEffect, useState } from 'react';
import './Pagination.css';
import { mainStore } from '../../../../Store/MainStore';
import { TPagesCount } from '../../../../Types/MainTypes';
import { observer } from 'mobx-react-lite';

const Pagination: React.FC = observer(() => {
  const { pagesCount, page, gender, status, name, type } = mainStore;
  const {
    setPagesCount,
    decrementPage,
    incrementPage,
    customPage,
    setCardsArray,
  } = mainStore;
  const [buttons, setButtons] = useState<TPagesCount[]>([] as TPagesCount[]);

  useEffect(() => {
    setPagesCount().then(() => {
      setCardsArray();
      const getPagination = (): TPagesCount[] => {
        switch (pagesCount) {
          case 0:
            return [];
          case 1:
            return [1];
          case 2:
            return [1, 2];
          case 3:
            return [1, 2, 3];
          case 4:
            return [1, 2, 3, 4];
          case 5:
            return [1, 2, 3, 4, 5];
          default:
            break;
        }
        if (page <= 3) {
          return [1, 2, 3, 4, '...', pagesCount];
        }
        if (page <= pagesCount - 3) {
          return [1, '..', page - 1, page, page + 1, '....', pagesCount];
        }
        return [
          1,
          '...',
          pagesCount - 3,
          pagesCount - 2,
          pagesCount - 1,
          pagesCount,
        ];
      };
      setButtons(getPagination);
    });
  }, [pagesCount, page, gender, status, name, type]);

  return (
    <div className="pagination-wrapper">
      <div className="line">
        <button onClick={() => decrementPage()} className="page control">
          Previous
        </button>
        {buttons.map((el: string | number, index: number) => (
          <button
            disabled={typeof el === 'string'}
            key={index}
            onClick={() => customPage(el as number)}
            className="page"
          >
            {el}
          </button>
        ))}
        <button onClick={() => incrementPage()} className="page control">
          Next
        </button>
      </div>
    </div>
  );
});

export default Pagination;
