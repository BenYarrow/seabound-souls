import React from "react";
import { spotGuideLinks } from "../Data/spot-guide-links";
import { blogLinks } from "../Data/blog-links";
import SwiperHeroSlider from "../components/SwiperHeroSlider";
import SiteHelmet from "../components/SiteHelmet";
import ListBlogs from "../components/ListBlogs";
import SplitImageText from "../components/SplitImageText";

function Homepage() {

  const heroImages = [
    {
      sm: "/images/mastheads/homepage/windsurfing-together-01-mobile.jpg",
      md: "/images/mastheads/homepage/windsurfing-together-01-tablet.jpg",
      lg: "/images/mastheads/homepage/windsurfing-together-01-desktop.jpg",
    },
    {
      sm: "/images/mastheads/homepage/ben-vulcan-fuerteventura-mobile.jpg",
      md: "/images/mastheads/homepage/ben-vulcan-fuerteventura-tablet.jpg",
      lg: "/images/mastheads/homepage/ben-vulcan-fuerteventura-desktop.jpg",
    },
  ];

  const introImage = {
    src: '/images/mastheads/about-us/fuerteventura-beach-tablet.jpg',
    alt: 'Ben and Rachel on the beach in fuerteventura'
  }

  const featuredSpotGuideLinks = spotGuideLinks
    .map((blog) => {
      return blog;
    })
    .filter((featured) => featured.featured === true);

  featuredSpotGuideLinks.sort((a, b) => {
    if (a.featuredOrder < b.featuredOrder) {
      return -1;
    } else if (a.featuredOrder > b.featuredOrder) {
      return 1;
    } else {
      return 0;
    }
  });

  const featuredBlogs = blogLinks
    .map((blog) => {
      return blog;
    })
    .filter((featured) => featured.featured === true);

  featuredBlogs.sort((a, b) => {
    if (a.featuredOrder < b.featuredOrder) {
      return -1;
    } else if (a.featuredOrder > b.featuredOrder) {
      return 1;
    } else {
      return 0;
    }
  });

  return (
    <div className="relative">
      <SiteHelmet preloadMastheadSrc={[heroImages[0].sm, heroImages[1].sm]} />

      <SwiperHeroSlider
        images={heroImages}
        title="Memories are made where the wind meets the waves"
      />

      <SplitImageText
        image={introImage}
        title="Get to know us"
        content={[
          "Hi! We are Rachel and Ben. We're two adventure seekers, travelling the world wherever the wind takes us.",
          "Follow our journey to discover the most incredible windsurfing destinations around the globe.",
          "This isn't just a travel blog; it's a unique blend of travel, adrenaline and first hand experiences. Whether you're an experienced windurfer seeking the next ultimate spot or a curious traveller ready to climb onto a windsurf board, our blog is here to inspire, inform and fuel your passion for this incredible water sport.",
          () => (
            <span className="gap-1 text-black">
              <a
                href="https://www.instagram.com/seabound.souls"
                target="_blank"
                rel="nofollow external noopener noreferrer"
                className="whitespace-nowrap pr-1.5"
              >
                Join us
              </a>
              as we chase the winds, discover new horizons and travel to
              the very best windsurf destinations.
            </span>
          ),
        ]}
      />

      <ListBlogs
        title="Destinations"
        subtitle="Ultimate spot guides, advice and travel tips for windsurfers to help you plan your next windsurf trip."
        invert
        featuredBlogs={featuredSpotGuideLinks}
        buttonLink="/destinations"
        buttonTitle="View More"
      />

      <ListBlogs
        title="Blogs"
        subtitle=""
        featuredBlogs={featuredBlogs}
        buttonLink="/blog"
        buttonTitle="View More"
      />
    </div>
  );
}

export default Homepage;
