import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { mainStore } from '../../Store/MainStore';
import './Information.css';

const Information: React.FC = observer(() => {
  const { card, currentCharacter, content } = mainStore;
  const { setContent, setEpisodeData, setCurrentCharacter } = mainStore;

  useEffect(() => {
    const series = async (episodes: string[]): Promise<void> => {
      setContent();
      for (let i = 0; i < episodes.length; i++) {
        const item = episodes[i];
        const last = item.lastIndexOf('/');
        const result = item.substring(last + 1, item.length);
        setEpisodeData(Number(result));
      }
    };

    series(card.episode);
  }, [card.episode, card]);

  return (
    <>
      {!currentCharacter ? (
        <Navigate to="/" />
      ) : (
        <div className="background_wrapper">
          <div className="modal_wrapper">
            <Link
              onClick={() => setCurrentCharacter('')}
              className="close_link"
              to={'/'}
            >
              <button className="close">Back</button>
            </Link>
            <div className="modal">
              <div className="location">
                <h2 className="location_heading">Location</h2>
                <p className="location_name">{card.location.name}</p>
              </div>
              <div className="dimension">
                <h2 className="dimension_heading>">Origin</h2>
                <p className="dimension_name">{card.origin.name}</p>
              </div>
              <div className="episodes">
                <h2 className="episodes_heading">List of episodes</h2>
                <table className="episodes_th">
                  <thead>
                    <tr className="episodes_series">
                      <th className="episodes_elementHead">#</th>
                      <th className="episodes_elementHead">Name</th>
                      <th className="episodes_elementHead">Air Date</th>
                      <th className="episodes_elementHead">Episode</th>
                    </tr>
                  </thead>
                  <tbody className="episodes_body">
                    {content.map((row) => (
                      <tr className="episodes_series" key={row.key}>
                        <th className="episodes_element">{row.key}</th>
                        <th className="episodes_element">{row.name}</th>
                        <th className="episodes_element">{row.date}</th>
                        <th className="episodes_element">{row.episode}</th>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
});

export default Information;
