import React from 'react';




const leMorneImages = [
  {
    imageSrc: 'Mauritius-Images/Mauritius-Lux-1.jpg',
    imageAlt: 'Mauritius, Lux Le Morne',
    imageLocation: 'Lux Le Morne, Mauritius',
    imageDescription: 'Every morning we were greeted to a view of the stunningg Le Morne mountain when we walked out of our hotel room',
  },
  {
    imageSrc: 'Mauritius-Images/Mauritius-Lux-2.jpg',
    imageAlt: 'Mauritius, Lux Le Morne',
    imageLocation: 'Lux Le Morne, Mauritius',
    imageDescription: 'What better way to unwind after a day of adventures than sipping on an ice cold drink in the pool as the sun sets.',
  },
  {
    imageSrc: 'Mauritius-Images/Mauritius-Lux-1.jpg',
    imageAlt: 'Mauritius, Lux Le Morne',
    imageLocation: 'Lux Le Morne, Mauritius',
    imageDescription: 'Every morning we were greeted to a view of the stunningg Le Morne mountain when we walked out of our hotel room',
  },
  {
    imageSrc: 'Mauritius-Images/Mauritius-Lux-2.jpg',
    imageAlt: 'Mauritius, Lux Le Morne',
    imageLocation: 'Lux Le Morne, Mauritius',
    imageDescription: 'What better way to unwind after a day of adventures than sipping on an ice cold drink in the pool as the sun sets.',
  },
]

const mauritiusActivityImages = [
  {
    imageSrc: 'Mauritius-Images/Mauritius-Lux-1.jpg',
    imageAlt: 'Mauritius, Lux Le Morne',
    imageLocation: 'Lux Le Morne, Mauritius',
    imageDescription: 'Every morning we were greeted to a view of the stunningg Le Morne mountain when we walked out of our hotel room',
  },
  {
    imageSrc: 'Mauritius-Images/Mauritius-Lux-2.jpg',
    imageAlt: 'Mauritius, Lux Le Morne',
    imageLocation: 'Lux Le Morne, Mauritius',
    imageDescription: 'What better way to unwind after a day of adventures than sipping on an ice cold drink in the pool as the sun sets.',
  },
]

const MauritiusCard = ({imageSrc, imageAlt, imageLocation, imageDescription}) => {

  return(
    <div className='text-base'>
      <div>
        <img src={imageSrc} alt={imageAlt} className='rounded-lg'/>
        <p className='text-center text-turquoise/80 py-2'>{imageLocation}</p>
      </div>
      <div className='w-full h-auto bg-standard'>
        <p className='text-turquoise p-2'>{imageDescription}</p>
      </div>
    </div>
  )
}

function Mauritius() {
  return (
    <div className='font-standard mb-8 '>
      <h1 className='lg:text-[6rem] text-xxl text-turquoise text-center pt-8'>Mauritius</h1>
      <p className='text-base text-turquoise/80 text-center pb-8'>September, 2022</p>
      <div className='bg-turquoise text-standard text-center text-base px-8 lg:px-20  py-8'>
          <p>Mauritius is a small island located just off the eastern coast of Africa. Mauritius is most well known for its crystal clear waters, white sandy beaches and luxury resorts. But there is so much more to mauritius than this. It truly is a place for adventure. With hiking up forested mountains and world class watersports such as windsurfing, kitesurfing and diving. There are also boat trips to bisit the smallest remote islands where you an sit back, and enjoy a bbq on the beach with a nice cold beverage. Mauritius offers perfect weather for any venture you wish to take part in, and you may see some wild monkeys along the way! Let's show you what we got up to!</p>
      </div>
      <div className='px-20'>
        <h2 className='lg:text-xxl text-xl text-turquoise text-center pt-8'>Where we stayed</h2>
        <p className='lg:text-base text-sm text-turquoise/80 text-center pb-8'>Lux, Le Morne</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16  mb-4 sm:mb-8'>
          {leMorneImages.map(work => <MauritiusCard {...work}/>)}
        </div>
      </div>
        <div className='bg-turquoise text-standard px-8 lg:px-20'>
          <p className=' text-base text-center px-8 py-4'>
            We stayed at the beautiful 
              <a 
                href='https://www.luxresorts.com/en/mauritius/hotel/luxlemorne' 
                target='_blank' 
                className='cursor-pointer underline italic px-2' 
                rel='noreferrer'
              >
                Lux, Le Morne. 
              </a>
            Normally we wouldnt book such a high end luxury resort but this trip was differen t. We didnt just travel to Mauritius for the scenery, experiences and the windsurfing. This is where we also got married. We decided to book this through the travel agents, 
              <a 
                href='https://www.kuoni.co.uk/' 
                target='_blank' 
                className='cursor-pointer underline italic px-2' 
                rel='noreferrer'
              >
                Kuoni.
              </a> 
            This is something we very rarely ever do, however with it being such an important trip to us we wanted to reduce the amount of stress where we could! 
          </p>
          <p className=' text-base text-center px-8 py-4'>
            We couldnt fault any aspect of this resort. Not only are you surrounded by some of the most beautiful scenes imaginable, but the staff do anything and everything they possibly can to ensure your stay is nothing less than perfect.
          </p>
        </div>
        <div className='px-20'>
        <h2 className='lg:text-xxl text-xl  text-turquoise text-center pt-8'>What did we do?</h2>
        <p className='lg:text-base text-sm text-turquoise/80 text-center pb-8'>2 weeks of adventures</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16  mb-4 sm:mb-8'>
          {mauritiusActivityImages.map(work => <MauritiusCard {...work}/>)}
        </div>
      </div>
    </div>
        
  )
}

export default Mauritius
