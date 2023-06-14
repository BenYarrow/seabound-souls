import React from 'react'
import { Link } from 'react-router-dom'
import { continents } from '../Data/Continents'
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

let continentsList = continents.map(continent => {  
  continent.countries = JSON.parse(JSON.stringify(continent.countries.filter(country => country.isEnabled === true)))
  return continent
}).filter(continents => continents.countries.length > 0);


// let comingSoon = JSON.parse(JSON.stringify(continents)).map(continent => {  
//   continent.countries = JSON.parse(JSON.stringify(continent.countries.filter(country => country.isEnabled === false)))
//   return continent.countries
// })



const CountryLink = ({location, area, imageSrc, linkTo}) => {

  return(
    <div className='shadow-2xl shadow-turquoise/60 rounded-lg group font-standard'>   
        <Link to={linkTo} >
          <div className='aspect-square rounded-lg' style={{
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          }}>
            <div className='w-full h-full group-hover:bg-standard/60 duration-200 ease-in-out rounded-lg flex flex-col justify-center items-center'>
              <h1 className='text-xxxl w-5/6 h-5/6 xl:w-auto xl:h-auto xl:px-4 flex justify-center items-center text-standard bg-standard/40 rounded-lg text-center  group-hover:text-turquoise group-hover:bg-standard/0 duration-200 ease-in-out '>{location}</h1>
              <div className='hidden xl:flex h-auto mx-8 p-4 justify-around items-center group-hover:bg-standard/80 group-hover:translate-y-8 duration-700 rounded-lg'>
                <p className='w-4/6 text-base text-turquoise/0 group-hover:text-turquoise/100 '>While visiting {location} we stayed in {area}. Check out what we did! </p>
                <FontAwesomeIcon icon={faArrowAltCircleRight} className='text-xl text-turquoise/0 group-hover:text-turquoise/100'/>
              </div>
            </div>    
            {/* <img src={imageSrc} alt={imageAlt} className='rounded-lg p-2  ' /> */}
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