import React, { useState } from 'react';
import {
  FormGroup, Form, Label, Input, Button
} from 'reactstrap';
import PropTypes from 'prop-types';
import { addStudent } from '../helpers/data/studentData';

const StudentForm = ({
  formTitle
}) => {
  const [student, setStudents] = useState({
    name: '',
    teacher: '',
    grade: 0,
  });

  const handleInputChange = (e) => {
    setStudents((prevState) => ({
      ...prevState,
      [e.target.name]:
        e.target.name === 'grade' ? Number(e.target.value) : e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (student.firebaseKey) {
      console.warn('Do you want to upddete this Student');
      // updateSTudent(student).then((studentArray) => setStudent(studentArray);)
    } else {
      addStudent(student).then((studentArray) => setStudents(studentArray));
    }
  };

  return (
    <>
    <div className='student-form'>
      <Form id='addStudentForm' autoComplete='off' onSubmit={handleSubmit}>
        <h2>{formTitle}</h2>
        <FormGroup>
          <Label>Name:</Label>
          <Input
            name='name'
            id='name'
            value={student.name}
            type='text'
            placeholder='Enter a Student Name'
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup>
          <Label>Teacher:</Label>
          <Input
            name='teacher'
            id='teacher'
            value={student.teacher}
            type='text'
            placeholder='Enter a Teacher Name'
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup>
          <label>Grade:</label>
          <input
            name='grade'
            id='grade'
            value={student.grade}
            type='number'
            placeholder='Enter a Grade'
            onChange={handleInputChange}
          />
        </FormGroup>
        <Button type='submit'>Submit</Button>
      </Form>
    </div>
    </>
  );
};

StudentForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  name: PropTypes.string,
  teacher: PropTypes.string,
  grade: PropTypes.Number,
  handleSubmit: PropTypes.func
};

export default StudentForm;
