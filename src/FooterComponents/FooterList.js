import React from "react";

function FooterList(props) {

    return(
        <li className='px-5 text-slate-200 text-l font-light self-center'>
            {props.title}
        </li>
    )
};

export default FooterList;