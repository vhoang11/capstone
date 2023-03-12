import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleCreator } from '../../../api/creatorData';
import CreatorForm from '../../../components/forms/CreatorForm';

export default function EditProfile() {
  const [editProfile, setEditProfile] = useState({});
  const router = useRouter();

  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleCreator(firebaseKey).then(setEditProfile);
  }, [firebaseKey]);

  return (<CreatorForm obj={editProfile} />);
}
