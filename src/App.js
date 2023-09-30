import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './Homepage';
import ContactUs from './NavBar-Pages/ContactUs';
import Navbar from './NavBar-Pages/Navbar';
  import Travel from './NavBar-Pages/Travel';
  import AboutUs from './NavBar-Pages/AboutUs';
import Footer from './Footer';

import Mauritius from './Countries/Mauritius';
  import WindsurfingInMauritius from './MauritiusComponents/WindsurfingInMauritius';
  import StayingAtLux from './MauritiusComponents/StayingAtLux';
  import ThingsToDoInMauritius from './MauritiusComponents/ThingsToDoInMauritius';

import SouthAfrica from './Countries/SouthAfrica';
import Egypt from './Countries/Egypt';
  import WindsurfingInEgypt from './EgyptComponents/WindsurfingInEgypt';
import Canada from './Countries/Canada';
import Greece from './Countries/Greece';
import England from './Countries/England';
import Wales from './Countries/Wales';
import Iceland from './Countries/Iceland';
import CzechRepublic from './Countries/CzechRepublic';

function App() {

  return (
      <div className='text-blue bg-white text-lg '>
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
          <Footer />  
        </Router>
      </div>
  );
}

export default App;
