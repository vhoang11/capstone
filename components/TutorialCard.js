import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deleteTutorial } from '../api/tutorialData';

function TutorialCard({ tutorialObj, onUpdate, isMine }) {
  const deleteThisTutorial = () => {
    if (window.confirm(`Delete ${tutorialObj.title}?`)) {
      deleteTutorial(tutorialObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <Card style={{
      width: '16rem', height: '27rem', margin: '10px', border: 'transparent',
    }}
    >
      <Card.Img variant="top" src={tutorialObj.image} alt={tutorialObj.title} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>{tutorialObj.favorite ? ' 💛' : ''} {tutorialObj.title}</Card.Title>
        <p className="card-text bold">by {tutorialObj.created_by}</p>
        <Link href={`/tutorials/${tutorialObj.firebaseKey}`} passHref>
          <Button variant="primary" className="m-2" style={{ backgroundColor: '#7192be', fontSize: '10px' }}>VIEW</Button>
        </Link>
        {isMine
          ? (
            <>
              <Link href={`/tutorials/edit/${tutorialObj.firebaseKey}`} passHref>
                <Button variant="info" style={{ backgroundColor: '#00b4d8', fontSize: '10px' }}>EDIT</Button>
              </Link>
              <Button variant="danger" onClick={deleteThisTutorial} className="m-2" style={{ backgroundColor: '#e9d985', borderColor: '#e9d985', fontSize: '10px' }}>
                DELETE
              </Button>
            </>

          )
          : ('')}
      </Card.Body>
    </Card>
  );
}

TutorialCard.propTypes = {
  tutorialObj: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    created_by: PropTypes.string,
    creator_id: PropTypes.string,
    favorite: PropTypes.bool,
    firebaseKey: PropTypes.string,
    uid: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
  isMine: PropTypes.bool.isRequired,
};

export default TutorialCard;
