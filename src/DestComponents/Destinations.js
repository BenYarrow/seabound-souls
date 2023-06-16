import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { continents } from '../Data/Continents'
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Css/Destinations.css'


let continentsList = continents.map(continent => {  
  continent.countries = JSON.parse(JSON.stringify(continent.countries.filter(country => country.isEnabled === true)))
  return continent
}).filter(continents => continents.countries.length > 0);


let comingSoon = JSON.parse(JSON.stringify(continents)).map(continent => {  
  continent.countries = JSON.parse(JSON.stringify(continent.countries.filter(country => country.isEnabled === false)))
  return continent
})

console.log(comingSoon.countries)



const CountryLink = ({location, area, imageSrc, linkTo}) => {

  const [isHovered, setIsHovered] = useState(false)

  const handleHoverTrue = () => {
    setIsHovered(true)
    console.log(isHovered)
}

  const handleHoverFalse = () => {
    setIsHovered(false)
  }

  return(
    <div className='shadow-2xl shadow-turquoise/60 rounded-lg group font-standard' onMouseEnter={handleHoverTrue} onMouseLeave={handleHoverFalse}>   
        <Link to={linkTo} >
          <div className='aspect-square rounded-lg' style={{
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          }}>
            <div className='w-full h-full group-hover:bg-standard/40 duration-700 ease-in-out rounded-lg flex flex-col justify-center items-center overflow-hidden'>
              <div className={isHovered === false ? 'w-full h-full flex justify-center items-center xl:translate-y-8 transition duration-700' : 'w-full h-full flex justify-center items-center transition duration-700'}>
                <h1 id='location' className='xl:text-xxxl  text-xxl text-standard  group-hover:text-turquoise  duration-700 ease-in-out group-hover:rounded-t-lg capitalize'>{location}</h1>
              </div>
              <div className={isHovered === false ? 'w-full h-1/4 xl:flex hidden justify-between items-center  bg-standard/0 xl:translate-y-16 transition duration-700' : 'w-full h-1/4 xl:flex hidden justify-between items-center  group-hover:bg-standard/80 duration-700 ease-in-out group-hover:rounded-b-lg '}>
                <p className={isHovered === false ? 'px-4 text-base text-standard/0' : 'px-4 text-base text-standard group-hover:text-turquoise/100 duration-700 ease-in-out '}>While in {location} we stayed in {area}. Check out what we did! </p>
                  <div className={isHovered === false ? 'w-2/6 h-full flex justify-center items-center ' : 'w-2/6 h-full flex justify-center items-center group-hover:bg-turquoise/100 group-hover:rounded-br-lg duration-700 ease-in-out'}>
                    <FontAwesomeIcon icon={faArrowAltCircleRight} className={isHovered === false ? 'text-icon text-standard/0' : 'text-icon group-hover:text-standard/100 duration-700 ease-in-out'}/>
                  </div>
              </div>
            </div>    
          </div>
        </Link> 
    </div>
  )
}

const Continents = (props) => {
  return(
      <div className='w-full h-auto pb-20' >
        <div className='flex justify-center items-center md:justify-start py-8'>
          <h2 className='text-xl'>{props.title}</h2>
        </div>
        <div className='grid grid-cols-2  lg:grid-cols-3 gap-8 '>
          {props.countries.map(country => <CountryLink {...country}/>)}
        </div>
      </div>
  )
}



const Destinations = () => {

  return (
    <div className='w-full h-auto pb-8 px-8 md:px-20 text-turquoise '>
      <div className='h-[8rem] flex justify-center items-center border-b-2 border-turquoise'>
        <h1 className='text-turquoise text-xxl'>Destinations</h1>
      </div> 
      <div>
       {continentsList.map(continent => {
        return(
          <div className='border-b-2 border-turquoise '>
            <Continents
              countries={continent.countries}
              title={continent.title}
            />
          </div>
        )})}  
      </div>
      <div>
      </div>
    </div>
  )
}

export default Destinations