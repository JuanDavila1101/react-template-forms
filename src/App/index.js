import React, { useEffect, useState } from 'react';
import StudentForm from '../components/StudentForm';
import './App.scss';
import { getStudents } from '../helpers/data/studentData';
import StudentCard from '../components/StudentCard';

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    console.warn('Authors', students);
    getStudents().then((resp) => setStudents(resp));
  }, []);

  return (
    <>
      <StudentForm
        formTitle='Add Student'
        setStudents={setStudents}
      />
      <hr/>
      <div className='card-container'>
        {students.map((studentInfo) => (
          <StudentCard
            key={studentInfo.firebaseKey}
            firebaseKey={studentInfo.firebaseKey}
            name={studentInfo.name}
            teacher={studentInfo.teacher}
            grade={Number(studentInfo.grade)}
            setStudents={setStudents}
          />
        ))}
      </div>
    </>
  );
}

export default App;
