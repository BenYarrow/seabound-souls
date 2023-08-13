import React from "react";

import {portfolioWork} from './Data/PortfolioData'

const PortfolioCard = ({videoSrc, title, location, description, visitSite, map}) => {
    return(
            <div className="">
            <div className="bg-slate-400  p-2 h-full">
                <div className=" bg-slate-200 aspect-[9/16]">
                    <video />
                </div>
                <div className="flex-col w-full mt-2">
                    <h3 className="text-xl text-slate-800 ">
                        {title}
                    </h3>
                    <p className="text-slate-800 pt-2 text-right ">
                        {location}
                    </p>
                    <a href={visitSite} target='_blank' rel="noreferrer" className="text-slate-9 w-full underline flex justify-end ">Visit Site</a>
                    <p className="text-slate-800 pt-2">
                        {description}
                    </p>
                </div>
            </div>
            </div>
    )
};


function OurWork() {
    return(
        <div className="mt-4 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 mb-4 sm:mb-8 border-x-2 border-slate-400 px-4">
            {portfolioWork.map(work => <PortfolioCard {...work}/>)}
        </div>
    )
}


export default OurWork;



