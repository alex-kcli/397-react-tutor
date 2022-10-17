import './CourseList.css'
import { Link } from 'react-router-dom'; 

const CourseList = ({ courses, selected, toggleSelected, conflicted }) => (
  <div className="course-list">
    { Object.entries(courses).map(([key, value]) => 
        <div className="course card m-1 p-2" onClick={() => toggleSelected(value) }>
          <div className={`card-body ${conflicted.includes(value) ? 'bg-secondary' : ''} ${selected.includes(value) ? 'selected' : ''}`}>
          <h5 className="card-title">{value.term} CS {value.number}</h5> 
          <p className="card-text">{value.title}</p>
          <p className="card-text">{value.meets}</p>
          <Link to={`/${key}`} className="bi bi-pen-fill text-danger">Edit</Link>
          </div>
        </div>) }
  </div>
);

export default CourseList;