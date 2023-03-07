import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { Button } from 'react-bootstrap';

export default function CategoryCard({ categoryObj }) {
  return (
    <Card style={{ width: '25rem', margin: '10px' }}>
      <Card.Img variant="top" src={categoryObj.image} alt={categoryObj.category_name} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>{categoryObj.category_name}</Card.Title>
        <Link href={`/categories/${categoryObj.firebaseKey}`} passHref>
          <Button variant="primary" className="m-2" style={{ backgroundColor: '#7192be', margin: '20px' }}>VIEW</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

CategoryCard.propTypes = {
  categoryObj: PropTypes.shape({
    category_name: PropTypes.string,
    firebaseKey: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};
