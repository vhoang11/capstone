import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { getTutorials } from '../api/tutorialData';
import TutorialCard from '../components/TutorialCard';

function AllTutorials() {
  const [tutorials, setTutorials] = useState([]);
  const { user } = useAuth();

  const getAllTheTutorials = () => {
    getTutorials(user.uid).then(setTutorials);
  };

  useEffect(() => {
    getAllTheTutorials();
  }, []);

  return (
    <div className="text-center my-4" style={{ alignItems: 'center' }}>
      <Head>
        <title>Tutorials</title>
      </Head>
      <Link href="/tutorials/new" passHref>
        <Button style={{ backgroundColor: '#023e8a' }}>Create Tutorial</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {tutorials.map((tutorial) => (
          <TutorialCard key={tutorial.firebaseKey} tutorialObj={tutorial} onUpdate={getAllTheTutorials} />
        ))}
      </div>

    </div>
  );
}

export default AllTutorials;
