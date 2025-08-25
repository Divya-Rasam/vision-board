                                   
import React from 'react';                           
import ReactDOM from 'react-dom/client';                       // React + the DOM renderer                    React / ReactDOM: React builds components; ReactDOM mounts them in the browser.

import { App } from './App';                                        // root component
import { BrowserRouter } from 'react-router-dom';           //  Router provider (enables <Routes> and <Route> inside App)                                  BrowserRouter: gives the whole tree access to routing (<Routes>, <Route>, useNavigate, etc.). Putting it here makes the router wrap everything in your app.

import 'bootstrap/dist/css/bootstrap.min.css';                     // bootstrap then my ovverrides
import './index.css';

const container = document.getElementById("root");                 //  Fining root in html
const root = ReactDOM.createRoot(container);                       // Createing a concurrent root (React 18 API)

root.render(<BrowserRouter><App/></BrowserRouter>);                  //Rendering app, wrapped in the router


// Make sure react-router-dom is installed; otherwise the import will fail.





































// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import { BrowserRouter } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './index.css';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );
