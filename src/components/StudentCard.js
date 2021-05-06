import React, { useState } from 'react';
import {
  Button, Card, CardText, CardTitle
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
  const [editing, setEditing] = useState(false);
  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        // debugger;
        deleteStudent(firebaseKey).then((authorArray) => setStudents(authorArray));
        break;
      case 'edit':
        setEditing((prevState) => !prevState);
        console.warn('edit');
        break;
      default:
        console.warn('default');
        break;
    }
  };

  return (
  <Card body>
      <CardTitle tag="h5">{name}</CardTitle>
      <CardText>Grade: {grade}</CardText>
      <CardText>Teacher: {teacher}</CardText>
      <Button color="danger" onClick={() => handleClick('delete')}>Delete Student</Button>
      <Button color="info" onClick={ () => handleClick('edit')}>
        {editing ? 'Close Form' : 'Edit Student'}
      </Button>
      {editing && <StudentForm
          formTitle='Edit Student'
          setStudents={setStudents}
          firebaseKey={firebaseKey}
          name={name}
          teacher={teacher}
          grade={grade}
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
