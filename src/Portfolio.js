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

const PortfolioCard = ({work: {videoSrc, title, location, description, visitSite, map   }}) => {
    return(
            <div className=" bg-slate-400 rounded-lg p-2">
                <div className="rounded-lg bg-slate-200 h-80">
                    <video />
                </div>
                <div className="flex-col ">
                    <h3 className="text-xl text-slate-800 pt-2">
                        {title}
                    </h3>
                    <p className="text-slate-800 pt-2 text-right">
                        {location} • <a href={visitSite} target='_blank' rel="noreferrer" className="text-slate-9   00 underline  ">Visit Site</a>
                    </p>
                    <p className="text-slate-800 pt-2">
                        {description}
                    </p>
                    
                </div>
            </div>
    )
};


function Portfolio() {
    return(
        <div className="mt-20 grid w-auto grid-cols-3 gap-8 px-4 border-x-2 border-slate-400 mb-20">
            {portfolioWork.map(work => <PortfolioCard work={work}/>)}
        </div>
    )
}

export default Portfolio;