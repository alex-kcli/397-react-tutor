import { useState, useEffect } from 'react';
import CourseList from "./CourseList";
import Modal from './Modal';
import Course from './Course';
import hasConflict from '../utilities/checkConflict';

const CoursePage = ({courses}) => {
  const [selected, setSelected] = useState([]);
  const [conflicted, setConflicted] = useState([]);


  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  const toggleSelected = (item) => {
    if (!conflicted.includes(item)) {
      setSelected(
        selected.includes(item)
        ? selected.filter(x => x !== item)
        : [...selected, item]
      );
    }
  };

  useEffect(() => {
    setConflicted(hasConflict(selected, courses));
  }, [selected, courses]);


  return (
    <div>
      <button className="btn btn-outline-dark" onClick={openModal}>Course Plan</button>
      <Modal open={open} close={closeModal}>
        <Course selected={selected} />
      </Modal>
      <CourseList courses={courses} selected={selected} toggleSelected={toggleSelected} conflicted={conflicted} />
    </div>
  );
};

export default CoursePage;