import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";

const metaData = {
  siteName: 'Seabound Souls',
  siteMetaContent: 'Discover the best windsurfing destinations around the world. Explore our list of top locations for windsurfing. From the crystal-clear waters of the Mauritius wild meltemi winds. Plan your trip with our detailed guides and tips.',
  siteMetaKeyWords: 'windsurfing, travel, adventure, water sports, destinations, spot guides, windsurfing locations, windsurfing spot guides, best windsurfing locations, best windsurfing spots'
}

const siteData = {
  email: 'seabound.souls@outlook.com',
  telephone: '07309067164',
  logo: '/Logo/logo.png',
  socialMedia: [
    {
      icon: faInstagram,
      link: 'https://www.instagram.com/seabound.souls/',
    },
    {
      icon: faTiktok,
      link: 'https://www.tiktok.com/@seabound.souls?is_from_webapp=1&sender_device=pc',
    }
  ]
}
  
const navListItems = [
  {
    title: "Home",
    to: "/homepage",
  },
  {
    title: "About Us",
    to: "/aboutus"
  },
  {
    title: "Destinations",
    to: "/destinations",
  },
  {
    title: "Contact",
    to: "/contactus",
  },
];

export {
  navListItems,
  metaData,
  siteData
}