/* eslint-disable react/prop-types */
import React from 'react';

function TutorialStepsForm({ formInput, setFormInput }) {
  return (
    <div className="tutorial-steps-container">
      <input
        type="textarea"
        placeholder="Step 1."
        name="stepone"
        value={formInput.stepone}
        onChange={(e) => {
          setFormInput({ ...formInput, stepone: e.target.value });
        }}
        style={{ width: '100%', margin: '15px', height: '100px' }}
      />
      <input
        className="step-images"
        type="url"
        placeholder="Step 1. Image"
        name="imageone"
        value={formInput.imageone}
        onChange={(e) => {
          setFormInput({ ...formInput, imageone: e.target.value });
        }}
        style={{ width: '100%', margin: '15px', height: '40px' }}
      />
      <input
        type="text"
        placeholder="Step 2."
        name="steptwo"
        value={formInput.steptwo}
        onChange={(e) => {
          setFormInput({ ...formInput, steptwo: e.target.value });
        }}
        style={{ width: '100%', margin: '15px', height: '100px' }}
      />
      <input
        className="step-images"
        type="url"
        placeholder="Step 2. Image"
        name="imagetwo"
        value={formInput.imagetwo}
        onChange={(e) => {
          setFormInput({ ...formInput, imagetwo: e.target.value });
        }}
        style={{ width: '100%', margin: '15px', height: '40px' }}
      />
      <input
        type="text"
        placeholder="Step 3."
        name="stepthree"
        value={formInput.stepthree}
        onChange={(e) => {
          setFormInput({ ...formInput, stepthree: e.target.value });
        }}
        style={{ width: '100%', margin: '15px', height: '100px' }}
      />
      <input
        className="step-images"
        type="url"
        placeholder="Step 3. Image"
        name="imagethree"
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
