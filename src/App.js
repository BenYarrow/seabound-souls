import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './Homepage';
import ContactUs from './ContactUs';
import Navbar from './Navbar';
  import Travel from './DestComponents/Travel';
  import AboutUs from './AboutUs';
import Footer from './Footer';

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

function App() {

  return (
      <Router>
          <Navbar /> 
        <Routes>
          {/* Nav Components */}
            <Route index element={<Homepage />}/>
            <Route path='/Homepage' element={<Homepage />}/>
            <Route path='/Travel' element={<Travel />}/>
            <Route path='/AboutUs' element={<AboutUs />}/>
            <Route path='/ContactUs' element={<ContactUs />}/>
          {/* DestinationComponents */}
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
        {/* <Instagram /> */}
        <Footer />  
      </Router>
  );
}

export default App;
