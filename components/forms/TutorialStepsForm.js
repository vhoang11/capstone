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
        hidden={formInput === ''}
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
        hidden={formInput === ''}
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
        hidden={formInput === ''}
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
        hidden={formInput === ''}
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
        hidden={formInput === ''}
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
        hidden={formInput === ''}
        onChange={(e) => {
          setFormInput({ ...formInput, imagethree: e.target.value });
        }}
        style={{ width: '100%', margin: '15px', height: '40px' }}
      />
      <input
        type="textarea"
        placeholder="Step 4."
        name="stepfour"
        value={formInput.stepfour}
        hidden={formInput === ''}
        onChange={(e) => {
          setFormInput({ ...formInput, stepfour: e.target.value });
        }}
        style={{ width: '100%', margin: '15px', height: '100px' }}
      />
      <input
        className="step-images"
        type="url"
        placeholder="Step 4. Image"
        name="imagefour"
        value={formInput.imagefour}
        hidden={formInput === ''}
        onChange={(e) => {
          setFormInput({ ...formInput, imagefour: e.target.value });
        }}
        style={{ width: '100%', margin: '15px', height: '40px' }}
      />
      <input
        type="text"
        placeholder="Step 5."
        name="stepfive"
        value={formInput.stepfive}
        hidden={formInput === ''}
        onChange={(e) => {
          setFormInput({ ...formInput, stepfive: e.target.value });
        }}
        style={{ width: '100%', margin: '15px', height: '100px' }}
      />
      <input
        className="step-images"
        type="url"
        placeholder="Step 5. Image"
        name="imagefive"
        value={formInput.imagefive}
        hidden={formInput === ''}
        onChange={(e) => {
          setFormInput({ ...formInput, imagefive: e.target.value });
        }}
        style={{ width: '100%', margin: '15px', height: '40px' }}
      />
      <input
        type="text"
        placeholder="Step 6."
        name="stepsix"
        value={formInput.stepsix}
        hidden={formInput === ''}
        onChange={(e) => {
          setFormInput({ ...formInput, stepsix: e.target.value });
        }}
        style={{ width: '100%', margin: '15px', height: '100px' }}
      />
      <input
        className="step-images"
        type="url"
        placeholder="Step 6. Image"
        name="imagesix"
        value={formInput.imagesix}
        hidden={formInput === ''}
        onChange={(e) => {
          setFormInput({ ...formInput, imagesix: e.target.value });
        }}
        style={{ width: '100%', margin: '15px', height: '40px' }}
      />
      <input
        type="text"
        placeholder="Step 7."
        name="stepseven"
        value={formInput.stepseven}
        hidden={formInput === ''}
        onChange={(e) => {
          setFormInput({ ...formInput, stepseven: e.target.value });
        }}
        style={{ width: '100%', margin: '15px', height: '100px' }}
      />
      <input
        className="step-images"
        type="url"
        placeholder="Step 7. Image"
        name="imageseven"
        value={formInput.imageseven}
        hidden={formInput === ''}
        onChange={(e) => {
          setFormInput({ ...formInput, imageseven: e.target.value });
        }}
        style={{ width: '100%', margin: '15px', height: '40px' }}
      />
      <input
        type="textarea"
        placeholder="Step 8."
        name="stepeight"
        value={formInput.stepeight}
        hidden={formInput === ''}
        onChange={(e) => {
          setFormInput({ ...formInput, stepeight: e.target.value });
        }}
        style={{ width: '100%', margin: '15px', height: '100px' }}
      />
      <input
        className="step-images"
        type="url"
        placeholder="Step 8. Image"
        name="imageeight"
        value={formInput.imageeight}
        hidden={formInput === ''}
        onChange={(e) => {
          setFormInput({ ...formInput, imageeight: e.target.value });
        }}
        style={{ width: '100%', margin: '15px', height: '40px' }}
      />
      <input
        type="text"
        placeholder="Step 9."
        name="stepnine"
        value={formInput.stepnine}
        hidden={formInput === ''}
        onChange={(e) => {
          setFormInput({ ...formInput, stepnine: e.target.value });
        }}
        style={{ width: '100%', margin: '15px', height: '100px' }}
      />
      <input
        className="step-images"
        type="url"
        placeholder="Step 9. Image"
        name="imagenine"
        value={formInput.imagenine}
        hidden={formInput === ''}
        onChange={(e) => {
          setFormInput({ ...formInput, imagenine: e.target.value });
        }}
        style={{ width: '100%', margin: '15px', height: '40px' }}
      />
      <input
        type="text"
        placeholder="Step 10."
        name="stepten"
        value={formInput.stepten}
        hidden={formInput === ''}
        onChange={(e) => {
          setFormInput({ ...formInput, stepten: e.target.value });
        }}
        style={{ width: '100%', margin: '15px', height: '100px' }}
      />
      <input
        className="step-images"
        type="url"
        placeholder="Step 10. Image"
        name="imageten"
        value={formInput.imageten}
        hidden={formInput === ''}
        onChange={(e) => {
          setFormInput({ ...formInput, imageten: e.target.value });
        }}
        style={{ width: '100%', margin: '15px', height: '40px' }}
      />
    </div>
  );
}

export default TutorialStepsForm;
