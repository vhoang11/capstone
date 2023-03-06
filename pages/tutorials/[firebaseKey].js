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
    <div className="mt-5 d-flex flex-wrap" id="tutorial-page">

      <div className="d-flex flex-column">
        <img src={tutorialDetails.image} alt={tutorialDetails.title} style={{ width: '40rem', marginBottom: '100px', marginLeft: '40px' }} />
      </div>
      <div className="text-grey ms-5 details" style={{ marginTop: '20px' }}>
        <h5>
          {tutorialDetails.title} by {tutorialDetails.created_by}
          {tutorialDetails.favorite ? ' 🤍' : ''}
        </h5>
        <p>on {tutorialDetails.timestamp}</p>
        <p>{tutorialDetails.categoryObject?.category_name}</p>
        <hr />
        <p>{tutorialDetails.description || ''}</p>
      </div>

      <div className="text-grey ms-5 details d-flex flex-wrap" id="tutorial-steps">
        <div>
          <img src={tutorialDetails.imageone} alt={tutorialDetails.title} />
          <p>{tutorialDetails.stepone}</p>
        </div>

        <div>
          <img src={tutorialDetails.imagetwo} alt={tutorialDetails.title} />
          <p>{tutorialDetails.steptwo}</p>
        </div>

        <div>
          <img src={tutorialDetails.imagethree} alt={tutorialDetails.title} />
          <p>{tutorialDetails.stepthree}</p>
        </div>

      </div>

    </div>
  );
}
