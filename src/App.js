
import { Routes, Route } from 'react-router-dom';                      // use of react router v6 library to carry out routing
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { VisionBoardPage } from './pages/VisionBoardPage';
import './App.css';                                                                    // app.js sty;img
import './index.css';                                                                   // global styling


export function App() {                                    // navbar area by routes and routes           checking urls and paths
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/vision" element={<VisionBoardPage />} />                         {/*                // ask             */} 
      </Routes>
    </div>
  );
}                                                         //    steering wheel navbar & road routes and routes                 

// export default App;
































// import { Routes, Route } from 'react-router-dom';                      // use of react router v6 library to carry out routing
// import Navbar from './components/Navbar';
// import HomePage from './pages/HomePage';
// import VisionBoardPage from './pages/VisionBoardPage';
// import './App.css';


// export function App() {
//   return (
//     <div>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/vision" element={<VisionBoardPage />} />
//       </Routes>
//     </div>
//   );
// }

// // export default App;
