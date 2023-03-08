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

      <div className="d-flex flex-column" id="tutorial-details">
        <img src={tutorialDetails.image} alt={tutorialDetails.title} style={{ width: '38rem', marginBottom: '100px', marginLeft: '40px' }} />
      </div>
      <div className="text-grey ms-5 details" style={{ marginTop: '20px', width: '400px' }}>
        <h5>
          {tutorialDetails.title} by {tutorialDetails.created_by}
          {tutorialDetails.favorite ? ' 🤍' : ''}
        </h5>
        <p>on {tutorialDetails.timestamp}</p>
        <p>{tutorialDetails.categoryObject?.category_name}</p>
        <hr />
        <p>{tutorialDetails.description || ''}</p>
      </div>

      <div id="tutorial-steps">
        <h2 style={{ marginLeft: '75px' }}>Instructions</h2>
        <div className="steps">
          <img src={tutorialDetails.imageone} alt={tutorialDetails.title} />
          <p>{tutorialDetails.stepone}</p>
        </div>

        <div className="steps">
          <img src={tutorialDetails.imagetwo} alt={tutorialDetails.title} />
          <p>{tutorialDetails.steptwo}</p>
        </div>

        <div className="steps">
          <img src={tutorialDetails.imagethree} alt={tutorialDetails.title} />
          <p>{tutorialDetails.stepthree}</p>
        </div>

        <div className="steps">
          <img src={tutorialDetails.imagefour} alt={tutorialDetails.title} />
          <p>{tutorialDetails.stepfour}</p>
        </div>

        <div className="steps">
          <img src={tutorialDetails.imagefive} alt={tutorialDetails.title} />
          <p>{tutorialDetails.stepfive}</p>
        </div>

        <div className="steps">
          <img src={tutorialDetails.imagesix} alt={tutorialDetails.title} />
          <p>{tutorialDetails.stepsix}</p>
        </div>

        <div className="steps">
          <img src={tutorialDetails.imageseven} alt={tutorialDetails.title} />
          <p>{tutorialDetails.stepseven}</p>
        </div>

        <div className="steps">
          <img src={tutorialDetails.imageeight} alt={tutorialDetails.title} />
          <p>{tutorialDetails.stepeight}</p>
        </div>

        <div className="steps">
          <img src={tutorialDetails.imagenine} alt={tutorialDetails.title} />
          <p>{tutorialDetails.stepnine}</p>
        </div>

        <div className="steps">
          <img src={tutorialDetails.imageten} alt={tutorialDetails.title} />
          <p>{tutorialDetails.stepten}</p>
        </div>

      </div>

    </div>
  );
}
