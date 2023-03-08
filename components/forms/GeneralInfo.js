/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { getCategories } from '../../api/categoryData';

// eslint-disable-next-line react/prop-types
function GeneralInfo({ formInput, setFormInput }) {
  const [categories, setCategories] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  return (
    <Form className="general-info-container">
      <input
        type="text"
        placeholder="Title"
        name="title"
        value={formInput.title}
        onChange={handleChange}
        style={{ width: '100%', margin: '15px' }}
      />
      <input
        type="text"
        placeholder="Creator Name"
        name="created_by"
        value={formInput.created_by}
        onChange={handleChange}
        style={{ width: '100%', margin: '15px' }}
      />
      <input
        type="text"
        placeholder="Description"
        name="description"
        value={formInput.description}
        onChange={handleChange}
        style={{ width: '100%', margin: '15px' }}
      />
      <input
        type="url"
        placeholder="Image"
        name="image"
        value={formInput.image}
        onChange={handleChange}
        style={{ width: '100%', margin: '15px' }}
      />
      <Form.Select
        id="select"
        aria-label="Category"
        name="category_id"
        onChange={handleChange}
        className="mb-3"
        value={formInput.category_id}
        style={{ width: '100%', margin: '15px' }}
        required
      >
        <option value="">Select a Category</option>
        {
            categories.map((category) => (
              <option
                key={category.firebaseKey}
                value={category.firebaseKey}
              >
                {category.category_name}
              </option>
            ))
          }
      </Form.Select>
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
