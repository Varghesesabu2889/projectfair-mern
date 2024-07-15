import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Dashboard from './Pages/Dashboard';
import Footer from './Components/Footer';
import Auth from './Components/Auth';
import { useContext } from 'react';
import { tokenAuthorizationContext } from './context/TokenAuth';

function App() {
const {isAuthorized,setIsAuthorized}=useContext(tokenAuthorizationContext)

  return (
    <div className="App">
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/login' element={<Auth/>} />
    <Route path='/register' element={<Auth register/>} />
    <Route path='/projects' element={isAuthorized?<Projects/>:<Home/>} />
    <Route path='/dashboard' element={isAuthorized?<Dashboard/>:<Home/>} />
   </Routes>
   <Footer/>
    </div>
  );
}

export default App;
