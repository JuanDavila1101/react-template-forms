import React, { useState } from 'react';
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

    setStudents({
      name: '',
      teacher: '',
      grade: 0,
      firebaseKey: null
    });
  };

  return (
    <>
    <div className='student-form'>
      <form id='addStudentForm' autoComplete='off' onSubmit={handleSubmit}>
        <h2>{formTitle}</h2>
          <label>Name:</label>
          <lnput
            name='name'
            id='name'
            value={student.name}
            type='text'
            placeholder='Enter a Student Name'
            onChange={handleInputChange}
          />
          <label>Teacher:</label>
          <input
            name='teacher'
            id='teacher'
            value={student.name}
            type='text'
            placeholder='Enter a Teacher Name'
            onChange={handleInputChange}
          />
          <label>Grade:</label>
          <input
            name='grade'
            id='grade'
            value={student.name}
            type='number'
            placeholder='Enter a Grade'
            onChange={handleInputChange}
          />
        <butons type='submit'>Submit</butons>
      </form>
    </div>
    </>
  );
};

StudentForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  setStudents: PropTypes.func,
  name: PropTypes.string,
  teacher: PropTypes.string,
  grade: PropTypes.Number,
  handleSubmit: PropTypes.func
};

export default StudentForm;
