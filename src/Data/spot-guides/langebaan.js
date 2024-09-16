export let langebaan = {
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
    location: 'South Africa',
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

    // Gallery
    galleryImages: null,
    
    // Spot conditions
    whenToGoDetails: 'The wind season in Langebaan is generally from November to March, with the strongest winds usually in the afternoons. We visited for 2 weeks at the start of january after landing on enw years eve. We had 1 week of light wind, followed by none stop wind for the second week.',
    waterConditionDetails: [
        "Langebaan lagoon is protected from the large ocean swells and has reasonably flat water close to the shore. It's a great spot for freestyle in the flat spots. Further out, the conditions become more unsettled, although providing fun bump and jump conditions.",
        () => <p>One thing to note is that you do have to <span className="font-bold text-blue">be mindful of the tide.</span> When the tide is going out, the current becomes exceptionally strong, making sailing in a southeast wind a little more tricky. However, when the tide is coming in the sailing is effortless. </p>,
        () => <p>Whilst Langebaan generally experiences a moderate climate, the water is much colder than you'd expect. In the summer months <em>(October to March),</em> water temperatures range from around <span className="font-bold text-blue">15 to 20°C.</span> During the winter season <em>(April to September)</em>, temperatures can drop slightly to approximately <span className="font-bold text-orange">12 to 16°C.</span> We'd recommend a 3/2 wetsuit even in the summer months.</p>
    ],
    waterConditionImage: null,
    windConditionDetails: [
        () => <div>
                <h3 className="font-bold text-blue">Summer months <em>(October to March):</em></h3>
                <p>The summer brings prevailing southerly winds ranging from <span className="font-bold text-orange">15 to 25 knots.</span> This is great for windsurfers looking to progress their sailing or just enjoy cruising around the turquoise blue waters.</p>
            </div>,
        () => <div>
                <h3 className="font-bold text-blue">Winter months <em>(April to September):</em></h3>
                <p>In the winter the direction changes to be more north-westerly, giving slightly different sailing conditions but equally enjoyable windsurfing experience.</p>
            </div>,
        () => <p>The spot benefits from thermal winds, especially during the warmer months. As the land heats up, it creates a temperature difference between the inland areas and the coast, resulting in the wind typically being stronger than what is forecast. Wind strength in Langebaan can vary, but it's not uncommon to experience winds ranging from <span className="font-bold text-orange">15 to 30 knots</span> or more.</p>
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
}