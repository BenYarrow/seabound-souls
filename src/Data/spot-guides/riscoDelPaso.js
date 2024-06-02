export let riscoDelPaso = {
    title: 'Risco Del Paso',
    keyWords: [
        'windsurfing in Fuerteventura',
        'Risco Del Paso windsurfing',
        'Canary island windsurfing',
        'Rene Egli',
        'PWA world tour', 
        'PWA fuerteventura',
        'Melia Hotel'
    ],
    masthead: {
        sm: '/images/Spot-Guides/risco/risco-spotguide-mobile.jpg',
        md: '/images/Spot-Guides/risco/risco-spotguide-tablet.jpg',
        lg: '/images/Spot-Guides/risco/risco-spotguide-desktop.jpg',
        alt: 'Risco del paso lagoon',
    },
    location: 'Fuerteventura',
    intro: [
        () => <p>Sotavento, located on Fuerteventura's south-east coast, is definitely a spot to visit. Warm waters, flat lagoons and smooth winds make this one of the best spots in the world for windsurfing. Costa Calma is also home to the windsurfing Centre <a href="https://www.rene-egli.com/" rel="nofollow external noopener noreferrer" target="_blank">Rene Egli</a> which hosts one of the stops on the PWA World Tour</p>,
        () => <p>As well as Rene Egli, on this small portion of the island you can also find 2 of the well known <a href="https://www.ion-club.net/fuerteventura/" rel="nofollow external noopener noreferrer" target="_blank">Ion Club</a> centres, one of which is at the epic lagoon, Risco Del Paso.</p> 
    ],
    
    // Spot Overview
    b1: true,
    b2: true,
    b3: true,
    b4: true,
    b5: false,
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
    sailingStyle: "Freeride / Freestlye / Foil / Wing",
    bestConditions: 'June, July, August',
    bestDirection: 'N, NE',
    windConditions: 'Consistent',
    waterConditions: 'Flat / Waves',
    launchZone: 'Sandy beach / Lagoon',

    // Gallery
    galleryImages: null,
    
    // Spot conditions
    whenToGoDetails: "The windiest time of year in Risco del Paso typically occurs during the summer months, particularly from June to August. During this period, the Canary Islands experience the strongest trade winds, which blow consistently from the northeast. These winds provide for epic sessions on the water.",
    waterConditionDetails: [
        () => <div>
                <p>Depending on where youre sailing, the water canditions can vary. In the laggon you can expect extremely flat water on low tides, with slight small chop at high tide <em>(depending how high the high tide is).</em> Over the sand bar you can expect smooth boom high waves that roll in consistently while the tide is coming in, this then flattens off when the tide is going out.</p>
                <p>Water temperatures stay warm year-round, ranging from <span className="font-bold text-blue">24°C (75°F)</span> in winter to <span className="font-bold text-blue">28°C (82°F)</span> in summer. We recommend wearing long summer wetsuits and booties for protection, especially near the reefs.</p>
            </div>
    ],
    waterConditionImage: null,
    windConditionDetails: null,
    windConditionImage: null,
    spots: [
        () => <div className="prose lg:prose-lg max-w-none">
                <h3 className="font-bold text-blue">Lagoon: </h3>
                <p>The lagoon at Risco Dell Paso is awesome spot to progress your freeride and freestyle sailing. One thing to note is that the lagoon is <em>tidal</em>. Get to your session early to hit the water as early as possible as soon as the water fills in! If you want as much time on the water as you can get, we would recomend checking the tide tables <a href="https://www.rene-egli.com/windsurfing/windsurfing/lagoon" rel="nofollow external noopener noreferrer" target="_blank">here</a> to plan your trip around the highest tides.</p>
            </div>,
        () => <div className="prose lg:prose-lg max-w-none pt-8">
                <h3 className="font-bold text-blue">Sea: </h3>
                <ul className="pl-12">
                    <li className='list-disc marker:text-blue'>
                        <a href="https://www.ion-club.net/fuerteventura/" rel="nofollow external noopener noreferrer" target="_blank">Ion Club:</a>
                        <p>Just a few metres walk over the sand bar you can get straight into the sea to experience the smooth rolling waves when the tide is coming in. When the tide is going out the sandbar protects the water which creats super flat condition for freeride and freestyle.</p>
                    </li>
                    <li className='list-disc marker:text-blue'>
                        <a href="https://www.rene-egli.com/" rel="nofollow external noopener noreferrer" target="_blank">Rene Egli</a>
                        <p>A great alternative to the Ion Club is Rene Egli, this is located at the north end of sotavento beach. The conditions here tend to have a little more chop, but aren't as challenging as the waves at Risco if you're wanting to enjoy a nice freeride or foiling session.</p>
                    </li>
                </ul>
            </div>
    ],
    spotImage: null,

    // Lessons and hire
    lessonIntro: [
        () => <p>Lessons can be booked at any of the 3 centres in the area. A very common place to go for lessons is Rene Egli. We would recomend booking here if you are looking to learn windsurfing as this centre is directly on the beach infront of the <a href="https://www.melia.com/en/hotels/spain/fuerteventura/melia-fuerteventura" rel="nofollow external noopener noreferrer" target="_blank">Melia Hotel.</a></p>,
    ],
    lessonBulletData: [
        {
            title: 'Risco Del Paso',
            link: 'https://www.ion-club.net/risco-del-paso/',
        },
        {
            title: 'Rene Egli',
            link: 'https://www.rene-egli.com/',
        },
        {
            title: 'Costa Calma',
            link: 'https://www.ion-club.net/costa-calma/',
        },
    ],
    lessonHireImageDescription: null,
    lessonHireImageLink: null,
    
    // Getting here
    gettingHereText: [
        "Flights to Fuerteventura Airport (FUE) from the UK are easily accesible. There are many airlines that operate flights to Fuerteventura from various airports in the UK, including budget airlines like Ryanair and EasyJet, as well as charter airlines.",
        "Once you arrive in Fuerteventura, we would recommend renting a car. For this trip, we rented a VW Caddy Maxi. This provided just enough space for two board bags containing two boards, two booms, five sails, and three masts, along with suitcases, hand luggage, and other personal belongings.",
    ],
    gettingHereImage: null,

    // Travelling around
    travellingIntro: "As we just mentioned, we hired a van for our trip, however public and private transport is easily accessible.",
    travellingBulletData: [
        {
            title: 'Car Hire',
        },
        {
            title: 'Public transport'
        },
        {
            title: 'Taxi'
        },
    ],
    travellingImage: null,

    // Where to stay
    stayIntro: "During our stay we rented an apartment which was not far from hotel Melia. Infact, we often walked down to the hotel to have a drink in the bar at the end of the day. Our had everything we needed, however, after visiting Melia a few times we have decided when return we will book here! Although, there are plenty of nice places to choose from on Booking.com",
    whereToStayBulletData: [
        {
            title: 'Apartmentos Playa Paraiso',
            link: 'https://www.booking.com/hotel/es/stunning-ocean-view-with-garden-and-swimming-pool-sotavento',
        },
        {
            title: 'Melia',
            link: 'https://www.melia.com/en/hotels/spain/fuerteventura/melia-fuerteventura',
        }
    ],
    stayImage: null,
    stayImageDescription: null,
    stayImageLink: null,

    // Where to eat
    eatIntro: "Heading into Costa Calma gives endless opportinity for places to have a nice meal out. The service was always incredible, and the atmosphere was great every night. Our favourite relaxing meals were at Restaurante Costa Beach, however, B-side Cafe does a mean pizza!",
    whereToEatBulletData: [
        {
            title: 'Restaurante Costa Beach',
            link: 'https://www.tripadvisor.co.uk/Restaurant_Review-g659634-d24106043-Reviews-Costa_Beach_Restaurante_Beach_Bar-Costa_Calma_Pajara_Jandia_Peninsula_Fuertevent.html'
        },
        {
            title: 'B-Side Cafe',
            link: 'https://www.facebook.com/bsidefuerteventura/'
        },
    ],
    eatImage: null,
    eatImageDescription: null,
    eatImageLink: null,

    // Other Activities
    otherActivityText: "There are many other things to do when you're not on the water. Fuerteventura has lots of secret beaches dotted around the island, all of which are very quiet and peaceful. If you have a car, Cofete beach offers one of the most stunning views on the island, as well as the Corralejo sand dunes and Volcano Calderón Hondo are must visit spots.",
    otherActivityImage: null,
}