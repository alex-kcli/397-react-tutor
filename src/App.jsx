import 'bootstrap/dist/css/bootstrap.min.css';


import Banner from "./components/Banner";
import CourseList from "./components/CourseList";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useJsonQuery } from './utilities/fetch';
import TermPage from './components/TermPage';
import Dispatcher from './components/Dispatcher';
import { useDbData } from './utilities/firebase';

const Main = () => {
  // const [data, isLoading, error] = useJsonQuery('https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php');
  const [data, error] = useDbData('/');

  if (error) return <h1>Error loading data: {error.toString()}</h1>;
  if (data === undefined) return <h1>Loading data...</h1>;
  if (!data) return <h1>No data found</h1>;

  return (
    <div>
      <Banner title={data.title}/>
      <Dispatcher courses={data.courses} />
      {/* <TermPage courses={data.courses}/> */}
      {/* <CourseList courses={data.courses}/> */}
    </div>
  );
}

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <div className="container">
      <Main />
    </div>
  </QueryClientProvider>
);

export default App;