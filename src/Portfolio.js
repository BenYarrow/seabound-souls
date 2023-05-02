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
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3996.1735677315805!2d57.30896267560387!3d-20.45702215493683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x217c6cf1d228212b%3A0x98e314dcba627bf3!2sLUX%20Le%20Morne!5e1!3m2!1sen!2suk!4v1682967932087!5m2!1sen!2suk',
    },
];

const PortfolioCard = ({videoSrc, title, location, description, visitSite, map}) => {
    return(
            <div className="bg-slate-400 rounded-lg p-2">
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
        <div className="mt-20 grid w-auto grid-cols-3 gap-4 px-4 border-x-2 border-slate-400 mb-20">
            {portfolioWork.map(work => <PortfolioCard {...work}/>)}
        </div>
    )
}


export default Portfolio;