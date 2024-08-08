import '../styles/CoursCell.css';

function CourseCell({ course }) {
  return (
    <div className="CoursCell">
      <p>{course.time}</p>
      <h3>{course.subject}</h3>
      <p>{course.teacher}</p>
      <p>{course.room}</p>
    </div>
  );
}

export default CourseCell;
