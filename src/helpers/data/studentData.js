import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getStudents = () => new Promise((resolve, reject) => {
  // console.warn(`${dbUrl}/students.json`);
  // debugger;

  axios.get(`${dbUrl}/students.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const addStudent = (studentObject) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/students.json`, studentObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/students/${response.data.name}.json`, body)
        .then(() => {
          console.warn('na');
          getStudents().then((studentsArray) => resolve(studentsArray));
        });
    }).catch((error) => reject(error));
});

const deleteStudent = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/students/${firebaseKey}.json`)
    .then(() => getStudents().then((studentArray) => resolve(studentArray)))
    .catch((error) => reject(error));
});

const updateStudent = (studentObject) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/students/${studentObject.firebaseKey}.json`, studentObject)
    .then(() => getStudents().then((studentArray) => resolve(studentArray)))
    .catch((error) => reject(error));
});

export {
  addStudent, getStudents, deleteStudent, updateStudent
};
