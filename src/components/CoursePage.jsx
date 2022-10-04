import { useState } from 'react';
import CourseList from "./CourseList";

const CoursePage = ({courses}) => {
  const [selected, setSelected] = useState([]);

  const toggleSelected = (item) => setSelected(
    selected.includes(item)
    ? selected.filter(x => x !== item)
    : [...selected, item]
  );

  return (
    <CourseList courses={courses} selected={selected} toggleSelected={toggleSelected} />
  );
};

export default CoursePage;