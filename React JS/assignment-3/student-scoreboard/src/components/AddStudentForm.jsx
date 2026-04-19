import React, { useState } from 'react';

const AddStudentForm = ({ onAddStudent }) => {
  const [name, setName] = useState('');
  const [score, setScore] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || score === '') return;

    // Create new student object
    const newStudent = {
      id: Date.now(),
      name: name,
      score: parseInt(score)
    };

    onAddStudent(newStudent);

    // Clear form after submission
    setName('');
    setScore('');
  };

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Enter Student Name" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input 
        type="number" 
        placeholder="Score" 
        value={score}
        onChange={(e) => setScore(e.target.value)}
        required
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddStudentForm;