export let SpotGuidePages = [
    {
        title: 'Vassiliki',
        metaKeyWords: [
            'windsurfing in vassiliki', 
            'vasssiliki windsurfing', 
            'vassiliki freestyle', 
            'club vass'
        ],
        metaContent: '',
        masthead: {
            sm: '/images/Spot-Guides/vassiliki/vassiliki-spotguide-mobile.jpg',
            md: '/images/Spot-Guides/vassiliki/vassiliki-spotguide-tablet.jpg',
            lg: '/images/Spot-Guides/vassiliki/vassiliki-spotguide-desktop.jpg',
            alt: 'Vassiliki bay'
        },
        location: 'Vassiliki, Lefkada',
        intro: "Vassiliki is a pretty town nestled on the southern coast of Lefkada. It is renowned for its natural beauty, world class water sports scene and vibrant nightlife. Vassiliki has become a sought-after destination for travellers seeking a perfect blend of adventure and relaxation. Whether you're a watersports enthusiast, a beach lover, or simply looking to immerse yourself in the Greek island experience, Vassiliki offers a warm and welcoming atmosphere for all.",
        
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
        i5: false,
        a1: true,
        a2: true,
        a3: true,
        a4: true,
        a5: false,
        sailingStyle: 'Freeride / Freestlye / Foil',
        bestConditions: 'June / July / August',
        bestDirection: 'N / W / NW',
        windConditions: 'Gusty',
        waterConditions: 'Chop hop / Flat',
        launchZone: 'Pebble beach',

        // Gallery grid
        gridGalleryImageOne:'/images/Vassiliki-Images/cosmos-hotel.jpg',
        gridGalleryImageTwo:'/images/mastheads/homepage/windsurfing-together-01-desktop.jpg',
        gridGalleryImageThree:'/images/mastheads/homepage/windsurfing-together-02-desktop.jpg',
        gridGalleryImageFour:'/images/Vassiliki-Images/surf-hotel.jpg',
        
        // Spot conditions
        whenToGoDetails: 'The season runs from May to September, with the windiest months being June, July and August. ',
        waterConditionDetails: "Vassiliki bay offers both flatwater and choppy conditions, making it suitable for windsurfers of all levels. Additionally, the bay is non-tidal so theres no restrictions on sailing once the wind kicks in. The water temperature typically ranges from around 20°C (68°F) in the early spring (May) to 26°C (79°F) or higher in the peak summer months of July and August. In May and September, you may want to wear a long wetsuit, particularly once the sun sets behind the mountains. But otherwise, boardies and a rash vest is all youll need during the summer months.",
        waterConditionImage: '/images/mastheads/homepage/paddleboarding-vass.jpg',
        windConditionDetails: [
            "Vassiliki is famous for its reliable afternoon thermal winds. The prevailing wind is a katabatic thermal wind known as 'Eric,' which blows from the northwest.", 
            () => <p>The wind typically starts picking up in the late morning or early afternoon, reaching its peak in the late afternoon. The air temperature during the season ranges from <span className="font-bold">25°C to 35°C (77°F to 95°F).</span></p>,
            () => <p>Once 'Eric' shows up, its a race to the water as hundreds of windsurfers rush to catch the first gusts on the water. Winds consistently blow between <span className="font-bold">15 to 25 knots.</span></p>,
            "The steady, strong winds and predictable gusts make Vassiliki an ideal destination for those looking to progress in their windsurfing skills or take on more advanced sailing challenges."
        ],
        windConditionImage: '/images/mastheads/homepage/windsurfing-together-02-desktop.jpg',
        spots: null,
        spotImage: '/images/Spot-Guides/vassiliki-spotguide.jpg',

        // Lessons and hire
        lessonIntro: 'There are numerous windsurfing centres are located along the Vassiliki waterfront, offering equipment rental and lessons. These include:',
        lessonBulletData: [
            {
                title: 'Surf School Vassiliki',
                link: 'https://surfschoolvasiliki.gr/',
            },
            {
                title: 'Human Sports',
                link: 'http://www.human-sports.com/en/home.html',
            },
            {
                title: 'Club Vass',
                link: 'https://clubvass.com/',
            },
        ],
        lessonHireImage: '/images/mastheads/destinations/ben-vulcan-vassiliki-desktop.jpg',
        lessonHireImageDescription: 'Surf School Vassiliki',
        lessonHireImageLink: 'https://surfschoolvasiliki.gr/',
            
        // Getting here 
        gettingHereText: [
            'There are lots of flight options available form the UK. We would recommend Easyjet if you want to take your own windsurf or wing kit. The nearest airport to Vassiliki is Aktion National Airport (PVK), which is approximately 70-minute drive away. You can also reach Lefkada by road from mainland Europe or by ferry from Brindisi, Italy to Igoumenitsa.',
        ],
        gettingHereImage: null,

        // Travelling around
        travellingIntro: "Vassiliki itself is a small town and it takes around 20 minutes to walk from one side of the bay to the other. If you're staying longer than a week, you may want to consider hiring a bike in order to get around much quicker.",
        travellingBulletData: [
            {
                title: 'By Car: We would recommend hiring a car to explore everything the island has to offer.',
            },
            {
                title: 'Taxi',
            },
            {
                title: 'Bus'
            }
        ],
        travellingImage: null,

        // Where to stay
        stayIntro: 'There are lots of options for accomodation in Vassiliki. Here are the most recomended by the locals:',
        whereToStayBulletData: [
            {
                title: 'Cosmos Hotel',
                link: 'https://cosmos-vassiliki.com/', 
            },
            {
                title: 'Surf Hotel',
                link: 'https://surfhotel.gr/',
            },
            {
                title: 'Club Vass',
                link: 'https://clubvass.com/',
            },
        ],
        stayImage: '/images/Vassiliki-Images/cosmos-hotel.jpg',
        stayImageDescription: 'Cosmos Hotel',
        stayImageLink: 'https://cosmos-vassiliki.com/',

        // Where to eat
        eatIntro: 'Vassiliki has a wide range of restaurants serving, all serving amaxing food. here are some of our favourites:',
        whereToEatBulletData: [
            {
                title: 'Vass Bar',
                link: 'https://vasiliki.eu/vass-bar.html',
            },
            {
                title: 'Patio Dining',
                link: 'https://www.facebook.com/profile.php?id=100063509014691',
            },
            {
                title: 'Oceans Restaurant',
                link: 'https://oceanrestaurant.gr/en/',
            },
            {
                title: "Alex's Pizza",
                link: 'https://www.facebook.com/people/Alexs-Pizza/100054340518389/',
            },
            {
                title: 'The Old Plane Tree (Kontarena)',
                link: 'https://vasiliki.eu/taverna-old-plane-tree.html',
            },
            {
                title: 'Sivota Bakery CafÃ© (Sivota)',
                link: 'https://www.facebook.com/sivotabakerycafe/',
            },
            {
                title: 'Rachi Restaurant (Exanthia)',
                link: 'https://rachi.gr/',
            },
        ],
        eatImage: '/images/Vassiliki-Images/zorbas-restaurant.jpg',
        eatImageDescription: 'Patio Restaurant',
        eatImageLink: 'https://www.facebook.com/profile.php?id=100063509014691',

        // Other Activities
        otherActivityText: [
            "In addition to windsurfing, you can enjoy other water sports like sailing, kayaking, and paddleboarding. You can hire a car and explore the islands beautiful beaches, hiking trails and traditional Greek villages. Consider hiring a boat from Sivota and exploring the many caves and hidden beaches. You can even take the ferry from Nidri to Kefalonia.",
        ],
        otherActivityImage: null,
    },
    {
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
        location: 'Le Morne, Mautitius',
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

        // Grid Gallery
        gridGalleryImageOne:'/images/Mauritius-Images/mauritius-beach-01.jpg',
        gridGalleryImageTwo:'/images/Mauritius-Images/rachel-windsurfing-01.jpg',
        gridGalleryImageThree:'/images/Mauritius-Images/le-morne-mountain-01.jpg',
        gridGalleryImageFour:'/images/Mauritius-Images/rachel-sitting.jpg',
        
        // Spot conditions
        whenToGoDetails: "The peak season in Le Morne runs from June to October when the trade winds consistently blow from the southeast. During this period, you can expect strong and consistent wind conditions, especially for wave riding. We visited during September and pretty much every day was windy with great conditions. ",
        waterConditionDetails: "The lagoon inside the reef provides shallow and flat water, making it ideal for beginners to practice. Outside of the lagoon offers a variety of wave conditions and a great place to improve your wave riding skills. The water temperature is consistently warm and comfortable year-round. It typically ranges from 24°C (75°F) in the winter to 28°C (82°F) in the summer. We wore long summer wetsuits and booties, to provide some protections from the rocks when windsurfing close to the reefs.",
        waterConditionImage: '/images/Mauritius-Images/mauritius-beach-02.jpg',
        windConditionDetails: [
            () => 
                <div> 
                    <p className="font-bold">Austral Summer <em>(May to September):</em></p> 
                    <p>
                        This is the peak season in Le Morne. During these months, the trade winds are at their strongest, and wind speeds often range from <span className="font-bold">15 to 30 knots.</span> The winds are most consistent in the afternoon, making it the perfect time to get on the water.
                    </p>
                </div>,
            () => 
                <div> 
                    <p className="font-bold">Transition Seasons <em>(April and October)</em></p>
                    <p>Wind conditions in the transition months of April and October can still be favorable, but generally less reliable than peak season. Wind speeds may range from <span className="font-bold">10 to 25 knots</span> during these months.</p>
                </div>, 
            () => 
                <div>
                    <p className="font-bold">Austral Winter <em>(November to March):</em></p> 
                    <p>While it's possible to have a good session on the foil at this time of year, the winds are less consistent, and wind speeds can vary widely. Wind speeds may range from <span className="font-bold">8 to 20 knots</span> during this period.</p>
                </div>
                
        ],
        windConditionImage: '/images/Mauritius-Images/ben-windsurfing-01.jpg',
        spots: [
            () => <div>
                    <p className="font-bold">Lagoon: </p>
                    <p>Located just outside the protective reef, Little Reef offers challenging wave riding conditions with reef breaks. The waves range from chest-high to double overhead, providing a thrilling experience for advanced windsurfers.</p>
                </div>,
            () => <div>
                    <p className="font-bold">One Eye: </p>
                    <p>One Eye is one of the most famous wave spots in Le Morne. It's known for its powerful, barrelling waves and is a favourite among expert windsurfers. The wave can be extremely challenging, and it's not recommended for those with limited experience.</p>
                </div>
        ],

        spotImage: '/images/Mauritius-Images/mauritius-beach-03.jpg',

        // Lessons and hire
        lessonIntro: 'Ion Club Le Morne is particularly well known for its windsurfing school that caters to all levels. We hired kit from ION Club Le Morne and were very impressed with their selection of boards and sails. Staff were super friendly and always on hand to help. They also cater for kite surfers, wingfoilers and surfers.',
        lessonBulletData: [
            {
                title: 'Ion Club, Mauritius',
                link: 'https://www.ion-club.net/le-morne/'
            }
        ],
        lessonHireImage: '/images/Mauritius-Images/ion-club-safety-tower.jpg',
        lessonHireImageDescription: 'Ion Club, Mauritius',
        lessonHireImageLink: 'https://www.ion-club.net/le-morne/',

        // Getting here
        gettingHereText: [
            'Regular flights are available from London Heathrow (LHR), London Gatwick (LGW), and Manchester Airport (MAN) to Sir Seewoosagur Ramgoolam International Airport (MRU), the main international airport in Mauritius. Several airlines operate flights, including British Airways, Emirates and Air Mauritius. The flight takes around 12 to 13 hours.',
        ],
        gettingHereImage: "/images/Mauritius-Images/crystal-rock.jpg",

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
        travellingImage: "/images/Mauritius-Images/mauritius-monkey.jpg",


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
        stayImage: "/images/Mauritius-Images/lux-le-morne-bed.jpg",
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
        eatImage: "/images/Mauritius-Images/mauritius-rum-factory-01.jpg",
        eatImageDescription: null,
        eatImageLink: null,

        // Other Activities
        otherActivityText: [
            'Hike to the summit of Le Morne Brabant. Take an organised boat tour or catamaran cruise to explore the nearby islands like ile aux Cerfs and ile le aux Aigrettes. Take to the skys and see the famous udnerwaterfall from a helicopter or sea plane. Visit Charamel rum distillary and discover the seven coloured earth.',
        ],
        otherActivityImage: "/images/Mauritius-Images/ben-wakeboarding.jpg",
    },
    {
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
        location: 'Fuerteventura, Canaries',
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

        // Grid Gallery
        gridGalleryImageOne: null,
        gridGalleryImageTwo: null,
        gridGalleryImageThree: null,
        gridGalleryImageFour: null,
        
        // Spot conditions
        whenToGoDetails: "The windiest time of year in Risco del Paso typically occurs during the summer months, particularly from June to August. During this period, the Canary Islands experience the strongest trade winds, which blow consistently from the northeast. These winds provide for epic sessions on the water.",
        waterConditionDetails: [
            () => <div>
                    <p>Depending on where youre sailing, the water canditions can vary. In the laggon you can expect extremely flat water on low tides, with slight small chop at high tide <em>(depending how high the high tide is).</em> Over the sand bar you can expect smooth boom high waves that roll in consistently while the tide is coming in, this then flattens off when the tide is going out.</p>
                    <p>Water temperatures stay warm year-round, ranging from <span className="font-bold">24°C (75°F)</span> in winter to <span className="font-bold">28°C (82°F)</span> in summer. We recommend wearing long summer wetsuits and booties for protection, especially near the reefs.</p>
                </div>
        ],
        waterConditionImage: null,
        windConditionDetails: null,
        windConditionImage: null,
        spots: [
            () => <div>
                    <p className="font-bold">Lagoon: </p>
                    <p>The lagoon at Risco Dell Paso is awesome spot to progress your freeride and freestyle sailing. One thing to note is that the lagoon is <em>tidal</em>. Get to your session early to hit the water as early as possible as soon as the water fills in! If you want as much time on the water as you can get, we would recomend checking the tide tables <a href="https://www.rene-egli.com/windsurfing/windsurfing/lagoon" rel="nofollow external noopener noreferrer" target="_blank">here</a> to plan your trip around the highest tides.</p>
                </div>,
            () => <div>
                    <p className="font-bold">Sea: </p>
                    <ul className="pl-12">
                        <li className='list-disc prose marker:text-blue'>
                            <a href="https://www.ion-club.net/fuerteventura/" rel="nofollow external noopener noreferrer" target="_blank">Ion Club:</a>
                            <p>Just a few metres walk over the sand bar you can get straight into the sea to experience the smooth rolling waves when the tide is coming in. When the tide is going out the sandbar protects the water which creats super flat condition for freeride and freestyle.</p>
                        </li>
                        <li className='list-disc prose marker:text-blue'>
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
    },
    {
        title: 'Dahab',
        keyWords: [
            'windsurfing in Dahab', 
            'Dahab windsurfing', 
            'windsurfing in Egypt', 
            'Dahaab lagoon', 
            'Red Sea windsurfing',
        ],
        masthead: {
            sm: '/images/Spot-Guides/dahab/dahab-spotguide-mobile.jpg',
            md: '/images/Spot-Guides/dahab/dahab-spotguide-tablet.jpg',
            lg: '/images/Spot-Guides/dahab/dahab-spotguide-desktop.jpg',
            alt: 'Dahab beach',
        },
        location: "Dahab, Egypt",
        intro: "Dahab, a windsurfing paradise! Thanks to its consistent sea breezes and warm, clear waters, this lagoon brings in windsurfers from all around the world. The lagoon offers an ideal location for both beginners and experts to sail the waters against a backdrop of the striking desert landscapes.",
        
        // Spot Overview
        b1: true,
        b2: true,
        b3: true,
        b4: true,
        b5: true,
        i1: true,
        i2: true,
        i3: true,
        i4: false,
        i5: false,
        a1: true,
        a2: true,
        a3: true,
        a4: true,
        a5: false,
        sailingStyle: 'Freeride / Freestlye / Foil',
        bestConditions: 'April / May / June / August / September / October',
        bestDirection: 'N / NE',
        windConditions: 'Clean',
        waterConditions: 'Chop hop / Flat',
        launchZone: 'Sandy beach',

        // Gallery grid
        gridGalleryImageOne: null,
        gridGalleryImageTwo:null,
        gridGalleryImageThree:null,
        gridGalleryImageFour:null,
        
        // Spot conditions
        whenToGoDetails: "The windiest time of the year in Dahab typically occurs from late spring to early summer and then again in late summer to early autumn. During these periods, the reliable north winds create strong conditions for windsurfing.",
        waterConditionDetails: [
            "Famous for its flat waters, Dahab offers a great spot for beginners, freeride, freestyle and speed windsurfing.", 
            () => <p><span className="font-bold">The lagoon:</span> This is generally where lessons are taken as this is a windsurf only zone. The natural curve of the sand bank creates a wide sailing area in waist deep waters which makes this a great spot to learn</p>, 
            () => <p><span className="font-bold">Speedy/Baby bay:</span> Just over the sand bar of the lagoon is another windsurf only zone which offers world-class flat water sailing. The wind comes over the sand bar and straight on to the flat water which makes this ideal for freestylers, speed sailing and for people wanting to improve their skills such as gybing. There is also a floating platform in this area where windsurfers can take a break.</p>, 
        ],
        waterConditionImage: null,
        windConditionDetails: [
            () => <p>
                Wind speeds in Dahab vary depending on the time of year. The wind tends to be lighter in the morning and gradually increases in strength during the day, reaching its peak in the afternoon. Wind speeds can range from around <span className="font-bold">15 to 30 knots</span> on average.
            </p>,
            () => <p>
                We only had 1 week in this location, however out of those 7 days, we had 4 windy days, with one of them hitting the <span className="font-bold">40 knot</span> mark! It's safe to say, if you're not renting equipment then we would highly recommend a range of sail sizes to keep you covered.
            </p>
        ] ,
        windConditionImage: null,
        spots: null,
        spotImage: null,

        // Lessons and hire
        lessonIntro: "There are three main centres for hiring equipment and booking lessons. We used Dahab starts for storage of our equipment and also for boat shuttle services out to snorkle spots when the wind wasnt so strong. Here are the well known centres:",
        lessonBulletData: [
            {
                title: 'Dahab Stars',
                link: 'https://www.dahab-stars.com/',
            },
            {
                title: 'Harry Nass',
                link: 'https://www.harry-nass.com/en/',
            },
            {
                title: 'Five Squares',
                link: 'https://go-dahab.ru/eng/',
            },
        ],
        lessonHireImage: null,
        lessonHireImageDescription: "Dahab Stars",
        lessonHireImageLink: "https://www.dahab-stars.com/",
            

        // Where to stay
        stayIntro: [
            "During our visit to dahab we stayed in 4 different accomodations. If you read earlier that we were only here for a week, then you may have some questions!", 
            "All we can say is, if you're budget isnt extremely tight, the little extra goes along way. We upgraded from a small apartment with no locking doors, air condition or clean water, to a luxury resort fo a small additional cost.", 
            "If you're planning to visit for a short period of time, we recomend staying here:"
        ],
        whereToStayBulletData: [
            {
                title: 'Swiss Inn Resort',
                link: 'https://swissinn.net/hotels/index.php?lang=Dahab',
            },
            {
                title: 'Safir Hotel',
                link: 'https://safirhotels.com/en/hotel/dahab',
            },
        ],
        stayImage: "/images/Egypt-Images/Dahab-Swiss-Inn-4.jpg",
        stayImageDescription: "Swiss Inn Resort",
        stayImageLink: "https://swissinn.net/hotels/index.php?lang=Dahab",

        // Where to eat
        eatIntro: [
            "We visited a couple of restauraunts while visiting dahab, however our favourite was Al Pacino. The food was delicious and the service was great. A warm and friendly envoronment."
        ],
        whereToEatBulletData: [
            {
                title: 'Al Pacino',
                link: null,
            }
        ],
        eatImage: null,
        eatImageDescription: null,
        eatImageLink: null,

        // Other Activities
        otherActivityText: [
            "Dahab is also famous for its world class scuba diving and snorkling. The great blue hole is one of the most famous dive spots in the world. There are also desert safaris, hiking and trecking as well as cultural experiences discovering the local beduin way of live.",
        ],
        otherActivityImage: null,
    },
    {
        title: 'Langebaan',
        keyWords: [
            'windsurfing in Langebaan', 
            'Langebaan windsurfing', 
            'windsurfing in South Africa', 
            'South africa windsurfing'
        ],
        masthead: {
            sm: '/images/Spot-Guides/langebaan/langebaan-spotguide-mobile.jpg',
            md: '/images/Spot-Guides/langebaan/langebaan-spotguide-tablet.jpg',
            lg: '/images/Spot-Guides/langebaan/langebaan-spotguide-desktop.jpg',
            alt: 'Langebaan lagoon'
        }, 
        location: 'Langebaan, South Africa',
        intro: "Langebaan is a must-visit destination for those seeking the perfect balance between adventure and relaxation. It's renowned for its consistent winds and offers much needed sunshine during the cold winter months in the northern hemisphere.",
        
        // Spot Overview
        b1: true,
        b2: true,
        b3: false,
        b4: false,
        b5: false,
        i1: true,
        i2: true,
        i3: true,
        i4: false,
        i5: false,
        a1: true,
        a2: true,
        a3: true,
        a4: false,
        a5: false,
        sailingStyle: 'Freeride / Freestyle / Foil',
        bestConditions: 'December / January / February',
        bestDirection: 'SE / S / SW / NW',
        windConditions: 'Clean winds',
        waterConditions: 'Bump and jump',
        launchZone: 'Sandy Beach',

        // Gallery grid
        gridGalleryImageOne:'',
        gridGalleryImageTwo:'',
        gridGalleryImageThree:'',
        gridGalleryImageFour:'',
        
        // Spot conditions
        whenToGoDetails: 'The wind season in Langebaan is generally from November to March, with the strongest winds usually in the afternoons. We visited for 2 weeks at the start of january after landing on enw years eve. We had 1 week of light wind, followed by none stop wind for the second week.',
        waterConditionDetails: [
            "Langebaan lagoon is protected from the large ocean swells and has reasonably flat water close to the shore. It's a great spot for freestyle in the flat spots. Further out, the conditions become more unsettled, although providing fun bump and jump conditions.",
            () => <p>One thing to note is that you do have to <span className="font-bold">be mindful of the tide.</span> When the tide is going out, the current becomes exceptionally strong, making sailing in a southeast wind a little more tricky. However, when the tide is coming in the sailing is effortless. </p>,
            () => <p>Whilst Langebaan generally experiences a moderate climate, the water is much colder than you'd expect. In the summer months <em>(October to March),</em> water temperatures range from around <span className="font-bold">15 to 20°C.</span> During the winter season <em>(April to September)</em>, temperatures can drop slightly to approximately <span>12 to 16°C.</span> We'd recommend a 3/2 wetsuit even in the summer months.</p>
        ],
        waterConditionImage: null,
        windConditionDetails: [
            () => <div>
                    <p className="font-bold">Summer months <em>(October to March):</em></p>
                    <p>The summer brings prevailing southerly winds ranging from <span>15 to 25 knots.</span> This is great for windsurfers looking to progress their sailing or just enjoy cruising around the turquoise blue waters.</p>
                </div>,
            () => <div>
                    <p className="font-bold">Winter months <em>(April to September):</em></p>
                    <p>In the winter the direction changes to be more north-westerly, giving slightly different sailing conditions but equally enjoyable windsurfing experience.</p>
                </div>,
            () => <p>The spot benefits from thermal winds, especially during the warmer months. As the land heats up, it creates a temperature difference between the inland areas and the coast, resulting in the wind typically being stronger than what is forecast. Wind strength in Langebaan can vary, but it's not uncommon to experience winds ranging from <span>15 to 30 knots</span> or more.</p>
        ] ,
        windConditionImage: '',
        spots: null,
        spotImage: null,

        // Lessons and hire
        lessonIntro: [
            "There is only one windsurfing centre in Langebaan, but from our experience, we wouldnt recommend this centre for lessons or for kit hire. The kit available to hire is very limited and the general attitude from the owners and staff was not particularly welcoming.",
        ],
        lessonBulletData: null,
        lessonHireImage: null,
        lessonHireImageDescription: null,
        lessonHireImageLink: null,
            
        // Getting here 
        gettingHereText: [
            "Langebaan is around a 1.5hrs drive from Cape Town. It is possible to get a taxi for this journey, however we highly recomend hiring a car, as there are so many things to do in the Western Cape area.",
        ],
        gettingHereImage: null,

        // Travelling around
        travellingIntro: "As we just mentioned, we hired a car for our stay in Langebaan. Driving here is very easy, with the left side of the road feeling comfortably familiar. However, make sure your doors are locked at all time while driving around Cape Town, as there are a lot of people that wander close to your car at traffic lights etc.",
        travellingBulletData: [
            {
                title: 'Car hire',
            },
            {
                title: 'Taxi',
            },
            {
                title: 'Public transport'
            }
        ],
        travellingImage: null,

        // Where to stay
        stayIntro: [
            'During our time in Langebaan, we stayed in 2 places. The first was a little further out than we first wanted due to availability over new year. However, the Three Feathers Cottage was a beautiful little complex sitting within a gated property in a nature reserve. The second place we stayed was a well known hotel in langebaan called Wind Town. This was a 2 minute walk from the beach, and a 20 minute walk from the windsurf centre. The facilities in both of these places were exceptoinal, have a look at the links below to see for yourself!',
            'We also stayed in Cape Town towards the end of the trip, this hotel was a little more luxurious than the others. This hotel was called Ocean View House. As well as beautiful scenic ocean views, it also had an honesty bar, where youre able to pour your own drinks all night, and write down what you had!'
        ],
        whereToStayBulletData: [
            {
                title: 'Three Feathers Cottage',
                link: 'https://www.threefeathers.co.za/'
            },
            {
                title: 'Wind Town Hotel',
                link: 'https://www.windtown-sa.com/'
            },
            {
                title: 'Ocean View House',
                link: 'https://oceanview-house.com/'
            }
        ],
        stayImage: null,
        stayImageDescription: null,
        stayImageLink: null,

        // Where to eat
        eatIntro: 'We visited a variety of different restaurants in Langebaan, and its easy to say you cannot get a bad meal here! And all the meals are incredibly well priced. For example, we ate at the Farmhouse Hotel. Our meal included starters, muscles, steak, a bottle of wine and deserts and the total bill was less than £30! Heres a list of our favorites!',
        whereToEatBulletData: [
            {
                title: 'The farmhouse Hotel',
                link: 'https://www.thefarmhousehotel.com/'
            }, 
            {
                title: 'Wind Town Hotel',
                link: 'https://www.windtown-sa.com/'
            }, 
            {
                title: 'Wunderbar',
                link: 'https://www.facebook.com/capesport.co.za'
            },
            {
                title: 'Kokomo',
                link: 'http://www.kokomolangebaan.co.za/'
            }
        ],
        eatImage: '',
        eatImageDescription: '',
        eatImageLink: '',

        // Other Activities
        otherActivityText: [
            "We highly recomend hiring a car for this spot, and with this you can explore the areas local to langebaan and also Cape Town.",
            "If you're looking for things to do around Langebaan, we would highly recomend taking a drive to Shark Bay, and from there drive round the West Coast National Park.",
            "If you have the time, Cape Town has plenty of activities, such as visiting the South African Penguins at Boulders Beach, taking the scenic route round Chapmans Peak Drive, as well as helicopter and boat tours available from the harbour.",
        ],
        otherActivityImage: null,
    },
]