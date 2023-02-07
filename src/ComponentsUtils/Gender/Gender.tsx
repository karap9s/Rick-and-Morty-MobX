import React, { useEffect, useState } from 'react';
import { mainStore } from '../../Store/MainStore';
import { IGender, TCheckedGender, TGenderKeys } from '../../Types/MainTypes';
import './Gender.css';

const Gender: React.FC = () => {
  const { setGender } = mainStore;

  const genderMap: IGender = {
    any: '',
    male: 'male',
    female: 'female',
    genderless: 'genderless',
    unknown_second: 'unknown',
  };

  const [checkedGender, setCheckedGender] = useState<TCheckedGender>(
    JSON.parse(
      localStorage.getItem('checkedGender') ||
        JSON.stringify({
          any: true,
          male: false,
          female: false,
          genderless: false,
          unknown: false,
        })
    )
  );

  const handleRadioGender = (e: React.ChangeEvent<HTMLInputElement>) => {
    const gender: TGenderKeys = e.target.value.toLowerCase() as TGenderKeys;
    switch (e.target.value.toLowerCase()) {
      case 'any':
        setGender(genderMap[gender]);
        setCheckedGender({
          any: true,
          male: false,
          female: false,
          genderless: false,
          unknown: false,
        });
        break;
      case 'male':
        setGender(genderMap[gender]);
        setCheckedGender({
          any: false,
          male: true,
          female: false,
          genderless: false,
          unknown: false,
        });
        break;
      case 'female':
        setGender(genderMap[gender]);
        setCheckedGender({
          any: false,
          male: false,
          female: true,
          genderless: false,
          unknown: false,
        });
        break;
      case 'genderless':
        setGender(genderMap[gender]);
        setCheckedGender({
          any: false,
          male: false,
          female: false,
          genderless: true,
          unknown: false,
        });
        break;
      case 'unknown_second':
        setGender(genderMap[gender]);
        setCheckedGender({
          any: false,
          male: false,
          female: false,
          genderless: false,
          unknown: true,
        });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    localStorage.setItem('checkedGender', JSON.stringify(checkedGender));
  });

  return (
    <div>
      <div className="gender">
        <h3>Gender:</h3>
        <div className="any">
          <input
            checked={checkedGender.any}
            onChange={handleRadioGender}
            name="gender"
            id="any"
            type="radio"
            value={'Any'}
          />
          <label htmlFor="any">Any</label>
        </div>
        <div className="male">
          <input
            checked={checkedGender.male}
            onChange={handleRadioGender}
            name="gender"
            id="male"
            type="radio"
            value={'Male'}
          />
          <label htmlFor="male">Male</label>
        </div>
        <div className="female">
          <input
            checked={checkedGender.female}
            onChange={handleRadioGender}
            name="gender"
            id="female"
            type="radio"
            value={'Female'}
          />
          <label htmlFor="female">Female</label>
        </div>
        <div className="genderless">
          <input
            checked={checkedGender.genderless}
            onChange={handleRadioGender}
            name="gender"
            id="genderless"
            type="radio"
            value={'Genderless'}
          />
          <label htmlFor="genderless">Genderless</label>
        </div>
        <div className="unknown">
          <input
            checked={checkedGender.unknown}
            onChange={handleRadioGender}
            name="gender"
            id="unknown_second"
            type="radio"
            value={'unknown_second'}
          />
          <label htmlFor="Unknown_second">Unknown</label>
        </div>
      </div>
    </div>
  );
};

export default Gender;
