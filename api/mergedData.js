import { deleteSingleCategory, getCategoryTutorials, getSingleCategory } from './categoryData';
import { deleteTutorial, getSingleTutorial } from './tutorialData';

const viewCategoryTutorials = (categoryFirebaseKey) => new Promise((resolve, reject) => {
  Promise.all([getSingleCategory(categoryFirebaseKey),
    getCategoryTutorials(categoryFirebaseKey)])
    .then(([categoryObject, categoryTutorialsArray]) => {
      resolve({ ...categoryObject, tutorials: categoryTutorialsArray });
    }).catch((error) => reject(error));
});

const deleteCategoryTutorials = (categoryId) => new Promise((resolve, reject) => {
  getCategoryTutorials(categoryId).then((tutorialsArray) => {
    const deleteTutorialsPromises = tutorialsArray.map((tutorial) => deleteTutorial(tutorial.firebaseKey));

    Promise.all(deleteTutorialsPromises).then(() => {
      deleteSingleCategory(categoryId).then(resolve);
    });
  }).catch((error) => reject(error));
});

const viewCategoryDetails = (categoryFirebaseKey) => new Promise((resolve, reject) => {
  Promise.all([getSingleCategory(categoryFirebaseKey), getCategoryTutorials(categoryFirebaseKey)])
    .then(([categoryObject, categoryTutorialsArray]) => {
      resolve({ ...categoryObject, tutorials: categoryTutorialsArray });
    }).catch((error) => reject(error));
});

const viewTutorialDetails = (tutorialFirebaseKey) => new Promise((resolve, reject) => {
  getSingleTutorial(tutorialFirebaseKey)
    .then((tutorialObject) => {
      getSingleCategory(tutorialObject.category_id)
        .then((categoryObject) => {
          resolve({ categoryObject, ...tutorialObject });
        });
    }).catch((error) => reject(error));
});

export {
  viewCategoryTutorials, deleteCategoryTutorials, viewCategoryDetails, viewTutorialDetails,
};
