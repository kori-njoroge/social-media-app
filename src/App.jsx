import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import ErrorPage from './components/errorPage';
import Home from './components/home';
import Signup from './components/signup';
import Login from './components/login';
import Dashboard from './components/dashboard';
import Activity from './components/activity';
import PhotosPageBody from './components/photos-page-body';
import PeoplePageBody from './components/people-page-body';
import VideoPageBody from './components/video-page-body';

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
            <Route path=':route' element={<Activity />} />
            <Route path='photos' element={< PhotosPageBody /> }/>
            <Route path='people' element={< PeoplePageBody /> }/>
            <Route path='watch' element={< VideoPageBody /> }/>
          </Route>
         
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
