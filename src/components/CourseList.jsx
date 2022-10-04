import './CourseList.css'

const CourseList = ({ courses, selected, toggleSelected }) => (
  <div className="course-list">
    { Object.entries(courses).map(([key, value]) => 
        <div className="course card m-1 p-2" onClick={() => toggleSelected(value) }>
          <div className={`card-body ${selected.includes(value) ? 'selected' : ''}`}>
            <h5 className="card-title">{value.term} CS {value.number}</h5> 
            <p className="card-text">{value.title}</p>
            <p className="card-text">{value.meets}</p>
          </div>
        </div>) }
  </div>
);

export default CourseList;