import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { deleteTutorial, getSingleTutorial } from '../api/tutorialData';

function Buttons({ obj, isMine, onUpdate }) {
  const [buttons, setButtons] = useState();
  const router = useRouter();
  const { firebaseKey } = router.query;

  const deleteThisTutorial = () => {
    if (window.confirm(`Delete ${buttons.title}?`)) {
      deleteTutorial(buttons.firebaseKey).then(() => onUpdate());
    }
  };

  useEffect(() => {
    getSingleTutorial(firebaseKey).then(setButtons);
  }, [obj, firebaseKey]);

  return (
    <div>
      {isMine
        ? (
          <>
            <Link href={`/tutorials/edit/${buttons.firebaseKey}`} passHref>
              <Button variant="info" style={{ backgroundColor: '#00b4d8', fontSize: '10px' }}>EDIT</Button>
            </Link>
            <Button variant="danger" onClick={deleteThisTutorial} className="m-2" style={{ backgroundColor: '#e9d985', borderColor: '#e9d985', fontSize: '10px' }}>
              DELETE
            </Button>
          </>

        )
        : ('')}
    </div>
  );
}

Buttons.propTypes = {
  obj: PropTypes.shape({
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

export default Buttons;
