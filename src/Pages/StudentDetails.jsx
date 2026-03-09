import { useParams } from "react-router-dom";

export default function StudentDetails() {
  const { id } = useParams();
  const studentData = [
    { id: 1, name: "Alice", course: "Math" },
    { id: 2, name: "Bob", course: "Science" },
    { id: 3, name: "Charlie", course: "English" },
    { id: 4, name: "David", course: "History" },
    { id: 5, name: "Eva", course: "Art" },
    { id: 6, name: "Frank", course: "PE" },
    { id: 7, name: "Grace", course: "Music" },
    { id: 8, name: "Hannah", course: "Biology" },
    { id: 9, name: "Ian", course: "Chemistry" },
    { id: 10, name: "Jane", course: "Physics" },
  ];

  const student = studentData.find((s) => s.id === parseInt(id));

  if (!student) return <p>Student not found</p>;

  return (
    <div>
      <h2>Student Details</h2>
      <p><strong>ID:</strong> {student.id}</p>
      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Course:</strong> {student.course}</p>
    </div>
  );
}