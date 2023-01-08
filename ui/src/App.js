import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Disclaimer from './components/Disclaimer/Disclaimer';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Map from './components/Map/Map';
import './css/overide.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Disclaimer />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/map' element={<Map />} />
      </Routes>
    </Router>
  );
}

export default App;
