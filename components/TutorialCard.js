import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deleteTutorial } from '../api/tutorialData';

function TutorialCard({ tutorialObj, onUpdate }) {
  // FOR DELETE, WE NEED TO REMOVE THE BOOK AND HAVE THE VIEW RERENDER,
  // SO WE PASS THE FUNCTION FROM THE PARENT THAT GETS THE BOOKS
  const deleteThistutorial = () => {
    if (window.confirm(`Delete ${tutorialObj.title}?`)) {
      deleteTutorial(tutorialObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '16rem', height: '27rem', margin: '10px' }}>
      <Card.Img variant="top" src={tutorialObj.image} alt={tutorialObj.title} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>{tutorialObj.title}</Card.Title>
        <p className="card-text bold">by {tutorialObj.created_by}</p>
        <Link href={`/tutorials/${tutorialObj.firebaseKey}`} passHref>
          <Button variant="primary" className="m-2" style={{ backgroundColor: '#023e8a', fontSize: '10px' }}>VIEW</Button>
        </Link>
        <Link href={`/tutorials/edit/${tutorialObj.firebaseKey}`} passHref>
          <Button variant="info" style={{ backgroundColor: '#00b4d8', fontSize: '10px' }}>EDIT</Button>
        </Link>
        <Button variant="danger" onClick={deleteThistutorial} className="m-2" style={{ backgroundColor: '#f77f00', fontSize: '10px' }}>
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

TutorialCard.propTypes = {
  tutorialObj: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    created_by: PropTypes.bool,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default TutorialCard;
