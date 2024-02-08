import React from "react";
import { spotGuideLinks } from "../Data/spot-guide-links";
import SwiperHeroSlider from "../components/SwiperHeroSlider";
import SiteHelmet from "../components/SiteHelmet";
import BlockWrapper from "../components/BlockWrapper";
import Title from "../components/Title";
import Text from "../components/Text";
import ListBlogs from "../components/ListBlogs";
import SpotGuideLineChart from "../components/charts/SpotGuideLineChart";

function Homepage() {

  const fuerteventuraBeach = "images/mastheads/about-us/fuerteventura-beach-01.jpg";

  const heroImages = [
      "/images/mastheads/homepage/webp/windsurfing-together-01.webp",
      "/images/mastheads/homepage/webp/windsurfing-together-02.webp",
      "/images/mastheads/homepage/webp/ben-vulcan-fuerteventura.webp",
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

      <BlockWrapper>

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
                "This isn't just a travel blog; it's a gateway to a unique blend of adrenaline and exploration. Whether you're a seasoned windurfer seeking the next ultimate spot or a curious traveller ready to dive into the exhilarating world of windsurfing, our blog is here to inspire, inform and fuel your passion for this incredible water sport.",
                () => (
                  <span className="gap-1">
                    <a href="https://www.instagram.com/seabound.souls" target="_blank" rel="noreferrer" noopener className="whitespace-nowrap pr-1.5">
                      Join us
                    </a>
                     as we chase the winds, discover new horizons and travel to the very best windsurf destinations.
                  </span>
                )
              ]}
            />
          </div>

          <img src={fuerteventuraBeach}
              width="480"
              height="480"
              alt="Ben and rachel on a beach in Fuerteventura"
              className="w-full h-full object-left md:object-center object-cover xl:col-span-3"
          />
        </div>
      </BlockWrapper>

      <ListBlogs
        title="Destinations"
        subTitle="Ultimate spot guides, advice and travel tips for windsurfers to help you plan your next windsurf trip"
        invert
        featuredBlogs={featuredSpotGuideLinks}
        buttonLink="/destinations"
        buttonTitle="View More"
        buttonColourclassName="white-outline"
      />
      <ListBlogs
        title="Destinations"
        subTitle="Ultimate spot guides, advice and travel tips for windsurfers to help you plan your next windsurf trip"
        
        featuredBlogs={featuredSpotGuideLinks}
        buttonLink="/destinations"
        buttonTitle="View More"
      />

      <SpotGuideLineChart/>

    </div>
  );
}

export default Homepage;
