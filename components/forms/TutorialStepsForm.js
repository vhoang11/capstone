/* eslint-disable react/prop-types */
import React from 'react';

function TutorialStepsForm({ formInput, setFormInput }) {
  return (
    <div className="personal-info-container">
      <input
        type="textarea"
        placeholder="Step 1."
        value={formInput.stepone}
        onChange={(e) => {
          setFormInput({ ...formInput, stepone: e.target.value });
        }}
        style={{ width: '100%', margin: '15px', height: '100px' }}
      />
      <input
        type="file"
        placeholder="Step 1. Image"
        value={formInput.imageone}
        onChange={(e) => {
          setFormInput({ ...formInput, imageone: e.target.value });
        }}
        style={{ width: '100%', margin: '15px', height: '40px' }}
      />
      <input
        type="text"
        placeholder="Step 2."
        value={formInput.steptwo}
        onChange={(e) => {
          setFormInput({ ...formInput, steptwo: e.target.value });
        }}
        style={{ width: '100%', margin: '15px', height: '100px' }}
      />
      <input
        type="file"
        placeholder="Step 2. Image"
        value={formInput.imagetwo}
        onChange={(e) => {
          setFormInput({ ...formInput, imagetwo: e.target.value });
        }}
        style={{ width: '100%', margin: '15px', height: '40px' }}
      />
      <input
        type="text"
        placeholder="Step 3."
        value={formInput.stepthree}
        onChange={(e) => {
          setFormInput({ ...formInput, stepthree: e.target.value });
        }}
        style={{ width: '100%', margin: '15px', height: '100px' }}
      />
      <input
        type="file"
        placeholder="Step 3. Image"
        value={formInput.imagethree}
        onChange={(e) => {
          setFormInput({ ...formInput, imagethree: e.target.value });
        }}
        style={{ width: '100%', margin: '15px', height: '40px' }}
      />
    </div>
  );
}

export default TutorialStepsForm;
