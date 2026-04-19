import { useState } from 'react';
import Header from './components/Header';
import AddStudentForm from './components/AddStudentForm';
import StudentTable from './components/StudentTable';
import './App.css';

function App() {
  // Initial Student Data
  const [students, setStudents] = useState([
    { id: 1, name: "Alice Johnson", score: 85 },
    { id: 2, name: "Bob Smith", score: 32 }
  ]);

  // Function to add a new student
  const handleAddStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  // Function to update score dynamically
  const handleUpdateScore = (id, newScore) => {
    const updatedList = students.map(student => 
      student.id === id ? { ...student, score: parseInt(newScore) || 0 } : student
    );
    setStudents(updatedList);
  };

  return (
    <div className="app-container">
      <Header />
      <AddStudentForm onAddStudent={handleAddStudent} />
      <StudentTable students={students} onUpdateScore={handleUpdateScore} />
    </div>
  );
}

export default App;