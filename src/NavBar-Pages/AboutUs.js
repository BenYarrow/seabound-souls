import React, {useState} from "react";
import SwiperHeroSlider from "../Common-Components/SwiperHeroSlider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import AnimateHeight from "react-animate-height";

import Image from "../Common-Components/Image";

const AboutUs = () => {

  const paddleboardingVass = "Masthead-Images/paddleboarding-vass.jpg";
  const leMorneOne = "Masthead-Images/le-morne-01.jpg";
  const weddingOne = "Masthead-Images/wedding-01.jpg"
  const dahabSwissFour = "/Egypt-Images/Dahab-Swiss-Inn-4.jpg"
  const fuerteventuraWindsurfing = "Masthead-Images/ben-vulcan-fuerteventura.jpg"

  const heroImages = [
    {
      image: paddleboardingVass,
      bgImageClasses: 'bg-cover bg-center'
    },
    {
      image: leMorneOne,
      bgImageClasses: 'bg-cover bg-center'
    },
  ]

  const images = [
    {
      image: weddingOne,
      customClasses: ''
    },
    {
      image: leMorneOne,
      customClasses: 'hidden md:block'
    },
    {
      image: dahabSwissFour,
      customClasses: 'hidden md:block'
    }
  ]

  const accordianData = [
    {
        question: 'happiness',
        answer: 'answer one'
    },
    {
        question: 'sense of freedom',
        answer: 'answer two'
    },
    {
        question: 'mindfullness',
        answer: 'answer three'
    },
    {
        question: 'connection with nature',
        answer: 'answer four'
    },
    {
      question: 'challenge and achievement',
      answer: 'answer five'
  },
]

const [activeIndex, setActiveIndex] = useState(-1)

  return (
  <div>

    <SwiperHeroSlider images={heroImages} heading='get to know us'/>
    
    <section className="py-20 container mx-auto" id="content">

      <div className="flex flex-col space-y-8 items-center">
        <div className="flex flex-col space-y-8 items-center">
          <p>
            We are rachel and ben            
          </p>
          <p>
            Two adventure seekers from the UK, pursuing our passion for windsurfing and travelling wherever the wind takes us.
          </p>
          <p>
            <a href="https://www.instagram.com/seabound.souls/" className="font-bold underline" target="_blank" rel="noreferrer">Follow our journey</a> as we discover the most incredible windsurfing destinations around the world. 
          </p>
        </div>

        <div className="flex flex-col gap-8 md:flex md:flex-row md:justify-center xl:gap-12">
          {images.slice(0,3).map((image, index) => {
            return (
                <Image 
                  image={image.image} 
                  customClasses={image.customClasses}
                  key={index}
                />
            )
          })}

        </div>  
      </div>
    </section>

    <section className="bg-blue text-white py-20">
      <div className="container mx-auto flex flex-col justify-center space-y-8">
        <h3 className="font-title text-4xl uppercase text-center">
          Our story
        </h3>
        <p className="text-center">
          Our paths first crossed in the summer of 2019. Rachel was working as a watersports instructor in Vasiliki, Greece, while Ben was indulging his passion for windsurfing at the same resort. 
        </p>
        <p className="text-center">
          We remained in touch after the summer, but as we lived 200 miles apart neither of us envisaged a future relationship. As the pandemic hit in 2020, we decided to spend our time in lockdown together. Despite the challenges, the shared experience brought us closer together and within a matter of weeks, it became evident that our connection was something special.
        </p>
        <p className="text-center">
          As the world gradually reopened, we made some significant life changes. Ben sold his house and moved across the country, where we established a home together. As the travel restriction eased, we were eager to return to the place where we first met. It was during this trip that Ben proposed and Rachel happily accepted.
        </p>
        <p className="text-center">
          When it came to planning our wedding, we knew we wanted an intimate, beach ceremony just the two of us. After researching various destinations, we settled on Le Morne in Mauritius — a place known for its warm winds and beautiful beaches. Fast forward to September 2022, and our dream wedding became a reality.
        </p>
        <p className="text-center">
          Now, with our shared passion for travel, we are eager to explore more of the incredible world we call home.
        </p>
      </div>
    </section>

    <section className="bg-white text-blue py-20">
      <div className="container mx-auto">
        <h3 className="font-title text-4xl uppercase text-center pb-12">
          Why we love windsurfing
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-20">
          <div className="flex flex-col space-y-8">
            {accordianData.map((data, index) => {
              
              const handleClick = () => {
                activeIndex !== index ? setActiveIndex(index) : setActiveIndex(-1)
              }
              
              return (
                <div className='flex flex-col space-y-2' key={index}>
                  <button onClick={handleClick} className='w-full flex justify-between items-center'>
                      <h3 className='uppercase'>
                          {data.question}
                      </h3>
                      <div class="flex items-center">
                        <p className="hidden lg:block lg:pr-2 uppercase">{activeIndex !== index ? 'Open' : 'Close'}</p>
                        <FontAwesomeIcon icon={activeIndex !== index ? faPlus : faMinus} />
                      </div>
                  </button>
                  
                  <AnimateHeight 
                    duration={300}
                    height={activeIndex === index ? 'auto' : 0}
                  >
                      <p>
                        {data.answer}
                      </p>
                  </AnimateHeight>
                  
                </div>
              )
            })}
          </div>
          
          <div className="w-full h-96 md:h-full bg-center bg-cover shadow-2xl" style={{
            backgroundImage: `url(${fuerteventuraWindsurfing})`,
            backgroundRepeat: "no-repeat",
            }}>

          </div>

        </div>
      </div>
    </section>

  </div>
  );
};

export default AboutUs;
