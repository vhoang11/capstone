import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { viewTutorialDetails } from '../../api/mergedData';

export default function ViewTutorial() {
  const [tutorialDetails, setTutorialDetails] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  // const deleteThistutorial = () => {
  //   if (window.confirm(`Delete ${tutorialObj.title}?`)) {
  //     deleteTutorial(tutorialObj.firebaseKey).then(() => onUpdate());
  //   }
  // };

  useEffect(() => {
    viewTutorialDetails(firebaseKey).then(setTutorialDetails);
  }, [firebaseKey]);

  return (
    <div className="mt-5 d-flex flex-wrap" id="tutorial-page">

      <div className="d-flex flex-column" id="tutorial-details">
        <img src={tutorialDetails.image} alt={tutorialDetails.title} style={{ width: '38rem', margin: '50px' }} />
      </div>
      <div className="text-grey ms-5 details" style={{ marginTop: '70px', width: '400px' }}>
        <h4>
          {tutorialDetails.favorite ? '💛 ' : ''}
          <b>{tutorialDetails.title}</b>
        </h4>
        <h6>
          by {tutorialDetails.created_by}
        </h6>
        <p>on {tutorialDetails.timestamp}</p>
        <p><b>{tutorialDetails.categoryObject?.category_name}</b></p>
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

// ViewTutorial.propTypes = {
//   tutorialObj: PropTypes.shape({
//     title: PropTypes.string,
//     image: PropTypes.string,
//     description: PropTypes.string,
//     created_by: PropTypes.string,
//     favorite: PropTypes.bool,
//     firebaseKey: PropTypes.string,
//     uid: PropTypes.string,
//   }).isRequired,
//   onUpdate: PropTypes.func.isRequired,
//   isMine: PropTypes.bool.isRequired,
// };
