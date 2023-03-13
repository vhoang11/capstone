import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { deleteCreator } from '../api/creatorData';

export default function CreatorCard({ creatorObj, onUpdate, isMine }) {
  const deleteThisCreator = () => {
    if (window.confirm(`Delete ${creatorObj.name}?`)) {
      deleteCreator(creatorObj.firebaseKey).then(() => onUpdate());
    }
  };
  return (
    <Card style={{
      width: '16rem', margin: '10px', height: '30rem', border: 'transparent',
    }}
    >
      <Card.Img variant="top" src={creatorObj.image} alt={creatorObj.name} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>{creatorObj.name}</Card.Title>
        <Link href={`/creators/${creatorObj.firebaseKey}`} passHref>
          <Button variant="primary" className="m-2" style={{ backgroundColor: '#7192be', margin: '20px', fontSize: '10px' }}>VIEW</Button>
        </Link>
        {isMine
          ? (
            <>
              <Link href={`/creators/edit/${creatorObj.firebaseKey}`} passHref>
                <Button variant="info" style={{ backgroundColor: '#00b4d8', fontSize: '10px' }}>EDIT</Button>
              </Link>
              <Button variant="danger" onClick={deleteThisCreator} className="m-2" style={{ backgroundColor: '#e9d985', borderColor: '#e9d985', fontSize: '10px' }}>
                DELETE
              </Button>
            </>

          )
          : ('')}
      </Card.Body>
    </Card>
  );
}

CreatorCard.propTypes = {
  creatorObj: PropTypes.shape({
    name: PropTypes.string,
    firebaseKey: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
  isMine: PropTypes.bool.isRequired,
};
