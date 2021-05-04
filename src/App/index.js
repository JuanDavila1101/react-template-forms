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
    <div className='App'>
      <StudentForm
        formTitle='Add Student'
      />
      <hr/>
        {students.map((studentInfo) => (
          <StudentCard
            key={studentInfo.firebaseKey}
            name={studentInfo.name}
            teacher={studentInfo.teacher}
            grade={Number(studentInfo.grade)}
            handleClick={() => console.warn(`${studentInfo.name}`)}
          />
        ))}
    </div>
  );
}

export default App;
