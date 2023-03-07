import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { Button } from 'react-bootstrap';

export default function CreatorCard({ creatorObj }) {
  return (
    <Card style={{ width: '16rem', margin: '10px', height: '30rem' }}>
      <Card.Img variant="top" src={creatorObj.image} alt={creatorObj.name} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>{creatorObj.name}</Card.Title>
        <Link href={`/creators/${creatorObj.firebaseKey}`} passHref>
          <Button variant="primary" className="m-2" style={{ backgroundColor: '#f17300', margin: '20px' }}>VIEW</Button>
        </Link>
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
};
