import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './Homepage';
import ContactUs from './ContactUs';
import Navbar from './Navbar';
  import Destinations from './DestComponents/Destinations';
  import AboutUs from './AboutUs';
  import BlogPage from './BlogPage';
import Footer from './Footer';
import Instagram from './Instagram';

import Mauritius from './DestComponents/Mauritius';
  import WindsurfingInMauritius from './MauritiusComponents/WindsurfingInMauritius';
  import StayingAtLux from './MauritiusComponents/StayingAtLux';
  import ThingsToDoInMauritius from './MauritiusComponents/ThingsToDoInMauritius';

import SouthAfrica from './DestComponents/SouthAfrica';
import Egypt from './DestComponents/Egypt';
  import WindsurfingInEgypt from './EgyptComponents/WindsurfingInEgypt';
import Canada from './DestComponents/Canada';
import Greece from './DestComponents/Greece';
import England from './DestComponents/England';
import Wales from './DestComponents/Wales';
import Iceland from './DestComponents/Iceland';
import CzechRepublic from './DestComponents/CzechRepublic';


import Africa from './DestComponents/ContinentPages/Africa';
import Europe from './DestComponents/ContinentPages/Europe';
import NorthAmerica from './DestComponents/ContinentPages/NorthAmerica';


function App() {



  return (
    <div className='bg-standard'>
      <Router>
          <Navbar />
        <Routes>
          {/* Nav Components */}
            <Route index element={<Homepage />}/>
            <Route path='/Homepage' element={<Homepage />}/>
            <Route path='/Destinations' element={<Destinations />}/>
            <Route path="/BlogPage" element={<BlogPage />} /> 
            <Route path='/AboutUs' element={<AboutUs />}/>
            <Route path='/ContactUs' element={<ContactUs />}/>
          {/* DestinationComponents */}
            {/* Continent Pages */}
            <Route path='/Africa' element={<Africa />}/>
            <Route path='/Europe' element={<Europe />}/>
            <Route path='/NorthAmerica' element={<NorthAmerica />}/>

            <Route path='/Mauritius' element={<Mauritius />}/>
              <Route path='/WindsurfingInMauritius' element={<WindsurfingInMauritius />}/>
              <Route path='/StayingAtLux' element={<StayingAtLux />}/>
              <Route path='/ThingsToDoInMauritius' element={<ThingsToDoInMauritius />}/>
            <Route path='/SouthAfrica' element={<SouthAfrica />}/>
            <Route path='/Egypt' element={<Egypt />}/>
              <Route path='/WindsurfingInEgypt' element={<WindsurfingInEgypt />}/>
            <Route path='/Canada' element={<Canada />}/>
            <Route path='/England' element={<England />}/>
            <Route path='/Wales' element={<Wales />}/>
            <Route path='/Iceland' element={<Iceland />}/>
            <Route path='/CzechRepublic' element={<CzechRepublic />}/>
            <Route path='/Greece' element={<Greece />}/>

          </Routes>
        <Instagram />
        <Footer />  
      </Router>
    </div>
  );
}

export default App;
