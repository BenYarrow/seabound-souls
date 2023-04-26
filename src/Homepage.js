import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import AboutUsLeft from './AboutUsLeft';
import AboutUsRight from './AboutUsRight';

function Homepage() {
    
    return(

        <div className=' w-full flex-col absolute top-0 left-0 bg-slate-200 '  >
            <Navbar />
            <div className='mt-20'>
                <AboutUsLeft 
                    source='HomepageImage.jpeg' 
                    title='Hello, and welcome to Yarrow Travels!'
                    textOne='We are Ben and Rachel Yarrow, a married couple based in the South East of England. We met in the summer of 2019 in Vassiliki, Greece where Rachel was working as a windsurfing instructor and Ben was visiting some friends on a windsurfing holiday.'
                    textTwo='Since then we have done our best to visit as many windsurfing destinations as possible, while filling in the gaps with trips such as snowboarding in Canada, road trips round Scotland and city breaks to the Prague.'
                />
                <AboutUsRight 
                    source='canada.jpeg'
                    title='What have we done?'
                    textOne='In the last 4 years we have visited many truly incredible places, including a helicopter ride over the underwater waterfall in Mauritius, dog sledding on a frozen lake in the Canadian Rockies and windsurfing in the Red Sea. if you would like to see more, check out our destination guide to see what we have done and how you could do it yourself!'
                    textTwo='While we explore these amazing places, we document our adventures in the style of photography and short form video. We have a range of high end equipment including professional cameras, drones, gimbals and a go pro. '
                />
            </div>
            <div className=' w-full left-0 bottom-0'>
                <Footer />
            </div>

        </div>
    
    )
};

export default Homepage;

