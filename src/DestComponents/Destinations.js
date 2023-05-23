import React from 'react'
import { Link } from 'react-router-dom'


let continents = [
  {
    title: 'Arica',
    countries: [
      {
        imageSrc: '/Destinations-Images/Egypt.jpg',
        imageAlt: 'Egypt',
        linkTo: '/Egypt',
        isEnabled: false,
      },
      {
        imageSrc: '/Destinations-Images/Mauritius.jpg',
        imageAlt: 'Mauritius',
        linkTo: '/Mauritius',
        isEnabled: true,
      },
      {
        imageSrc: '/Destinations-Images/South-Africa.jpg',
        imageAlt: 'South Africa',
        linkTo: '/SouthAfrica',
        isEnabled: false,
      },
    ],
  },
  {
    title: 'Europe',
    countries: [
      {
        imageSrc: '/Destinations-Images/Czech-Republic.jpg',
        imageAlt: 'Czech Republic',
        linkTo: '/CzechRepublic',
        isEnabled: true,
      },
      {
        imageSrc: '/Destinations-Images/England.jpg',
        imageAlt: 'England',
        linkTo: '/England',
        isEnabled: true,
      },
      {
        imageSrc: '/Destinations-Images/Greece.jpg',
        imageAlt: 'Greece',
        linkTo: '/Greece',
        isEnabled: true,
      },
      {
        imageSrc: '/Destinations-Images/Iceland.jpg',
        imageAlt: 'Iceland',
        linkTo: '/Iceland',
        isEnabled: true,
      },
      {
        imageSrc: '/Destinations-Images/Wales.jpg',
        imageAlt: 'Wales',
        linkTo: '/Wales',
        isEnabled: true,
      },
    ],
  },
  {
    title: 'North America',
    countries: [
      {
        imageSrc: '/Destinations-Images/Canada.jpg',
        imageAlt: 'Canada',
        linkTo: '/Canada',
        isEnabled: false,
      },
    ],
  },
].map(l => {  
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
      {continents.map(continent => {
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