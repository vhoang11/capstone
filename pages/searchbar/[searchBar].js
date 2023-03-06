/* eslint-disable react/no-unknown-property */
/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getTutorials } from '../../api/tutorialData';

export default function SearchBar() {
  const [searchTutorials, setSearchTutorials] = useState([]);

  const router = useRouter();
  const { searchBar } = router.query;

  const searchAllTutorials = () => {
    getTutorials().then((tutorials) => {
      const filteredTutorials = tutorials.filter((tutorial) => tutorial.tutorial.toLowerCase().includes(searchBar) || tutorial.name.toLowerCase().includes(searchBar) || tutorial.timestamp.includes(searchBar));

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
      <div>
        {searchTutorials.map((aim) => <tutorialCard key={aim.firebaseKey} tutorialObj={aim} onUpdate={searchAllTutorials} />)}
      </div>
    </>
  );
}
