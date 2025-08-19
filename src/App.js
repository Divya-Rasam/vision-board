import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import VisionBoardPage from './pages/VisionBoardPage';
import './App.css';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/vision" element={<VisionBoardPage />} />
      </Routes>
    </div>
  );
}

export default App;
