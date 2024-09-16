export let leMorne = {
    title: 'Le Morne',
    keyWords: [ 
        'windsurfing at Le Morne', 
        'Le Morne windsurfing', 
        'windsurfing in Mauritius', 
        'Mauritius windsurfing', 
        'ion club mauritius', 
        'ion club windsurfing',
    ],
    masthead: {
        sm: '/images/Spot-Guides/mauritius/mauritius-spotguide-mobile.jpg',
        md: '/images/Spot-Guides/mauritius/mauritius-spotguide-desktop.jpg',
        lg: '/images/Spot-Guides/mauritius/mauritius-spotguide-desktop.jpg',
        alt: 'Le morne mountain',
        customClasses: 'object-cover object-centre'
    },
    location: 'Mauritius',
    intro: "Mauritius is an incredible destination for windsurfing, thanks to its stunning beaches, warm tropical waters, and consistent trade winds. It offers ideal conditions for both freestyle and wave riding, with a mix of flat water and small to medium-sized waves.",
    
    // Spot Overview
    b1: true,
    b2: true,
    b3: true,
    b4: true,
    b5: true,
    i1: true,
    i2: true,
    i3: true,
    i4: true,
    i5: true,
    a1: true,
    a2: true,
    a3: true,
    a4: true,
    a5: true,
    sailingStyle: 'Wave / Freestyle / Foil',
    bestConditions: 'July, August, September',
    bestDirection: 'SE',
    windConditions: 'Consistent',
    waterConditions: 'Flat / Waves',
    launchZone: 'Sandy beach',

    // Gallery
    galleryImages: [
        {
            src: '/images/mauritius/le-morne-mountain-01.jpg',
            alt: 'Le Morne, Mauritius'
        },
        {
            src: '/images/mauritius/rachel-windsurfing-01.jpg',
            alt: 'Rachel windsurfing in Mauritius'
        },
        {
            src: '/images/mauritius/ben-windsurfing-02.jpg',
            alt: 'Ben windsurfing'
        },
        {
            src: '/images/mauritius/rachel-sitting.jpg',
            alt: 'Rachel sitting on the beach'
        },
        {
            src: '/images/mauritius/crystal-rock.jpg',
            alt: 'Crystal Rock'
        },
        {
            src: '/images/mauritius/post-windsurf-walking.jpg',
            alt: 'Ben walking on the beach'
        },
        {
            src: '/images/mauritius/ion-club-safety-tower.jpg',
            alt: 'Ion club safety tower'
        },
        {
            src: '/images/mauritius/lux-le-morne-bed.jpg',
            alt: 'The bed in Lux Le Morne'
        },
        {
            src: '/images/mauritius/lux-le-morne-walkway.jpg',
            alt: 'The pool walkway in Lux Le Morne'
        },
        {
            src: '/images/mauritius/lux-le-morne-treehouse.jpg',
            alt: 'The threehouse in Lux Le Morne'
        },
        {
            src: '/images/mauritius/mauritius-viewpoint.jpg',
            alt: 'A view across the forest'
        },
        {
            src: '/images/mauritius/seven-coloured-earth.jpg',
            alt: 'Seven coloured earth'
        },
    ],
    
    // Spot conditions
    whenToGoDetails: "The peak season in Le Morne runs from June to October when the trade winds consistently blow from the southeast. During this period, you can expect strong and consistent wind conditions, especially for wave riding. We visited during September and pretty much every day was windy with great conditions. ",
    waterConditionDetails:  () => <p>The lagoon inside the reef provides shallow and flat water, making it ideal for beginners to practice. Outside of the lagoon offers a variety of wave conditions and a great place to improve your wave riding skills. The water temperature is consistently warm and comfortable year-round. It typically ranges from <span className='font-bold text-blue'>24°C (75°F)</span> in the winter to <span className='font-bold text-blue'>28°C (82°F)</span> in the summer. We wore long summer wetsuits and booties, to provide some protections from the rocks when windsurfing close to the reefs.</p>,
    waterConditionImage: '/images/mauritius/mauritius-beach-02.jpg',
    windConditionDetails: [
        () => 
            <div> 
                <h3 className="font-bold text-blue">Austral Summer <em>(May to September):</em></h3> 
                <p>
                    This is the peak season in Le Morne. During these months, the trade winds are at their strongest, and wind speeds often range from <span className="font-bold text-blue">15 to 30 knots.</span> The winds are most consistent in the afternoon, making it the perfect time to get on the water.
                </p>
            </div>,
        () => 
            <div> 
                <h3 className="font-bold text-blue">Transition Seasons <em>(April and October)</em></h3>
                <p>Wind conditions in the transition months of April and October can still be favorable, but generally less reliable than peak season. Wind speeds may range from <span className="font-bold text-blue">10 to 25 knots</span> during these months.</p>
            </div>, 
        () => 
            <div>
                <h3 className="font-bold text-blue">Austral Winter <em>(November to March):</em></h3> 
                <p>While it's possible to have a good session on the foil at this time of year, the winds are less consistent, and wind speeds can vary widely. Wind speeds may range from <span className="font-bold text-blue">8 to 20 knots</span> during this period.</p>
            </div>
            
    ],
    windConditionImage: '/images/mauritius/ben-windsurfing-01.jpg',
    spots: [
        () => <div>
                <h3 className="font-bold text-blue">Lagoon: </h3>
                <p>Located just outside the protective reef, Little Reef offers challenging wave riding conditions with reef breaks. The waves range from chest-high to double overhead, providing a thrilling experience for advanced windsurfers.</p>
            </div>,
        () => <div>
                <h3 className="font-bold text-blue">One Eye: </h3>
                <p>One Eye is one of the most famous wave spots in Le Morne. It's known for its powerful, barrelling waves and is a favourite among expert windsurfers. The wave can be extremely challenging, and it's not recommended for those with limited experience.</p>
            </div>
    ],

    spotImage: '/images/mauritius/mauritius-beach-03.jpg',

    // Lessons and hire
    lessonIntro: 'Ion Club Le Morne is particularly well known for its windsurfing school that caters to all levels. We hired kit from ION Club Le Morne and were very impressed with their selection of boards and sails. Staff were super friendly and always on hand to help. They also cater for kite surfers, wingfoilers and surfers.',
    lessonBulletData: [
        {
            title: 'Ion Club, Mauritius',
            link: 'https://www.ion-club.net/le-morne/'
        }
    ],
    lessonHireImage: '/images/mauritius/ion-club-safety-tower.jpg',
    lessonHireImageDescription: 'Ion Club, Mauritius',
    lessonHireImageLink: 'https://www.ion-club.net/le-morne/',

    // Getting here
    gettingHereText: [
        'Regular flights are available from London Heathrow (LHR), London Gatwick (LGW), and Manchester Airport (MAN) to Sir Seewoosagur Ramgoolam International Airport (MRU), the main international airport in Mauritius. Several airlines operate flights, including British Airways, Emirates and Air Mauritius. The flight takes around 12 to 13 hours.',
    ],
    gettingHereImage: "/images/mauritius/crystal-rock.jpg",

    // Travelling around
    travellingIntro: 'There are many ways to travel around Mauritius. We found the easiest was to book a taxi, however next time we will definitely be hiring a car for our trip.',
    travellingBulletData: [
        {
            title: 'Car hire',
        },
        {
            title: 'Local Taxi',
        },
        {
            title: 'Cycling',
        },
    ],
    travellingImage: "/images/mauritius/mauritius-monkey.jpg",


    // Where to stay
    stayIntro: "Le Morne offers a range of accommodation options, including luxury resorts, boutique hotels, and Airbnb rentals. It's advisable to book your accommodation in advance, especially during the peak tourist season.",
    whereToStayBulletData: [
        {
            title: 'Lux Le Morne',
            link: 'https://www.luxresorts.com/en/mauritius/hotel/luxlemorne',
        },
        {
            title: 'JW Marriot',
            link: 'https://www.marriott.com/en-us/hotels/mrujw-jw-marriott-mauritius-resort/overview/',
        },
        {
            title: 'Hotel Rui',
            link: 'https://www.riu.com/en/hotel/mauritius-island/morne-brabant/',
        },
        {
            title: 'Villa Habiscus',
            link: 'https://lagaulette.com',
        },
    ],
    stayImage: "/images/mauritius/lux-le-morne-bed.jpg",
    stayImageDescription: "Lux Le Morne",
    stayImageLink: "https://www.luxresorts.com/en/mauritius/hotel/luxlemorne",

    // Where to eat
    eatIntro: 'Our stay at LUX* Le Morne was all-inclusive so we only ate outside of the resort once during our visit. Whilst all-inclusive is on the pricey side, we felt it was worth it for the ease and variety. We ate at The Kitchen and The Beach (LUX* Le Morne) most evenings. During our South Island tour, we enjoyed a beautiful meal at Le Chamarel Panoramic Restaurant, overlooking the ocean. Some more restaurants that come highly recommended are listed below:',
    whereToEatBulletData: [
        {
            title: 'WAPALAPAM, Island Eatery',
        },
        {
            title: 'Umami (Dinarobin Beachcomber)',
        },
        {
            title: 'The Boathouse Bar & Grill (JW Marriott Mauritius Resort)',
        },
        {
            title: 'Floating Market (JW Marriott Mauritius Resort)',
        },
    ],
    eatImage: "/images/mauritius/mauritius-rum-factory-01.jpg",
    eatImageDescription: null,
    eatImageLink: null,

    // Other Activities
    otherActivityText: [
        'Hike to the summit of Le Morne Brabant. Take an organised boat tour or catamaran cruise to explore the nearby islands like ile aux Cerfs and ile le aux Aigrettes. Take to the skys and see the famous udnerwaterfall from a helicopter or sea plane. Visit Charamel rum distillary and discover the seven coloured earth.',
    ],
    otherActivityImage: "/images/mauritius/ben-wakeboarding.jpg",
}