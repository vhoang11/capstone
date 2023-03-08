/* eslint-disable react/prop-types */
import React, { useState } from 'react';

function TutorialStepsForm({ formInput, setFormInput }) {
  const [addInput, setAddInput] = useState([]);

  const handleAdd = () => {
    const abc = [...addInput, []];
    setAddInput(abc);
  };

  const handleChange = (onChangeValue, i) => {
    const inputdata = [...addInput];
    inputdata[i] = onChangeValue.target.value;
    setAddInput(inputdata);
  };

  const handleDelete = (i) => {
    const deletVal = [...addInput];
    deletVal.splice(i, 1);
    setAddInput(deletVal);
  };

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

      <div className="footer">
        <button
          type="button"
          onClick={() => handleAdd()}
        >
          Add Step
        </button>
        {addInput.map((i) => (
          <div id="added-steps">
            <input
              type="text"
              name="step"
              value={addInput.step}
              placeholder="Enter step"
              onChange={(e) => handleChange(e, i)}
              style={{ width: '100%', margin: '15px', height: '100px' }}
            />
            <input
              type="url"
              name="image"
              value={addInput.image}
              placeholder="Add image url"
              onChange={(e) => handleChange(e, i)}
              style={{ width: '100%', margin: '15px', height: '40px' }}
            />
            <button type="button" onClick={() => handleDelete(i)} style={{ width: '25px' }}>x</button>
          </div>

        ))}
      </div>

    </div>
  );
}

export default TutorialStepsForm;
