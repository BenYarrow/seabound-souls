import React from 'react'
import { Link } from 'react-router-dom'
import { continents } from '../Data/Continents'

let continentsList = continents.map(l => {  
  l.countries = l.countries.filter(d => d.isEnabled === true)
  return l
}).filter(l => l.countries.length > 0)


const CountryLink = ({imageSrc, imageAlt, linkTo}) => {

  return(
    <div> 
        <Link to={linkTo}>
          <img src={imageSrc} alt={imageAlt} className='rounded-xl p-1 hover:bg-turquoise' />
        </Link> 
    </div>
  )
}


const Continents = (props) => {
  return(
      <div className='w-full h-auto pb-20'>
        <div className='flex justify-center items-center md:justify-start py-8'>
          <h2 className='text-xl'>{props.title}</h2>
        </div>
        <div className='grid grid-rows-1 md:grid-cols-3 gap-8 '>
          {props.countries.map(country => <CountryLink {...country}/>)}
        </div>
      </div>
  )
}


const Destinations = () => {

  return (
    <div className='w-full h-auto pb-8 px-20 text-turquoise '>
      <div className='h-[8rem] flex justify-center items-center border-b-2 border-turquoise'>
        <h1 className='text-turquoise text-xxl'>Destinations</h1>
      </div> 
      {continentsList.map(continent => {
        return(
          <div className='border-b-2 border-turquoise'>
            <Continents
              countries={continent.countries}
              title={continent.title}
            />
          </div>
        )})}
    </div>
  )
}

export default Destinations