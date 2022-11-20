import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import DashboardPage from './pages/DashboardPage';


function App() {
  return (
    <div >
      <Routes>
        <Route path='/home' element={ <Home /> } />
        <Route path='/dashboard' element={ <DashboardPage/>} />
        <Route path='/' element={ <Login /> } />
        <Route path='/login' element={ <Login /> } />
      </Routes>
    </div>
  );
}

export default App;
