/* eslint-disable react/prop-types */
import React from 'react';
import { Form } from 'react-bootstrap';

// eslint-disable-next-line react/prop-types
function GeneralInfo({ formInput, setFormInput }) {
  return (
    <Form className="sign-up-container">
      <input
        type="text"
        placeholder="Title"
        value={formInput.title}
        onChange={(event) => setFormInput({ ...formInput, title: event.target.value })}
        style={{ width: '100%', margin: '15px' }}
      />
      <input
        type="text"
        placeholder="Creator Name"
        value={formInput.created_by}
        onChange={(event) => setFormInput({ ...formInput, created_by: event.target.value })}
        style={{ width: '100%', margin: '15px' }}
      />
      <input
        type="text"
        placeholder="Description"
        value={formInput.description}
        onChange={(event) => setFormInput({ ...formInput, description: event.target.value })}
        style={{ width: '100%', margin: '15px' }}
      />
      <input
        type="file"
        placeholder="Image"
        value={formInput.image}
        onChange={(event) => setFormInput({ ...formInput, image: event.target.value })}
        style={{ width: '100%', margin: '15px' }}
      />
      <div className="w-full px-3">
        <select className="form-control" id="categoryName" required style={{ width: '100%', marginBottom: '15px', marginTop: '20px' }}>
          <option value="">Select Category</option>
          <option value="Apparel" {...formInput.category_id === 'Apparel' ? 'selected' : ''}>Apparel</option>
          <option value="Home" {...formInput.category_id === 'Home' ? 'selected' : ''}>Home</option>
          <option value="Misc." {...formInput.category_id === 'Misc.' ? 'selected' : ''}>Misc.</option>
        </select>
      </div>
      <div className="mb-4">
        <Form.Check
          className="text-grey mb-3"
          type="switch"
          id="favorite"
          name="favorite"
          label="Favorite"
          checked={formInput.favorite}
          onChange={(e) => {
            setFormInput((prevState) => ({
              ...prevState,
              favorite: e.target.checked,
            }));
          }}
        />
      </div>
    </Form>
  );
}

export default GeneralInfo;
