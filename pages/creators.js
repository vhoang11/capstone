import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { getCreators } from '../api/creatorData';
import CreatorCard from '../components/CreatorCard';
import { useAuth } from '../utils/context/authContext';

export default function ShowCreators() {
  const [creators, setCreators] = useState([]);
  const { user } = useAuth();

  const getAllCreators = () => {
    getCreators().then(setCreators);
  };

  useEffect(() => {
    getAllCreators();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="text-center my-4" style={{ marginTop: '100px' }}>
      <Head>
        <title>Creators</title>
      </Head>
      <img src="https://www.rapidtransition.org/wp-content/uploads/2022/01/repair-quote-1.png" alt="hero" style={{ width: '100%' }} />
      <h1 style={{ marginTop: '50px' }}>Creators</h1>
      <Link href="/creators/new" passHref>
        <Button style={{ backgroundColor: '#023e8a', marginBottom: '50px', marginTop: '20px' }}>Create Profile</Button>
      </Link>
      <div id="categories-section">
        {creators.map((creator) => (
          <CreatorCard key={creator.firebaseKey} creatorObj={creator} onUpdate={getAllCreators} isMine={creator.uid === user.uid} />
        ))}
      </div>

    </div>
  );
}
