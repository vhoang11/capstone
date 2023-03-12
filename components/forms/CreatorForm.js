import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { createCreator, updateCreator } from '../../api/creatorData';

const initialState = {
  name: '',
  image: '',
  bio: '',
};

function CreatorForm({ obj }) {
  const [creatorInput, setCreatorInput] = useState(initialState);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (obj.firebaseKey) setCreatorInput(obj);
  }, [obj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreatorInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      updateCreator(creatorInput)
        .then(() => router.push(`/creators/${obj.firebaseKey}`));
    } else {
      const payload = { ...creatorInput, uid: user.uid };
      createCreator(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateCreator(patchPayload).then(() => {
          router.push('/creators');
        });
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit} style={{ marginTop: '100px', padding: '50px' }} className="profile-info-container">
      <h1 className="mt-5" style={{ paddingBottom: '50px' }}>{obj.firebaseKey ? 'Update' : 'Create'} Profile</h1>

      <FloatingLabel controlId="floatingInput1" label="Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter name"
          name="name"
          value={creatorInput.name}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput2" label="Profile Image" className="mb-3">
        <Form.Control
          type="url"
          placeholder="Enter an image url"
          name="image"
          value={creatorInput.image}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput3" label="Profile bio" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter bio"
          name="bio"
          value={creatorInput.bio}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <Button
        type="submit"
        style={{
          marginTop: '35px', marginBottom: '60px', backgroundColor: '#7192be', border: '#e9d985',
        }}
      >{obj.firebaseKey ? 'Update' : 'Create'} Profile
      </Button>
    </Form>
  );
}

CreatorForm.propTypes = {
  obj: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    bio: PropTypes.string,
    firebaseKey: PropTypes.string,
    uid: PropTypes.string,
  }),
};

CreatorForm.defaultProps = {
  obj: initialState,
};

export default CreatorForm;
