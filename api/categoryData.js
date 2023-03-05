import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getCategories = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/categories.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const getSingleCategory = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/categories/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

const createCategory = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/categories.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

const updateCategory = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/categories/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

const deleteCategory = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/categories/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

const favoriteCategory = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/categories.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const faveCategory = Object.values(data).filter((category) => category.starred);
      resolve(faveCategory);
    })
    .catch(reject);
});

const getCategoryTutorials = (categoryFirebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/tutorials.json?orderBy="category_id"&equalTo="${categoryFirebaseKey}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'applications.json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const deleteSingleCategory = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/categories/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application.json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getCategories,
  getSingleCategory,
  createCategory,
  updateCategory,
  deleteCategory,
  favoriteCategory,
  getCategoryTutorials,
  deleteSingleCategory,
};
