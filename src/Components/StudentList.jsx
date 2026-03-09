import { Link } from "react-router-dom";

export default function StudentList({ students }) {
  return (
    <table border="1" cellPadding="8">
      <thead>
        <tr>
          <th>Name</th>
          <th>Course</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.id}>
            <td>{student.name}</td>
            <td>{student.course}</td>
            <td>
              <Link to={`/students/${student.id}`}>View</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}