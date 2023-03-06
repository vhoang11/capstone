import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleTutorial } from '../../../api/tutorialData';
import TutorialForm from '../../../components/forms/TutorialForm';

export default function EditTutorial() {
  const [editTutorial, setEditTutorial] = useState({});
  const router = useRouter();

  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleTutorial(firebaseKey).then(setEditTutorial);
  }, [firebaseKey]);

  return (<TutorialForm obj={editTutorial} />);
}
