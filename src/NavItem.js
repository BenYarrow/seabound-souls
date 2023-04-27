import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function NavItem(props) {
    return(
      <a href={props.to}>
        <li className='text-slate-800 text-xl hover:underline hover:cursor-pointer font-light'>
          {props.title}
        </li>
      </a>

    )
};

export default NavItem;


     // <Router>
      //   <Link to={props.to} className='text-slate-800 text-xl hover:underline hover:cursor-pointer font-light'>{props.title}</Link>
      //   <Routes>
      //     <Route path={props.to} element={<{}/>} />
      //   </Routes>
      // </Router>