import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getTutorials = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/tutorials.json?orderBy="uid"&equalTo="${uid}"`, {
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

const getSingleTutorial = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/tutorials/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

const createTutorial = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/tutorials.json`, {
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

const updateTutorial = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/tutorials/${payload.firebaseKey}.json`, {
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

const deleteTutorial = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/tutorials/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

const favoriteTutorials = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/tutorials.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const faveTutorial = Object.values(data).filter((item) => item.favorite);
      resolve(faveTutorial);
    })
    .catch(reject);
});

export {
  getTutorials,
  getSingleTutorial,
  createTutorial,
  updateTutorial,
  deleteTutorial,
  favoriteTutorials,
};
