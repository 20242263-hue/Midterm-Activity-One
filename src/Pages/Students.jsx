import { useState, useEffect } from "react";
import StudentList from "../components/StudentList.jsx";

export default function Students() {
  const [studentData, setStudentData] = useState([]);

  useEffect(() => {
    setStudentData([
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
    ]);
  }, []);

  return (
    <div>
      <h2>Student List</h2>
      <StudentList students={studentData} />
    </div>
  );
}