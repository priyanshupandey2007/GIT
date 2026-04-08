import { useState } from 'react';
import Header from './components/Header';
import StudentTable from './components/StudentTable';
import AddStudentForm from "./components/AddStudentForm.jsx";
import './App.css';

function App() {
  // Initial state with sample data [cite: 34, 36]
  const [students, setStudents] = useState([
    { id: 1, name: 'Priyanshu Pandey', score: 85 },
    { id: 2, name: 'Anjali Sharma', score: 35 }
  ]);

  // Function to add a new student [cite: 15, 45]
  const addStudent = (name, score) => {
    const newStudent = {
      id: Date.now(),
      name,
      score: parseInt(score)
    };
    setStudents([...students, newStudent]);
  };

  // Function to update existing scores dynamically [cite: 15, 42]
  const updateScore = (id, newScore) => {
    setStudents(students.map(student => 
      student.id === id ? { ...student, score: parseInt(newScore) || 0 } : student
    ));
  };

  return (
    <div className="container">
      <Header />
      <AddStudentForm onAdd={addStudent} />
      <StudentTable students={students} onUpdateScore={updateScore} />
    </div>
  );
}

export default App;