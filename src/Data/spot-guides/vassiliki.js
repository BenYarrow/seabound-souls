export let vassiliki = {
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
    location: 'Greece',
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

    // Gallery
    galleryImages:[
        {
            src: '/images/vassiliki/cosmos-hotel.jpg',
            alt: 'Cosmos hotel, Vassiliki'
        },
        {
            src: '/images/mastheads/homepage/windsurfing-together-01-desktop.jpg',
            alt: 'Ben and Rachel windsurfing together'
        },
        {
            src: '/images/mastheads/homepage/windsurfing-together-02-desktop.jpg',
            alt: 'Ben and Rachel windsurfing together'
        },
        {
            src: '/images/vassiliki/surf-hotel.jpg',
            alt: 'Surf Hotel, Vassiliki'
        },
    ],
    
    // Spot conditions
    whenToGoDetails: 'The season runs from May to September, with the windiest months being June, July and August. ',
    waterConditionDetails: () => <p>Vassiliki bay offers both flatwater and choppy conditions, making it suitable for windsurfers of all levels. Additionally, the bay is non-tidal so theres no restrictions on sailing once the wind kicks in. The water temperature typically ranges from around <span className="font-bold text-blue">20°C (68°F)</span> in the early spring (May) to <span className="font-bold text-blue">26°C (79°F)</span> or higher in the peak summer months of July and August. In May and September, you may want to wear a long wetsuit, particularly once the sun sets behind the mountains. But otherwise, boardies and a rash vest is all you need during the summer months.</p>,
    waterConditionImage: '/images/mastheads/homepage/paddleboarding-vass.jpg',
    windConditionDetails: [
        "Vassiliki is famous for its reliable afternoon thermal winds. The prevailing wind is a katabatic thermal wind known as 'Eric,' which blows from the northwest.", 
        () => <p>The wind typically starts picking up in the late morning or early afternoon, reaching its peak in the late afternoon. The air temperature during the season ranges from <span className="font-bold text-blue">25°C to 35°C (77°F to 95°F).</span></p>,
        () => <p>Once 'Eric' shows up, its a race to the water as hundreds of windsurfers rush to catch the first gusts on the water. Winds consistently blow between <span className="font-bold text-blue">15 to 25 knots.</span></p>,
        "The steady, strong winds and predictable gusts make Vassiliki an ideal destination for those looking to progress in their windsurfing skills or take on more advanced sailing challenges."
    ],
    windConditionImage: '/images/mastheads/homepage/windsurfing-together-02-desktop.jpg',
    spots: null,
    spotImage: '/images/Spot-Guides/vassiliki/vassiliki-spotguide-desktop.jpg',

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
    stayImage: '/images/vassiliki/cosmos-hotel.jpg',
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
    eatImage: '/images/vassiliki/zorbas-restaurant.jpg',
    eatImageDescription: 'Patio Restaurant',
    eatImageLink: 'https://www.facebook.com/profile.php?id=100063509014691',

    // Other Activities
    otherActivityText: [
        "In addition to windsurfing, you can enjoy other water sports like sailing, kayaking, and paddleboarding. You can hire a car and explore the islands beautiful beaches, hiking trails and traditional Greek villages. Consider hiring a boat from Sivota and exploring the many caves and hidden beaches. You can even take the ferry from Nidri to Kefalonia.",
    ],
    otherActivityImage: null,
}