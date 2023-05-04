import React from 'react';
import AboutUsLeft from './HomepageComponents/AboutUsLeft';
import AboutUsRight from './HomepageComponents/AboutUsRight';

function Homepage() {
    
    return(
        
        <div className='relative w-full flex-col'  >
            <h2 className="text-slate-200 md:text-xxl text-xl mt-8 text-center ">
                Welcome to Yarrow Travels!
            </h2>
            <div className='my-8'>
                <AboutUsLeft 
                    heading='Who are we?'
                    textOne='We are Ben and Rachel Yarrow, a married couple based in the South East of England. We met in the summer of 2019 while windsurfing in Vassiliki, Greece'
                    textTwo='Since then we have done our best to visit as many windsurfing destinations as possible, while filling in the gaps with trips such as snowboarding in Canada, road trips round the UK and city breaks in Europe.'
                />
            </div>
            <div className='mb-8'>
                <AboutUsRight
                    source='canada.jpeg'
                    title='What have we done?'
                    textOne='In the last 4 years we have visited some truly incredible places, including a helicopter ride over the underwater waterfall in Mauritius, dog sledding on a frozen lake in the Canadian Rockies and windsurfing in the Red Sea. If you would like to see more, check out our destination guide to see what we have done and how you could do it yourself!'
                    textTwo='While we explore these amazing places, we document our adventures in the style of photography and short form video. We have a range of high end equipment including professional cameras, drones, gimbals and a go pro. '
                />
            </div>
        </div>
    
    )
};

export default Homepage;

