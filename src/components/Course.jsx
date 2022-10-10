const Course = ({selected}) => (
  <div className="cart">
    {
      selected.length === 0
      ? <h2>No course selected, select course by clicking on the corresponding button</h2>
      : selected.map(course => (
          <div>
            <p>CS {course.number}</p>
            <p>{course.title}</p>
            <p>{course.meets}</p>
          </div>
        ))
    }
  </div>
);

export default Course;