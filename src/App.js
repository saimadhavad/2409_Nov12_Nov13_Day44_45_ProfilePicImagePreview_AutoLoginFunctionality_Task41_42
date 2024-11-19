import './App.css';
import  { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signin from './components/Signin';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import TermsAndPolicy from './components/TermsAndPolicy';
import ForgotPassword from './components/ForgotPassword';
import CricketScore from './components/CricketScore';
import EditProfile from './components/EditProfile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signin/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/termsandpolicy' element={<TermsAndPolicy/>}></Route>
        <Route path='/forgotpassword' element={<ForgotPassword/>}></Route>
        <Route path='/cricketscore' element={<CricketScore/>}></Route>
        <Route path='/editprofile'element={<EditProfile/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
