import React from 'react';
import {
  Button,
  Card,
  CardText,
  CardTitle
} from 'reactstrap';
import PropTypes from 'prop-types';
import StudentForm from './StudentForm';

const StudentCard = ({
  name,
  grade,
  teacher,
  // handleClick
  handleClick,
}) => (
  <Card body>
      <CardTitle tag="h5">{name}</CardTitle>
      <CardText>Grade: {grade}</CardText>
      <CardText>Teacher: {teacher}</CardText>
      <Button color="danger" onClick={handleClick}>Delete Student</Button>
      <Button color="info" onClick={handleClick}>Delete Student</Button>
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

StudentCard.propTypes = {
  firebaseKey: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  teacher: PropTypes.string.isRequired,
  grade: PropTypes.number.isRequired,
  handleClick: PropTypes.func,
};

export default StudentCard;
