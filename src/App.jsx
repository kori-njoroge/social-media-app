import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import ErrorPage from './components/errorPage';
import Home from './components/home';
import Signup from './components/signup';
import Login from './components/login';
import Dashboard from './components/dashboard';
import ActivityTabs from './components/activityTabs';
import PhotosPageBody from './components/photos-page-body';
import PeoplePageBody from './components/people-page-body';
import VideoPageBody from './components/video-page-body';
import Tweets from './components/tweets';

import UserProfile from './components/user-profile';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/home'} element={<Home />} />
          <Route path='/user-profile' element={<UserProfile />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/tweets' element={<Tweets />} />
          <Route path='/dashboard' element={<Dashboard />}>
            <Route path=':route' element={<ActivityTabs />} />
            <Route path='photos' element={< PhotosPageBody />} />
            <Route path='people' element={< PeoplePageBody />} />
            <Route path='watch' element={< VideoPageBody />} />
          </Route>

          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
