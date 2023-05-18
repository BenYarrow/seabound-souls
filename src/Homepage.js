import React from 'react';
import AboutUsLeft from './HomepageComponents/AboutUsLeft';
import AboutUsRight from './HomepageComponents/AboutUsRight';
import './Css/Homepage.css';

function Homepage() {
    
    return(
        
        <div className='relative w-full flex-col '  >
            <div id='hero-section' className='absolute w-screen flex justify-center'>
            </div>
            <div className='w-full h-full '>
                <div className='p-8 h-auto md:h-[30rem] font-standard flex flex-col items-center justify-around text-turquiose'>
                    <h1 className='text-sm md:text-xl text-center pb-4 md:pb-0'>
                        Welcome to Yarrow Travels
                    </h1>
                    <p className='text-xl md:text-xxl text-center pb-4 md:pb-0'>
                        Where the wind meets the waves <br/> and where the memories are made
                    </p>
                    <p className='text-sm md:text-xl  text-center'>
                       Our aim is to help you have the <strong>best</strong> time on the water and showcase the very best watersports desinations <strong>around the world</strong>.
                    </p>
                </div>
                <div className='w-full h-auto md:px-8 bg-turquoise font-standard text-standard '>
                    <h2 className='text-xxl text-center py-4 lg:p-12'>
                        About Us
                    </h2>
                    <AboutUsRight
                        source='/Personal-Images/Cosmos-apartments.jpg'
                        title='Let us introduce ourselves'
                        textOne='We are Rachel and Ben Yarrow, a married couple based in the South East of England.'
                        textTwo='We met in the summer 2019 in Vassiliki, Greece where our shared love of the ocean and watersports brought us together.'
                        textThree='As two adventure seekers, we have made it our mission to experience every windsurf destination the world has to offer.'
                        textFour='We strongly believe in living conscientiously. Looking after the oceans, looking after our wellbeing and improving mental health through participating in watersports is the way we live our lives.'
                        textFive='Away from the water, we love exploring the UK in our van as well as snowboarding and city breaks in Europe.'
                    />
                </div>
                <div className='w-full h-auto md:px-8 bg-standard font-standard text-turquoise '>
                    <h2 className='text-xxl text-center py-4 lg:p-12 '>
                        What do we do?
                    </h2>
                    <AboutUsLeft
                        source='/Personal-Images/Cosmos-apartments.jpg'
                        title='title'
                        textOne='paragraph 1'
                        textTwo='paragraph 2'
                    />
                </div>
            </div>
        </div>
    
    )
};


export default Homepage;

