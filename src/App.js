// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from "./components/Navigation";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import Chat from './pages/Chat';

function App() {
  return (
    <BrowserRouter>
      <Navigation/>    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/chat" element={<Chat/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
