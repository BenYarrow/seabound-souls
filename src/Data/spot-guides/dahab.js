export let dahab = {
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
    location: "Egypt",
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
    bestConditions: 'April - June / August - October',
    bestDirection: 'N / NE',
    windConditions: 'Clean',
    waterConditions: 'Chop hop / Flat',
    launchZone: 'Sandy beach',

    // Gallery 
    galleryImages: [
        {
            src: '/images/dahab/dahab-beach-2.jpg',
            alt: 'Dahab beach'
        },
        {
            src: '/images/dahab/dahab-windsurfing-vulcan.jpg',
            alt: 'Ben windsurfing'
        },
        {
            src: '/images/dahab/dahab-swiss-inn-1.jpg',
            alt: 'Swiss Inn resort, Dahab'
        },
        {
            src: '/images/dahab/dahab-swiss-inn-2.jpg',
            alt: 'Swiss Inn resort, Dahab'
        },
        {
            src: '/images/dahab/dahab-rachel-snorkling.jpg',
            alt: 'Rachel snorkling'
        },
        {
            src: '/images/dahab/dahab-swiss-inn-3.jpg',
            alt: 'Swiss Inn resort, Dahab'
        },
        {
            src: '/images/dahab/dahab-swiss-inn-4.jpg',
            alt: 'Swiss Inn resort, Dahab'
        },
        {
            src: '/images/dahab/dahab-swiss-inn-5.jpg',
            alt: 'Swiss Inn resort, Dahab'
        },
        {
            src: '/images/dahab/dahab-swiss-inn-6.jpg',
            alt: 'Swiss Inn resort, Dahab'
        },
        {
            src: '/images/dahab/dahab-beach-2.jpg',
            alt: 'Dahab beach'
        },
        {
            src: '/images/dahab/dahab-safir-1.jpg',
            alt: 'Safir Resort, Dahab'
        },
        {
            src: '/images/dahab/dahab-rachel-snorkling.jpg',
            alt: 'Rachel snorkling'
        },
        {
            src: '/images/dahab/dahab-safir-2.jpg',
            alt: 'Safir Resort, Dahab'
        },
        {
            src: '/images/dahab/camels.jpg',
            alt: 'Camels sitting down'
        },
    ],
    
    // Spot conditions
    whenToGoDetails: "The windiest time of the year in Dahab typically occurs from late spring to early summer and then again in late summer to early autumn. During these periods, the reliable north winds create strong conditions for windsurfing.",
    waterConditionDetails: "Famous for its flat waters, Dahab offers a great spot for beginners, freeride, freestyle and speed windsurfing.",
    waterConditionImage: '/images/dahab/dahab-rachel-snorkling.jpg',
    windConditionDetails: [
        () => <p>
            Wind speeds in Dahab vary depending on the time of year. The wind tends to be lighter in the morning and gradually increases in strength during the day, reaching its peak in the afternoon. Wind speeds can range from around <span className="font-bold text-blue">15 to 30 knots</span> on average.
        </p>,
        () => <p>
            We only had 1 week in this location, however out of those 7 days, we had 4 windy days, with one of them hitting the <span className="font-bold text-blue">40 knot</span> mark! It's safe to say, if you're not renting equipment then we would highly recommend a range of sail sizes to keep you covered.
        </p>
    ] ,
    windConditionImage: null,
    spots: [
        () => <p><span className="font-bold text-blue">The lagoon:</span> This is generally where lessons are taken as this is a windsurf only zone. The natural curve of the sand bank creates a wide sailing area in waist deep waters which makes this a great spot to learn</p>, 
        () => <p><span className="font-bold text-blue">Speedy/Baby bay:</span> Just over the sand bar of the lagoon is another windsurf only zone which offers world-class flat water sailing. The wind comes over the sand bar and straight on to the flat water which makes this ideal for freestylers, speed sailing and for people wanting to improve their skills such as gybing. There is also a floating platform in this area where windsurfers can take a break.</p>, 
    ],
    spotImage: '/images/dahab/dahab-windsurfing-vulcan.jpg',

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
    stayImage: "/images/dahab/dahab-swiss-Inn-4.jpg",
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
}