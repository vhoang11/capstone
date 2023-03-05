import React, { useState } from 'react';
import GeneralInfo from './GeneralInfo';
import TutorialStepsForm from './TutorialStepsForm';

function TutorialForm() {
  const [page, setPage] = useState(0);
  const [formInput, setFormInput] = useState({
    title: '',
    description: '',
    created_by: '',
    image: '',
    video: '',
    category_id: '',
    favorite: false,
  });

  const FormTitles = ['Tutorial Info', 'Tutorial Steps'];

  const PageDisplay = () => {
    if (page === 0) {
      return <GeneralInfo formInput={formInput} setFormInput={setFormInput} />;
    }
    return <TutorialStepsForm formInput={formInput} setFormInput={setFormInput} />;
  };

  return (
    <div className="form">
      <div className="form-container">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <button
            type="button"
            disabled={page === 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
          <button
            type="button"
            onClick={() => {
              if (page === FormTitles.length - 1) {
                alert('FORM SUBMITTED');
                console.warn(formInput);
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? 'Submit' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default TutorialForm;
