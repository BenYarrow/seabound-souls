import React, {useState} from 'react';
import Dropdown from './DestinationDropdown';
import Footer from './Footer';
import NavItem from './NavItem';





function Homepage() {
    
    const homepageImage = '/HomepageImage.jpeg';
        

    const mauritiusImage = '/underwater-waterfall.jpeg';
    const canadaImage = '/canada.jpeg'

    const [backImage, setBackImage] = useState(homepageImage);

    const handleHomeImage = () => {
        setBackImage(homepageImage);
    };

    const handleMauritiusImage = () => {
        setBackImage(mauritiusImage);
    };

    const handleCanadaImage = () => {
        setBackImage(canadaImage);
    };


    return(

        <div className='h-screen w-screen flex-col absolute top-0' >
            <div className='absolute top-0 left-0 w-full h-28 '>
                <div className='flex justify-center'>
                    <p className='text-xxl font-light translate-x-2/4 '>
                        Y
                    </p>
                    <p className='text-xxl font-light -translate-x-2/4'>
                        T
                    </p>
                    <div className='absolute h-full w-full flex items-end justify-center'>
                        <p className='font-light text-base  border-x-2 border-slate-800 px-5'>
                             Y a r r o w T r a v e l s 
                        </p>
                    </div>
            </div>
        </div>
        <div className='flex justify-center z-10 pt-5 mx-48'>
            <nav className='w-full mt-28 border-y-2 border-slate-800 py-5'>
                <ul className='w-full h-full px-5 flex justify-between content-center'>
                    <NavItem title='Our Story' to='/OurStory.js'/>
                    <Dropdown>
                        {(isHovered) => (
                        <>
                            <NavItem title='Destinations' onMouseEnter={''}/>
                                <ul className='absolute z-10 bg-white px-4 pb-4'>
                                    {isHovered && <li className='hover:underline hover:cursor-pointer text-slate-600 text-xl font-light bg-white'>
                                        <a href='src/Mauritius.js' onMouseEnter={handleMauritiusImage} onMouseLeave={handleHomeImage} >
                                            Mauritius
                                        </a>
                                    </li>}
                                    {isHovered && <li className='hover:underline hover:cursor-pointer text-slate-600 text-xl font-light bg-white'>
                                        <a href='./Canada.js' onMouseEnter={handleCanadaImage} onMouseLeave={handleHomeImage}>
                                            Canada
                                        </a>
                                    </li>}
                                    {isHovered && <li className='hover:underline hover:cursor-pointer text-slate-600 text-xl font-light bg-white'>
                                        <a href='./Greece.js' onMouseLeave={handleHomeImage}>
                                            Greece
                                        </a>
                                    </li>}
                                    {isHovered && <li className='hover:underline hover:cursor-pointer text-slate-600 text-xl font-light bg-white'>
                                        <a href='./Uk.js' onMouseLeave={handleHomeImage}>
                                            UK
                                        </a>
                                    </li>}
                                </ul>
                        </>
                        )}
                    </Dropdown>
                    <NavItem title='Gallery' to='Gallery.js'/>
                    <NavItem title='Portfolio' to='Portfolio.js'/>
                    
                </ul>
            </nav>        

        </div>
        <div className='my-5 h-3/5 flex overflow-hidden'>
            <div className='w-full flex justify-center self-center'>
                <img src={backImage}  width={'50%'}  className='p-5 border-x-2 border-slate-800'/>
            </div> 
        </div>
        <div className='absolute w-full left-0 bottom-0'>
          {<Footer />}
        </div>

    </div>
    
    )
};

export default Homepage;

