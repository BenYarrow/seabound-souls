import React from "react";

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