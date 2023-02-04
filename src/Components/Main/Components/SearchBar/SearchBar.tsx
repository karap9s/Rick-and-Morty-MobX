import React, { FormEvent, useEffect, useState } from 'react';
import './SearchBar.css';
import Pic from '../../../../assets/icons/1200px-Magnifying_glass_icon.png';
import Gender from '../../../../ComponentsUtils/Gender/Gender';
import Status from '../../../../ComponentsUtils/Status/Status';
import { mainStore } from '../../../../Store/MainStore';
import { observer } from 'mobx-react-lite';

const SearchBar: React.FC = observer(() => {
  const { setName, setType } = mainStore;

  const [search, setSearch] = useState(localStorage.getItem('search') || '');

  const handlerInput = (event: FormEvent<HTMLInputElement>): void => {
    setSearch(event.currentTarget.value);
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    setName(search);
  };

  useEffect(() => {
    localStorage.setItem('search', search);
  });

  useEffect(() => {
    setName(search);
  }, []);

  return (
    <form onSubmit={handleSubmit} className="search_form">
      <Status />
      <div className="search_wrapper">
        <select
          onChange={(event) => {
            setType(
              event.target.options[
                event.target.selectedIndex
              ].text.toLowerCase()
            );
          }}
          name="filter"
          id="filter"
        >
          <option value="name">Name</option>
          <option value="species">Species</option>
        </select>
        <input
          className="search"
          type="text"
          placeholder="Search..."
          onChange={handlerInput}
          value={search}
        />
        <button type="submit" className="search_btn">
          <img src={Pic} alt="button" width={30} />
        </button>
      </div>
      <Gender />
    </form>
  );
});

export default SearchBar;
