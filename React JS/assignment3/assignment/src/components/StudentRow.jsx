const StudentRow = ({ student, onUpdateScore }) => {
  // Logic: Pass if score >= 40, else Fail [cite: 50, 51]
  const isPass = student.score >= 40;

  return (
    <tr>
      <td>{student.name}</td>
      <td>{student.score}</td>
      <td className={isPass ? 'status-pass' : 'status-fail'}>
        {isPass ? '✅ Pass' : '❌ Fail'}
      </td>
      <td>
        <input 
          type="number" 
          value={student.score} 
          onChange={(e) => onUpdateScore(student.id, e.target.value)}
          className="edit-input"
        />
      </td>
    </tr>
  );
};

export default StudentRow;