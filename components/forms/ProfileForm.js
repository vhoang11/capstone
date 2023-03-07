import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { createCreator, updateCreator } from '../../api/creatorData';

const initialState = {
  first_name: '',
  last_name: '',
  image: '',
  bio: '',
};

function ProfileForm({ obj }) {
  const [profileInput, setProfileInput] = useState(initialState);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (obj.firebaseKey) setProfileInput(obj);
  }, [obj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      updateCreator(profileInput)
        .then(() => router.push(`/profile/${obj.firebaseKey}`));
    } else {
      const payload = { ...profileInput, uid: user.uid };
      createCreator(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateCreator(patchPayload).then(() => {
          router.push('/profile');
        });
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit} style={{ marginTop: '100px' }}>
      <h2 className="text-white mt-5">{obj.firebaseKey ? 'Update' : 'Create'} Profile</h2>

      <FloatingLabel controlId="floatingInput1" label="First Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter first name"
          name="first_name"
          value={profileInput.first_name}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput1" label="Last Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter last name"
          name="last_name"
          value={profileInput.last_name}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput2" label="Profile Image" className="mb-3">
        <Form.Control
          type="url"
          placeholder="Enter an image url"
          name="image"
          value={profileInput.image}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput3" label="Profile bio" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter bio"
          name="bio"
          value={profileInput.bio}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* SUBMIT BUTTON  */}
      <Button type="submit">{obj.firebaseKey ? 'Update' : 'Create'} Profile</Button>
    </Form>
  );
}

ProfileForm.propTypes = {
  obj: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    image: PropTypes.string,
    bio: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
};

ProfileForm.defaultProps = {
  obj: initialState,
};

export default ProfileForm;
