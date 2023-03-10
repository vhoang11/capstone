import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import GeneralInfo from './GeneralInfo';
import TutorialStepsForm from './TutorialStepsForm';
import { useAuth } from '../../utils/context/authContext';
import { createTutorial, updateTutorial } from '../../api/tutorialData';

const initialState = {
  title: '',
  description: '',
  created_by: '',
  image: '',
  video: '',
  category_id: '',
  favorite: false,
  stepone: '',
  imageone: '',
  steptwo: '',
  imagetwo: '',
  stepthree: '',
  imagethree: '',
  stepfour: '',
  imagefour: '',
  stepfive: '',
  imagefive: '',
  stepsix: '',
  imagesix: '',
  stepseven: '',
  imageseven: '',
  stepeight: '',
  imageeight: '',
  stepnine: '',
  imagenine: '',
  stepten: '',
  imageten: '',
};
function TutorialForm({ obj }) {
  const [page, setPage] = useState(0);
  const router = useRouter();
  const { user } = useAuth();
  const [formInput, setFormInput] = useState({});
  const [addInput, setAddInput] = useState([]);
  const [categories, setCategories] = useState([]);

  const time = new Date().toLocaleString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: 'numeric',
    minute: '2-digit',
  });

  useEffect(() => {
    if (obj.firebaseKey) setFormInput(obj);
  }, [obj, user]);

  const FormTitles = ['Tutorial Info', 'Tutorial Steps'];

  const PageDisplay = () => {
    if (page === 0) {
      return <GeneralInfo formInput={formInput} setFormInput={setFormInput} categories={categories} setCategories={setCategories} />;
    }
    return <TutorialStepsForm formInput={formInput} setFormInput={setFormInput} />;
  };

  const handleAdd = () => {
    const abc = [...addInput, []];
    setAddInput(abc);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDelete = (i) => {
    const deletVal = [...addInput];
    deletVal.splice(i, 1);
    setAddInput(deletVal);
  };

  const handleSubmit = () => {
    // e.preventDefault();
    if (obj.firebaseKey) {
      updateTutorial(formInput)
        .then(() => router.push(`/tutorials/${obj.firebaseKey}`));
    } else {
      const payload = {
        ...formInput, uid: user.uid, timestamp: time,
      };
      createTutorial(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateTutorial(patchPayload).then(() => {
          router.push('/tutorials');
        });
      });
    }
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
            hidden={page === 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>

          <>
            <button
              type="button"
              hidden={page === 0}
              onClick={() => handleAdd()}
            >
              Add Step
            </button>
            {addInput.map((i) => (
              <div>
                <input type="text" name="step" value={addInput.step} placeholder="Enter step" onChange={handleChange} />
                <input type="url" name="image" value={addInput.image} placeholder="Add image url" onChange={handleChange} />
                <button type="button" onClick={() => handleDelete(i)} style={{ width: '25px' }}>x</button>
              </div>
            ))}
          </>

          <button
            type="button"
            onClick={() => {
              if (page === FormTitles.length - 1) {
                alert('CONFIRM SUBMIT');
                handleSubmit();
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

TutorialForm.propTypes = {
  obj: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    created_by: PropTypes.string,
    video: PropTypes.string,
    image: PropTypes.string,
    favorite: PropTypes.bool,
    category_id: PropTypes.string,
    firebaseKey: PropTypes.string,
    uid: PropTypes.string,
    stepone: '',
    imageone: '',
    steptwo: '',
    imagetwo: '',
    stepthree: '',
    imagethree: '',
    stepfour: '',
    imagefour: '',
    stepfive: '',
    imagefive: '',
    stepsix: '',
    imagesix: '',
    stepseven: '',
    imageseven: '',
    stepeight: '',
    imageeight: '',
    stepnine: '',
    imagenine: '',
    stepten: '',
    imageten: '',
  }),
};

TutorialForm.defaultProps = {
  obj: initialState,
};

export default TutorialForm;
