import { NavLink } from 'react-router-dom';                    // brings NavLink from react-router like <a>, but SPA-friendly, updates the route in React. it adds an "active" class automatically when you’re on that route.

export function Navbar() {                                                           // defining fn navbar as a React functional component
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <NavLink className="navbar-brand fw-bold" to="/">
         Vision Board
      </NavLink>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/vision" className="nav-link">My Vision</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

// export default Navbar;




















// import { NavLink } from 'react-router-dom';

// function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
//       <NavLink className="navbar-brand fw-bold" to="/">
//          Vision Board
//       </NavLink>
//       <div className="collapse navbar-collapse">
//         <ul className="navbar-nav ms-auto">
//           <li className="nav-item">
//             <NavLink to="/" className="nav-link">Home</NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink to="/vision" className="nav-link">My Vision</NavLink>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
