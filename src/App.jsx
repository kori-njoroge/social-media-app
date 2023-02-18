import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import ErrorPage from './components/errorPage';
import Home from './components/home';
import Signup from './components/signup';
import Login from './components/login';
import Dashboard from './components/dashboard';
import Activity from './components/activity';
import ActivityTabs from './components/activityTabs';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/home'} element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />}>
            {/* <Route path='/dashboard/activity' element={<Activity />}/> */}
            <Route path=':route' element={<ActivityTabs />} />
          </Route>
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
