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
      <img src="https://images.food52.com/YjxdFvpJkSkrlg3hHSLzdVDBlYA=/1200x675/86e0b861-dbba-4913-ba76-cf358b88ba5b--MakeThriftMend_p177b.jpg" alt="hero" style={{ width: '100%' }} />
      <h1>Tutorials</h1>
      <Link href="/tutorials/new" passHref>
        <Button style={{ backgroundColor: '#023e8a', marginBottom: '30px', marginTop: '20px' }}>Create Tutorial</Button>
      </Link>
      <div id="tutorial-section">
        {tutorials.map((tutorial) => (
          <TutorialCard key={tutorial.firebaseKey} tutorialObj={tutorial} onUpdate={getAllTheTutorials} />
        ))}
      </div>

    </div>
  );
}

export default AllTutorials;
