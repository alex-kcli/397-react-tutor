import './CourseList.css'

const CourseList = ({courses}) => (
  <div className="course-list">
    { Object.entries(courses).map(([key, value]) => 
        <div className="card m-1 p-2">
          <div className="card-body">
            <h5 className="card-title">{value.term} CS {value.number}</h5> 
            <p className="card-text">{value.title}</p>
            <p className="card-text">{value.meets}</p>
          </div>
        </div>) }
  </div>
);

export default CourseList;