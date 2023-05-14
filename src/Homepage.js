import React from 'react';
import AboutUsLeft from './HomepageComponents/AboutUsLeft';
import AboutUsRight from './HomepageComponents/AboutUsRight';
import './Css/Homepage.css';

function Homepage() {
    
    return(
        
        <div className='relative w-full flex-col '  >
            <div id='hero-section' className='absolute w-screen flex justify-center'>
            </div>
            <div className='w-full h-full'>
                <div className='py-8 h-[30rem] font-standard flex flex-col items-center justify-around text-turquiose'>
                    <h1 className='text-xl text-center'>
                        Welcome to Yarrow Travels
                    </h1>
                    <p className='text-xxl text-center'>
                        Where the wind meets the waves <br/> and where the memories are made
                    </p>
                    <p className='text-xl text-center'>
                       Our aim is to help you have the very <strong>best</strong> time on the water and showcase the <br/> best watersports desinations <strong>around the world</strong>.
                    </p>
                </div>
                <div className='w-full h-auto py-8 px-20 bg-turquiose font-standard text-standard'>
                    <h2 className=' text-xxl text-center'>
                        About Us
                    </h2>
                    <AboutUsRight
                        source='/Personal-Images/Cosmos-apartments.jpg'
                        title='Let us introduce ourselves'
                        textOne='We are Ben and Rachel Yarrow, a married couple based in the South East of England. We met in the summer of 2019 while windsurfing in Vassiliki, Greece'
                        textTwo='Since then we have done our best to visit as many windsurfing destinations as possible, while filling in the gaps with trips such as snowboarding in Canada, road trips round Iceland and city breaks in Europe.'
                    />
                </div>
            </div>
        </div>
    
    )
};


export default Homepage;

