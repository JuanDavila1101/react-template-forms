import React, { useState } from 'react';
import {
  Button,
  Card,
  CardText,
  CardTitle
} from 'reactstrap';
import PropTypes from 'prop-types';
import { deleteStudent } from '../helpers/data/studentData';
import StudentForm from './StudentForm';

const StudentCard = ({
  firebaseKey,
  name,
  grade,
  teacher,
  // handleClick
  setStudents,
}) => {
  const [editing, setEditing] = useState(false);
  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteStudent(firebaseKey).then((studentArray) => setStudents(studentArray));
        break;
      case 'edit':
        // console.warn('trying to edit');
        setEditing((prevState) => !prevState);
        break;
      default:
        console.warn('nothing selected');
    }

    // deleteStudent(firebaseKey);
    // console.warn(firebaseKey);
    // console.warn(setStudents);
  };
  return (
  <Card body>
      <CardTitle tag="h5">{name}</CardTitle>
      <CardText>Grade: {grade}</CardText>
      <CardText>Teacher: {teacher}</CardText>
      {/* {handleClick ? <Button onClick={handleClick}>Print Student</Button> : ''} */}
      <Button color="danger" onClick={handleClick('delete')}>Delete Student</Button>
      <Button color="info" onClick={handleClick('edit')}>Delete Student</Button>
      {
        editing && <StudentForm
          formTitle='Edit Student'
          setStudents={setStudents}
          firebaseKey={firebaseKey}
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
