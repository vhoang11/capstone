/* eslint-disable react/prop-types */
import React from 'react';

function AddStep({ formInput, setFormInput }) {
  return (
    <div>
      <div className="add-step-container">
        <input
          type="textarea"
          placeholder="Step"
          value={formInput.step}
          onChange={(e) => {
            setFormInput({ ...formInput, step: e.target.value });
          }}
          style={{ width: '100%', margin: '15px', height: '100px' }}
        />
        <input
          className="step-images"
          type="url"
          placeholder="Image"
          value={formInput.image}
          onChange={(e) => {
            setFormInput({ ...formInput, image: e.target.value });
          }}
          style={{ width: '100%', margin: '15px', height: '40px' }}
        />
      </div>
    </div>
  );
}

export default AddStep;
