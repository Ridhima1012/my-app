// import { Outlet, Link } from "react-router-dom"
// import './Navigation.css';

// function Navigation() {
//   return (<div>

//     <div className="search-bar">
//       <Link to='/'>
//         <p>DEV@Deakin</p>
//       </Link>
//       <input
//         text="test"
//         placeholder="Search..."
//       />

//       <p>Post</p>
//       <Link to='/login'>
//         <p>login</p>
//       </Link>

//     </div>


//     <Outlet />
//   </div>)

// }
// export default Navigation

// import React from 'react';
// import { Outlet, Link } from 'react-router-dom';
// import './Navigation.css';

// function Navigation() {
//   return (
//     <div>
//       <div className="search-bar">
//         <Link to="/">
//           <p>DEV@Deakin</p>
//         </Link>
//         <input text="test" placeholder="Search..." />
//         <Link to="/welcome"> {/* Add a link to the Welcome page */}
//           <p>Post</p>
//         </Link>
//         {/* <p>Post</p> */}
//         <Link to="/login">
//           <p>Login</p>
//         </Link>
//         {/* Add the "Make a Plan" button */}
//         <Link to="/plans" className="plans-button">
//         Plans
//        </Link>
//       </div>
//       <Outlet />
//     </div>
//   );
// }

// export default Navigation;


import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './Navigation.css';
import Box from './Box';

function Navigation() {
  return (
    <div>
      <div className="search-bar">
        <Link to="/">
          <p>DEV@Deakin</p>
        </Link>
        <input text="test" placeholder="Search..." />
        <Link to="/toggle">
          <p>Post</p>
        </Link>
        <Link to="/login">
          <p>Login</p>
        </Link>
        <Link to="/plans" className="plans-button">
          Plans
        </Link>
      </div>
      <Outlet />
      <Box/>
    </div>
  );
}

export default Navigation;

