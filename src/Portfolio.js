import React from "react";

const portfolioWork = [
    {
        videoSrc: '',
        title: 'Lux Le Morne',
        location: 'Le Morne, Mauritius',
        description: `Blessed with the best sunset of the island, life’s a beach at LUX* Le Morne. The chic and serene boutique resort at the foot of Le Morne mountain calls all lovers of mindful luxury. The postcard beach barely needs an introduction. As for the hotel, it's a gem that not only embodies the spirit of island living- it elevates it.`,
        visitSite: 'https://www.luxresorts.com/en/mauritius/hotel/luxlemorne',
        map: '',
    },
    {
        videoSrc: '',
        title: 'Swiss Inn',
        location: 'Dahab, Egypt',
        description: 'Hidden in the vast desert and majestic mountains of South Sinai, lies the charming Swiss Inn Resort on the shores of the Red Sea, on the Gulf of Aqaba The friendly hospitality, excellent service and genuine warmth help us to create an atmosphere that keeps our guests coming back again and again.',
        visitSite: 'https://swissinn.net/hotels/index.php?lang=Dahab',
        map: '',
    },
    {
        videoSrc: '',
        title: 'Safir Resort',
        location: 'Dahab, Egypt',
        description: 'A beachfront resort on the Red Sea, with an inventory of 159 rooms, offers a haven of tranquillity and peace. The perfect setting to unwind and relax, it is an ideal base from which to explore the beauty of the region.',
        visitSite: 'https://safirhotels.com/en/hotel/dahab',
        map: '',
    },
    {
        videoSrc: '',
        title: 'Cosmos',
        location: 'Vassiliki, Greece',
        description: 'Located at the windward end of the bay which is recognized for providing optimum conditions and longest sail time.',
        visitSite: 'https://safirhotels.com/en/hotel/dahab',
        map: '',
    }, 
    {
        videoSrc: '',
        title: 'Cosmos',
        location: 'Vassiliki, Greece',
        description: 'Located at the windward end of the bay which is recognized for providing optimum conditions and longest sail time.',
        visitSite: 'https://safirhotels.com/en/hotel/dahab',
        map: '',
    }, 
    {
        videoSrc: '',
        title: 'Cosmos',
        location: 'Vassiliki, Greece',
        description: 'Located at the windward end of the bay which is recognized for providing optimum conditions and longest sail time.',
        visitSite: 'https://safirhotels.com/en/hotel/dahab',
        map: '',
    }, 
];

const PortfolioCard = ({videoSrc, title, location, description, visitSite, map}) => {
    return(
            <div className="">
            <div className="bg-slate-400 rounded-lg p-2 h-full">
                <div className="rounded-lg bg-slate-200 aspect-[9/16]">
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


function Portfolio() {
    return(
        <div className="mt-4 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 mb-4 sm:mb-8 border-x-2 border-slate-400 px-4">
            {portfolioWork.map(work => <PortfolioCard {...work}/>)}
        </div>
    )
}


export default Portfolio;



