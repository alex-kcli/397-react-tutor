import { useState } from "react";
import CoursePage from "./CoursePage";
import Navigation from "./Navigation"

const terms = {
  Fall: 'Fall',
  Winter: 'Winter',
  Spring: 'Spring'
};

const MenuButton = ({term, selection, setSelection}) => (
  <div>
    <input type="radio" id={term} className="btn-check" checked={term === selection} autoComplete="off"
      onChange={() => setSelection(term)} />
    <label className="btn btn-success mb-1 p-2" htmlFor={term} data-cy={term}>
    { term }
    </label>
  </div>
);

const MenuSelector = ({selection, setSelection}) => (
  <div className="btn-group">
    { 
      Object.keys(terms).map(term => <MenuButton key={term} term={term} selection={selection} setSelection={setSelection} />)
    }
  </div>
);

const TermPage = ({courses}) => {
  const [selection, setSelection] = useState(() => Object.keys(terms)[0]);
  return (
    <div>
      <MenuSelector selection={selection} setSelection={setSelection} />
      <Navigation />
      <CoursePage courses={Object.values(courses).filter(course => course.term === selection)}/>
    </div>
  );
}

export default TermPage;