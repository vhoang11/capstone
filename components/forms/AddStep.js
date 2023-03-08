/* eslint-disable react/prop-types */
import React from 'react';

function AddStep({ formInput, setFormInput }) {
  const handleAdd = () => {
    const abc = [...formInput, []];
    setFormInput(abc);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDelete = (i) => {
    const deletInput = [...formInput];
    deletInput.splice(i, 1);
    setFormInput(deletInput);
  };

  return (
    <div>
      <>
        <button type="button" onClick={() => handleAdd()}>Add Step</button>
        {formInput.map((data, i) => (
          <div>
            <input name={data} value={data} onChange={(e) => handleChange(e, i)} />
            <button type="button" onClick={() => handleDelete(i)}>Delete</button>
          </div>
        ))}
      </>
    </div>
  );
}

export default AddStep;
