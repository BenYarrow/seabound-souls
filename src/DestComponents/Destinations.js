import React from 'react'
import { Link } from 'react-router-dom'
import { continents } from '../Data/Continents'




let continentsList = continents.map(continent => {  
  continent.countries = continent.countries.filter(country => country.isEnabled === true)
  return continent
}).filter(continents => continents.countries.length > 0);



const CountryLink = ({imageSrc, imageAlt, linkTo}) => {

  return(
    <div className='shadow-2xl shadow-turquoise/60 rounded-lg'>   
        <Link to={linkTo}>
          <img src={imageSrc} alt={imageAlt} className='rounded-lg p-2 hover:bg-turquoise/60 duration-100 ease-out hover:ease-in' />
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
    </div>
  )
}

export default Destinations