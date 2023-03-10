import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import { viewTutorialDetails } from '../../api/mergedData';
import { deleteTutorial } from '../../api/tutorialData';

export default function ViewTutorial({ tutorialObj, onUpdate, isMine }) {
  const [tutorialDetails, setTutorialDetails] = useState({});
  const router = useRouter();

  const deleteThistutorial = () => {
    if (window.confirm(`Delete ${tutorialObj.title}?`)) {
      deleteTutorial(tutorialObj.firebaseKey).then(() => onUpdate());
    }
  };
  // TODO: grab firebaseKey from url
  const { firebaseKey } = router.query;

  // TODO: make call to API layer to get the data
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
      {isMine
        ? (
          <>
            <Link href={`/tutorials/edit/${tutorialObj.firebaseKey}`} passHref>
              <Button variant="info" style={{ backgroundColor: '#00b4d8', fontSize: '10px' }}>EDIT</Button>
            </Link>
            <Button variant="danger" onClick={deleteThistutorial} className="m-2" style={{ backgroundColor: '#e9d985', borderColor: '#e9d985', fontSize: '10px' }}>
              DELETE
            </Button>
          </>

        )
        : ('')}

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

ViewTutorial.propTypes = {
  tutorialObj: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    created_by: PropTypes.string,
    favorite: PropTypes.bool,
    firebaseKey: PropTypes.string,
    uid: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
  isMine: PropTypes.bool.isRequired,
};
