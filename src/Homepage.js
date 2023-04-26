import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import AboutUsLeft from './AboutUsLeft';

function Homepage() {
    
    return(

        <div className='h-full w-full flex-col absolute top-0 left-0 bg-slate-200 '  >
            <Navbar />
            <AboutUsLeft 
                source='HomepageImage.jpeg' 
                    textOne='Hello, and welcome to Yarrow Travels! We are Ben and Rachel Yarrow, a married couple based in the South East of England. We met in the summer of 2019 in Vassiliki, Greece where Rachel was working as a windsurfing instructor and Ben was visiting some friends on a windsurfing holiday. Since then we have done our best to visit as many windsurfing destinations as possible, while filling in the gaps with trips such as snowboarding in Canada, road trips round Scotland and city breaks to the Prague.'
            />
            <div className='absolute w-full left-0 bottom-0'>
                <Footer />
            </div>

        </div>
    
    )
};

export default Homepage;

