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
  ],
  openWeatherMap: {
    key: '892146bf65e94e39baf9ed6b81ad82a5',
    urlBase: "https://api.openweathermap.org/data/2.5/weather?q=",
    urlPreKey: '&appid=',
    urlAfterKey: '&units=metric'
  },
  mapBox: {
    username: 'seaboundsouls',
    styleId: {
      destinationsPage: 'clua2dy0h011b01mj53obfe94'
    },
    key: 'pk.eyJ1Ijoic2VhYm91bmRzb3VscyIsImEiOiJjbHU4ejViY20wNDdzMnNxeDNvbzlnczVxIn0.bP8QBA3kTF3bMwQmEF2cyg'
  },
  emailJs: {
    serviceId: 'service_yzgwrlt',
    templateId: 'template_n2judga',
    publicKey: 'IQepkdoYDompauO4V',
  }
}
  
const navListItems = [
  {
    title: "Home",
    to: "/",
  },
  {
    title: "About Us",
    to: "/about-us"
  },
  {
    title: "Destinations",
    to: "/destinations",
  },
  {
    title: "Contact",
    to: "/contact-us",
  },
];

export {
  navListItems,
  metaData,
  siteData
}