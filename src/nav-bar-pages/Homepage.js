import React from "react";
import { spotGuideLinks } from "../Data/spot-guide-links";
import SwiperHeroSlider from "../components/SwiperHeroSlider";
import SiteHelmet from "../components/SiteHelmet";
import BlockWrapper from "../components/BlockWrapper";
import Title from "../components/Title";
import Text from "../components/Text";
import ListBlogs from "../components/ListBlogs";

function Homepage() {

  const fuerteventuraBeach = "images/mastheads/about-us/fuerteventura-beach-mobile.jpg";

  const heroImages = [
      {
        sm: "/images/mastheads/homepage/windsurfing-together-01-mobile.jpg",
        md: '/images/mastheads/homepage/windsurfing-together-01-tablet.jpg',
        lg: "/images/mastheads/homepage/windsurfing-together-01-desktop.jpg",
      },
      {
        sm: "/images/mastheads/homepage/ben-vulcan-fuerteventura-mobile.jpg",
        md: '/images/mastheads/homepage/ben-vulcan-fuerteventura-tablet.jpg',
        lg: "/images/mastheads/homepage/ben-vulcan-fuerteventura-desktop.jpg",
      }
  ]

  const featuredSpotGuideLinks = spotGuideLinks
    .map((blog) => {
      return blog;
    })
    .filter((featured) => featured.featured === true);
  
  featuredSpotGuideLinks.sort((a, b) => {
    if (a.featuredOrder < b.featuredOrder) {
      return -1
    } else if (a.featuredOrder > b.featuredOrder) {
      return 1
    } else {
      return 0
    }
  })

  return (
    <div className="relative">

      <SiteHelmet/>
      
      <SwiperHeroSlider images={heroImages}/>

      <BlockWrapper firstBlock>

        <div id="content" className="grid grid-cols lg:grid-cols-2 xl:grid-cols-9 gap-8">
          
          <div className="xl:col-span-6">
            <Title
              title="Memories are made where the wind meets the waves"
              centreTitle
            />
            <Text
              title="Get to know us"
              content={[
                "Hi! We are Rachel and Ben. We're two adventure seekers, travelling the world wherever the wind takes us.",
                "Follow our journey to discover the most incredible windsurfing destinations around the globe.",
                "This isn't just a travel blog; it's a unique blend of travel, adrenaline and first hand experiences. Whether you're an experienced windurfer seeking the next ultimate spot or a curious traveller ready to climb onto a windsurf board, our blog is here to inspire, inform and fuel your passion for this incredible water sport.",
                () => (
                  <span className="gap-1 text-blue">
                    <a href="https://www.instagram.com/seabound.souls" target="_blank" rel="noreferrer noopener" className="whitespace-nowrap pr-1.5">
                      Join us
                    </a>
                     as we chase the winds, discover new horizons and travel to the very best windsurf destinations.
                  </span>
                )
              ]}
            />
          </div>

          <picture className="xl:col-span-3">
            <source media="(max-width: 640px)" srcSet='/images/mastheads/about-us/fuerteventura-beach-tablet.jpg' />
            <source media="(min-width: 641px) and (max-width: 1024px)" srcSet='/images/mastheads/about-us/fuerteventura-beach-mobile.jpg' />
            
                <img src='/images/mastheads/about-us/fuerteventura-beach-mobile.jpg'
                    alt='Ben and Rachel on a beach in Fuerteventura' 
                    className='w-full h-full object-left md:object-center object-cover '
                    loading='lazy'
                    crossOrigin="true"
                />
            </picture>
        </div>
      </BlockWrapper>

      <ListBlogs
        title="Destinations"
        subTitle="Ultimate spot guides, advice and travel tips for windsurfers to help you plan your next windsurf trip"
        invert
        featuredBlogs={featuredSpotGuideLinks}
        buttonLink="/destinations"
        buttonTitle="View More"
      />
      <ListBlogs
        title="Destinations"
        subTitle="Ultimate spot guides, advice and travel tips for windsurfers to help you plan your next windsurf trip"
        featuredBlogs={featuredSpotGuideLinks}
        buttonLink="/destinations"
        buttonTitle="View More"
      />

    </div>
  );
}

export default Homepage;
