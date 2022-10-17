import './CourseList.css'
import { Link } from 'react-router-dom'; 
import { useProfile } from '../utilities/profile';

const CourseList = ({ courses, selected, toggleSelected, conflicted }) => {
  const [profile, profileLoading, profileError] = useProfile();

  if (profileError) return <h1>Error loading profile: {`${profileError}`}</h1>;
  if (profileLoading) return <h1>Loading user profile</h1>;
  if (!profile) return <h1>No profile data</h1>;

  return (
  <div className="course-list">
    { Object.entries(courses).map(([key, value]) => 
        <div className="course card m-1 p-2" onClick={() => toggleSelected(value) }>
          <div className={`card-body ${conflicted.includes(value) ? 'bg-secondary' : ''} ${selected.includes(value) ? 'selected' : ''}`}>
          <h5 className="card-title">{value.term} CS {value.number}</h5> 
          <p className="card-text">{value.title}</p>
          <p className="card-text">{value.meets}</p>
          {profile?.user && profile?.isAdmin && <Link to={`/${value.term[0] + value.number}`} className="bi bi-pen-fill text-danger">Edit</Link>}
          </div>
        </div>) }
  </div>
  )
};

export default CourseList;