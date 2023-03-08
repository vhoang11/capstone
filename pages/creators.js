import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { getCreators } from '../api/creatorData';
import CreatorCard from '../components/CreatorCard';

export default function ShowCreators() {
  const [creators, setCreators] = useState([]);

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
      <h1>Creators</h1>
      <div id="categories-section">
        {creators.map((creator) => (
          <CreatorCard key={creator.firebaseKey} creatorObj={creator} onUpdate={getAllCreators} />
        ))}
      </div>

    </div>
  );
}
