import React from "react";
import SwiperHeroSlider from "../Common-Components/SwiperHeroSlider";

const AboutUs = () => {

  const heroImageOne = "Background-Images/hero-background.jpg";
  const heroImageTwo = "/Homepage-images/fuerteventura-beach-01.jpg";

  const heroImages = [
    {
      image: heroImageOne,
      bgImageClasses: 'bg-cover bg-center'
    },
    {
      image: heroImageTwo,
      bgImageClasses: 'bg-cover bg-center',
    },
  ]

  const images = [
    {
      image: heroImageOne,
      imageClasses: 'block'
    },
    {
      image: heroImageOne,
      imageClasses: 'hidden md:block'
    },
    {
      image: heroImageOne,
      imageClasses: 'hidden lg:block'
    },
  ]
  return (
  <div>

    <SwiperHeroSlider images={heroImages}/>
    
    <section className="py-20 container mx-auto">
      <div className="flex flex-col items-center space-y-8 text-blue  text-xl">
        <p className="text-center">
          We are Rachel and Ben
        </p>

        <p className="text-center">
          Two adventure seekers from the UK, pursuing our passion for windsurfing and travelling wherever the wind takes us.
        </p>

        <p className="text-center">
          Follow our hourney as we discover the most incredible windsurfing destinations around the world.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
        {images.map((image, index) => {
          
          return (
            <img src={image.image} alt="" className={`${image.imageClasses}`} key={index}/>
          )
        })}

      </div>

    </section>
  </div>
  );
};

export default AboutUs;
