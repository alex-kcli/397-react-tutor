import { BrowserRouter, Routes, Route } from "react-router-dom";
import TermPage from "./TermPage";
import CourseEditor from "./CourseEditor";

const Dispatcher = ({courses}) => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<TermPage courses={courses} />} />
      <Route path="/:id" element={<CourseEditor courses={courses} />} />
    </Routes>
  </BrowserRouter>
  )
};

export default Dispatcher;