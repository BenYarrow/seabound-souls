import React from 'react'
import {Link} from 'react-router-dom'


const africaDestinations = [
  {
    imageSrc: '/Destinations-Images/Egypt.jpg',
    imageAlt: 'Egypt',
    linkTo: '/Egypt',
    availabilityStatus: true,
  },
  {
    imageSrc: '/Destinations-Images/Mauritius.jpg',
    imageAlt: 'Mauritius',
    linkTo: '/Mauritius',
    availabilityStatus: true,
  },
  {
    imageSrc: '/Destinations-Images/South-Africa.jpg',
    imageAlt: 'South Africa',
    linkTo: '/SouthAfrica',
    availabilityStatus: false,
  },
]

const europeDestinations = [
  {
    imageSrc: '/Destinations-Images/England.jpg',
    imageAlt: 'England',
    linkTo: '/England',
    availabilityStatus: true,
  },
  {
    imageSrc: '/Destinations-Images/Czech-Republic.jpg',
    imageAlt: 'Czech Republic',
    linkTo: '/CzechRepublic',
    availabilityStatus: true,
  },
  {
    imageSrc: '/Destinations-Images/Iceland.jpg',
    imageAlt: 'Iceland',
    linkTo: '/Iceland',
    availabilityStatus: true,
  },
  {
    imageSrc: '/Destinations-Images/Wales.jpg',
    imageAlt: 'Wales',
    linkTo: '/Wales',
    availabilityStatus: true,
  },
]

const northAmericaDestinations = [
  {
    imageSrc: '',
    imageAlt: '',
    linkTo: '',
    availabilityStatus: true,
  },
]



const DestinationCard = ({imageSrc, imageAlt, linkTo, availabilityStatus = false}) => {

  return(
    <div>
        <Link to={linkTo}>
          <img src={imageSrc} alt={imageAlt} className={availabilityStatus === true ? 'rounded-xl p-1 hover:bg-turquoise' : 'hidden'}/>
        </Link> 
    </div>
  )
}


const DestinationList = (props) => {
  return(
    <div>
      <div className='w-full h-auto  pb-20'>
        <div className='flex justify-center items-center md:justify-start py-8'>
          <h2 className='text-xl'>{props.title}</h2>
        </div>
        <div className='grid grid-rows-1 md:grid-cols-3 gap-8 '>
          {/*  */}
          {props.location.map(card => <DestinationCard {...card}/>)}
        </div>
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
      <div className='border-b-2 border-turquoise'>
        <DestinationList
          location={africaDestinations}
          title='Africa'
        />
      </div>
      <div className='border-b-2 border-turquoise'>
        <DestinationList 
          location={europeDestinations}
          title='Europe'
        />
      </div>
      <div className='border-b-2 border-turquoise'>
        <DestinationList 
          location={northAmericaDestinations}
          title='North America'
        />
      </div>
    </div>
  )
}

export default Destinations