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

        <div className='h-full w-full flex-col absolute top-0 left-0  bg-slate-200'  >
            <nav className='w-auto h-auto flex justify-between items-center border-b-2 border-slate-800 mx-8 pt-4'>
                <ul className='flex w-1/3 h-full justify-around content-end'>
                    <Dropdown>
                        {(isHovered) => (
                        <>
                            <NavItem title='Destinations' onMouseEnter={''}/>
                                <ul className='absolute z-10 px-4 pb-4'>
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
                </ul>
                    
                    <div className=''>
                        <div className='flex w-full justify-center'>
                            <p className='relative text-xxl font-light '>
                                Y
                            </p>
                            <p className='relative text-xxl font-light'>
                                T
                            </p>
                        </div>
                         <div className='pb-4'>
                            <p className='font-light text-base border-x-2 border-slate-800 px-5'>
                                Y a r r o w T r a v e l s 
                            </p>
                        </div>
                    </div>

                <ul className='flex w-1/3 justify-around'>
                    <NavItem title='Portfolio' to='Portfolio.js'/>
                    <NavItem title='Contact Us' to='ContactUs.js'/>
                    
                </ul>
            </nav>        

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

