/* eslint-disable no-undef */
import React from 'react';

function AddStep() {
  return (
    <div>
      <div className="add-step-container">
        <input
          type="textarea"
          placeholder="Step"
          value={formInput.stepone}
          onChange={(e) => {
            setFormInput({ ...formInput, step: e.target.value });
          }}
          style={{ width: '100%', margin: '15px', height: '100px' }}
        />
        <input
          className="step-images"
          type="url"
          placeholder="Step Image"
          value={formInput.imageone}
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
