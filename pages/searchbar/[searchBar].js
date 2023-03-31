/* eslint-disable react/no-unknown-property */
/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getTutorials } from '../../api/tutorialData';
import TutorialCard from '../../components/TutorialCard';

export default function SearchBar() {
  const [searchTutorials, setSearchTutorials] = useState([]);

  const router = useRouter();
  const { searchBar } = router.query;

  const searchAllTutorials = () => {
    getTutorials().then((tutorials) => {
      const filteredTutorials = tutorials.filter((tutorial) => tutorial.title.toLowerCase().includes(searchBar) || tutorial.description.toLowerCase().includes(searchBar) || tutorial.description.includes(searchBar) || tutorial.timestamp.includes(searchBar));

      setSearchTutorials(filteredTutorials);
    });
  };

  useEffect(() => {
    searchAllTutorials();
    return () => {
      setSearchTutorials([]);
    };
  }, [searchBar]);

  return (
    <>
      <div id="search-title">
        <h2 style={{ textAlign: 'center', marginTop: '50px' }}>Search Results</h2>
      </div>
      {searchTutorials.length === 0 ? (
        <p style={{
          textAlign: 'center', marginTop: '50px', backgroundColor: 'rgba(255,255,255, 0.5)', padding: '50px',
        }}
        >No Search Results Found
        </p>
      ) : (
        <div className="d-flex flex-wrap text-center" id="search-results" style={{ marginTop: '50px', padding: '30px', backgroundColor: 'rgba(255,255,255, 0.5)' }}>
          {searchTutorials.map((tutorial) => <TutorialCard key={tutorial.firebaseKey} tutorialObj={tutorial} onUpdate={searchAllTutorials} />)}

        </div>
      )}
    </>
  );
}
