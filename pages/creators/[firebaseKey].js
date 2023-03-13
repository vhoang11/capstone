import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import TutorialCard from '../../components/TutorialCard';
import { viewCreatorDetails, viewCreatorTutorials } from '../../api/mergedData';
// import { useAuth } from '../../utils/context/authContext';

export default function ViewCreator() {
  const [creatorTutorials, setCreatorTutorials] = useState({});
  const [creatorDetails, setCreatorDetails] = useState({});
  // const { user } = useAuth();
  const router = useRouter();
  const { firebaseKey } = router.query;

  const getAllCreatorDetails = () => {
    viewCreatorDetails(firebaseKey).then(setCreatorDetails);
    viewCreatorTutorials(firebaseKey).then((user) => {
      viewCreatorTutorials(user.uid).then((creatorTute) => {
        setCreatorTutorials(creatorTute);
      });
    });
  };

  useEffect(() => {
    getAllCreatorDetails();
  }, [firebaseKey]);

  return (
    <div className="mt-5 d-flex flex-wrap" id="creator-page">

      <div className="d-flex flex-column">
        <img src={creatorDetails.image} alt={creatorDetails.name} style={{ width: '30rem', margin: '60px' }} />
      </div>
      <div className="text-grey ms-5 details" style={{ marginTop: '70px', width: '600px' }}>
        <h4>
          {creatorDetails.name}
        </h4>
        <hr />
        <p>{creatorDetails.bio || ''}</p>
      </div>

      <div className="d-flex flex-wrap text-center" style={{ margin: '70px' }}>
        {creatorTutorials.tutorials?.map((tutorial) => (
          <TutorialCard key={tutorial.firebaseKey} tutorialObj={tutorial} onUpdate={getAllCreatorDetails} />
        ))}
      </div>

    </div>
  );
}
