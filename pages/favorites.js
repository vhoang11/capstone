import React, { useEffect, useState } from 'react';
import { favoriteTutorials } from '../api/tutorialData';
import TutorialCard from '../components/TutorialCard';
import { useAuth } from '../utils/context/authContext';

function FavoriteTutorials() {
  const { user } = useAuth();
  const [faveTutorials, setFaveTutorials] = useState([]);

  const getFaveTutorials = () => {
    favoriteTutorials(user.uid).then(setFaveTutorials);
  };

  useEffect(() => {
    getFaveTutorials();
  }, []);

  return (
    <div className="text-center my-4">
      <div>
        <h1 style={{ marginTop: '150px', textAlign: 'center' }}>My Favorites</h1>
      </div>

      <div className="d-flex flex-wrap" style={{ marginTop: '50px' }}>
        {faveTutorials.map((tutorial) => (
          <TutorialCard
            key={tutorial.firebaseKey}
            tutorialObj={tutorial}
            onUpdate={getFaveTutorials}
            isMine={tutorial.uid === user.uid}
          />
        ))}
      </div>
    </div>

  );
}

export default FavoriteTutorials;
