import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Home from './components/home';
import Signup from './components/signup';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/signup' element = {<Signup />} />
        <Route path='' element = '' />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
