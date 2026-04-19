import React from 'react';

const StudentRow = ({ student, onUpdateScore }) => {
  // Pass logic: Score >= 40
  const isPass = student.score >= 40;

  return (
    <tr>
      <td>{student.name}</td>
      <td>
        <input 
          type="number" 
          className="score-input"
          value={student.score} 
          onChange={(e) => onUpdateScore(student.id, e.target.value)}
        />
      </td>
      <td>
        <span className={`status ${isPass ? 'pass' : 'fail'}`}>
          {isPass ? 'Pass' : 'Fail'}
        </span>
      </td>
    </tr>
  );
};

export default StudentRow;