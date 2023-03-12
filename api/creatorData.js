import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getCreators = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/creators.json`, {
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

const getSingleCreator = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/creators/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

const createCreator = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/creators.json`, {
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

const updateCreator = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/creators/${payload.firebaseKey}.json`, {
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

const deleteCreator = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/creators/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

const favoriteCreator = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/creators.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const faveCreator = Object.values(data).filter((item) => item.favorite);
      resolve(faveCreator);
    })
    .catch(reject);
});

const getCreatorTutorials = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/tutorials.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'applications.json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

export {
  getCreators,
  getSingleCreator,
  createCreator,
  updateCreator,
  deleteCreator,
  favoriteCreator,
  getCreatorTutorials,
};
