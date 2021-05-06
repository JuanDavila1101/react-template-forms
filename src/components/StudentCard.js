import React from 'react';
import {
  Button,
  Card,
  CardText,
  CardTitle
} from 'reactstrap';
import PropTypes from 'prop-types';
import StudentForm from './StudentForm';
import { deleteStudent } from '../helpers/data/studentData';

const StudentCard = ({
  firebaseKey,
  name,
  grade,
  teacher,
  setStudents,
}) => {
  const handleClick = () => {
    deleteStudent(firebaseKey).then((authorArray) => setStudents(authorArray));
    // console.warn(firebaseKey);
    console.warn(setStudents);
  };

  return (
  <Card body>
      <CardTitle tag="h5">{name}</CardTitle>
      <CardText>Grade: {grade}</CardText>
      <CardText>Teacher: {teacher}</CardText>
      <Button color="danger" onClick={handleClick}>Delete Student</Button>
      {
        <StudentForm
          formTitle='Edit Student'
          name={name}
          grade={grade}
          teacher={teacher}
        />
      }
  </Card>
  );
};

StudentCard.propTypes = {
  firebaseKey: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  teacher: PropTypes.string.isRequired,
  grade: PropTypes.number.isRequired,
  setStudents: PropTypes.func,
};

export default StudentCard;
