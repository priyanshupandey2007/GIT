import { useState } from 'react';

const AddStudentForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [score, setScore] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && score !== '') {
      onAdd(name, score);
      setName(''); // Clear form [cite: 46]
      setScore('');
    }
  };

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <h3>Add New Entry</h3>
      <div className="input-group">
        <input 
          type="text" 
          placeholder="Name" 
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
        <button type="submit">Add Student</button>
      </div>
    </form>
  );
};

export default AddStudentForm;