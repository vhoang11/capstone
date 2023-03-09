import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import TutorialCard from '../../components/TutorialCard';
import { viewCreatorDetails } from '../../api/mergedData';

export default function ViewCreator() {
  const [creatorDetails, setCreatorDetails] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  const getAllCreatorTutorials = () => {
    viewCreatorDetails(firebaseKey).then(setCreatorDetails);
  };

  useEffect(() => {
    getAllCreatorTutorials();
  }, []);

  return (
    <div className="mt-5 d-flex flex-wrap" id="creator-page">

      <div className="d-flex flex-column">
        <img src={creatorDetails.image} alt={creatorDetails.name} style={{ width: '30rem', margin: '50px' }} />
      </div>
      <div className="text-grey ms-5 details" style={{ marginTop: '70px', width: '600px' }}>
        <h5>
          {creatorDetails.name}
        </h5>
        <hr />
        <p>{creatorDetails.bio || ''}</p>
      </div>

      <div className="d-flex flex-wrap text-center" style={{ margin: '50px' }}>
        {creatorDetails.tutorials?.map((tutorial) => (
          <TutorialCard key={tutorial.firebaseKey} tutorialObj={tutorial} onUpdate={getAllCreatorTutorials} />
        ))}
      </div>

    </div>
  );
}
