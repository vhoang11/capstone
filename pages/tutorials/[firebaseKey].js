import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { viewTutorialDetails } from '../../api/mergedData';

export default function ViewTutorial() {
  const [tutorialDetails, setTutorialDetails] = useState({});
  const router = useRouter();

  // TODO: grab firebaseKey from url
  const { firebaseKey } = router.query;

  // TODO: make call to API layer to get the data
  useEffect(() => {
    viewTutorialDetails(firebaseKey).then(setTutorialDetails);
  }, [firebaseKey]);

  return (
    <div className="mt-5 d-flex flex-wrap">
      <div className="d-flex flex-column" style={{ width: '30rem' }}>
        <img src={tutorialDetails.image} alt={tutorialDetails.title} />
      </div>
      <div className="text-grey ms-5 details">
        <h5>
          {tutorialDetails.title} by {tutorialDetails.created_by}
          {tutorialDetails.favorite ? ' 🤍' : ''}
        </h5>
        <p>{tutorialDetails.categoryObject?.category_name}</p>
        <hr />
        <p>{tutorialDetails.description || ''}</p>
      </div>
    </div>
  );
}
