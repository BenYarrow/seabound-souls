import React from 'react';
import AboutInfoLeft from './HomepageComponents/AboutInfoLeft';
import AboutInfoRight from './HomepageComponents/AboutInfoRight';
import './Css/Homepage.css';

function Homepage() {
    
    return(
        
        <div className='relative w-full flex-col '  >
            <div id='hero-section' className='absolute w-screen flex justify-center'>
            </div>
            <div className='w-full h-full '>
                <div className='p-8 h-auto md:h-[30rem] font-standard flex flex-col items-center justify-around text-turquoise bg-gradient-to-t from-turquoise/40 to-standard '>
                    <h1 className='text-sm md:text-xl text-center pb-4 md:pb-0 '>
                        Welcome to Yarrow Travels
                    </h1>
                    <p className='text-xl md:text-xxl text-center pb-4 md:pb-0'>
                        Where the wind meets the waves <br/> is where the memories are made
                    </p>
                    <p className='text-sm md:text-xl  text-center'>
                       Our aim is to help you have the <strong>best</strong> time on the water and showcase the very best watersports desinations <strong>around the world</strong>.
                    </p>
                </div>
                <div className='w-full h-auto md:px-8 bg-gradient-to-b from-turquoise to-turquoise/60  text-standard '>
                    <h2 className='text-xxl text-center py-4 lg:p-12'>
                        About Us
                    </h2>
                    <AboutInfoRight
                        source='/Personal-Images/Cosmos-apartments.jpg'
                        title='Let us introduce ourselves'
                        textOne='We are Rachel and Ben Yarrow, a married couple based in the South East of England.'
                        textTwo='We met in the summer 2019 in Vassiliki, Greece where our shared love of the ocean and watersports brought us together.'
                        textThree='As two adventure seekers, we have made it our mission to experience every windsurf destination the world has to offer.'
                        textFour='We strongly believe in living conscientiously. Looking after the oceans, looking after our wellbeing and improving mental health through participating in watersports is the way we live our lives.'
                        textFive='Away from the water, we love exploring the UK in our van as well as snowboarding and city breaks in Europe.'
                    />
                </div>
                <div className='w-full h-auto md:px-8 bg-gradient-to-t from-turquoise/40 to-standard  text-turquoise'>
                    <h2 className='text-xxl text-center py-4 lg:p-12 '>
                        What do we do?
                    </h2>
                    <AboutInfoLeft
                        source='/Personal-Images/Cosmos-apartments.jpg'
                        title='The search for perfection'
                        textOne="This sport will take you places most people will never go. Whether that's being out at sea looking back at the shore as the world carries on, or in a deprived town in egypt where there are only locals and wildlife."
                        textTwo="What is perfection? For most it's a nice resort, all inclusive, laying on a sun bed all day. For us it's waking up, packing a van, and driving to chase the wind."
                        textThree="We have visited a lot of places in search for flat waters, warm wind and an empty playground. If you're interested in finding great places to get on the water, then you're in the right place."
                    />
                </div>
                <div className='p-8 h-auto md:h-[30rem] font-standard flex flex-col items-center justify-around  text-turquoise'>
                    <h1 className='text-sm md:text-xl text-center pb-4 md:pb-0'>
                        Addiction
                    </h1>
                    <p className='text-xl md:text-xxl text-center pb-4 md:pb-0'>
                        It's you, your equipment and nature <br/> what are you going to do with it?
                    </p>
                    <p className='text-sm md:text-xl  text-center'>
                        We can help you decide.
                    </p>
                </div>
            </div>
        </div>
    
    )
};


export default Homepage;

