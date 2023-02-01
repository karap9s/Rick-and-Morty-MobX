import React from 'react';
import './Gender.css';

const Gender: React.FC = () => {
  return (
    <div>
      <div className="gender">
        <h3>Gender:</h3>
        <div className="any">
          <input
            // onChange={handleRadioGender}
            // checked={checkedGender.any}
            name="gender"
            id="any"
            type="radio"
            value={'Any'}
          />
          <label htmlFor="any">Any</label>
        </div>
        <div className="male">
          <input
            // checked={checkedGender.male}
            // onChange={handleRadioGender}
            name="gender"
            id="male"
            type="radio"
            value={'Male'}
          />
          <label htmlFor="male">Male</label>
        </div>
        <div className="female">
          <input
            // checked={checkedGender.female}
            // onChange={handleRadioGender}
            name="gender"
            id="female"
            type="radio"
            value={'Female'}
          />
          <label htmlFor="female">Female</label>
        </div>
        <div className="genderless">
          <input
            // checked={checkedGender.genderless}
            // onChange={handleRadioGender}
            name="gender"
            id="genderless"
            type="radio"
            value={'Genderless'}
          />
          <label htmlFor="genderless">Genderless</label>
        </div>
        <div className="unknown">
          <input
            // checked={checkedGender.unknown}
            // onChange={handleRadioGender}
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
