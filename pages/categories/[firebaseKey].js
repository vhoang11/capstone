import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { viewCategoryDetails } from '../../api/mergedData';
import TutorialCard from '../../components/TutorialCard';
import { useAuth } from '../../utils/context/authContext';

export default function ViewCategory() {
  const [categoryDetails, setCategoryDetails] = useState({});
  const router = useRouter();
  const { user } = useAuth();

  const { firebaseKey } = router.query;

  const getAllCategoryTutorials = () => {
    viewCategoryDetails(firebaseKey).then(setCategoryDetails);
  };

  useEffect(() => {
    getAllCategoryTutorials();
  }, []);

  return (
    <div>
      <div className="mt-5 d-flex flex-wrap" style={{ marginTop: '100px' }}>
        <div className="d-flex flex-column">
          <img src={categoryDetails.image} alt={categoryDetails.category_name} style={{ width: '300px' }} />
        </div>
        <div className="text-grey ms-5 details">
          <h5>
            {categoryDetails.category_name}
          </h5>
          <hr />
          <p>{categoryDetails.description}</p>
        </div>
      </div>
      <div className="d-flex flex-wrap text-center" style={{ marginTop: '50px' }}>
        {categoryDetails.tutorials?.map((tutorial) => (
          <TutorialCard key={tutorial.firebaseKey} tutorialObj={tutorial} onUpdate={getAllCategoryTutorials} isMine={tutorial.uid === user.uid} />
        ))}
      </div>
    </div>
  );
}
