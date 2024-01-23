import { React } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ScrollToTop from './components/ScrollToTop';
import Homepage from './nav-bar-pages/Homepage';
import Navbar from './nav-bar-pages/Navbar';
  import AboutUs from './nav-bar-pages/AboutUs';
  import Destinations from './nav-bar-pages/Destinations';
    import TestingSpotGuide from './spot-guide-pages/TestingSpotGuide';
    import DahabSpotGuide from './spot-guide-pages/DahabSpotGuide';
    import LeMorneSpotGuide from './spot-guide-pages/LeMorneSpotGuide';
    import VassilikiSpotGuide from './spot-guide-pages/VassilikiSpotGuide';
    import RiscoDelPasoSpotGuide from './spot-guide-pages/RiscoDelPasoSpotGuide';
    import LangebaanSpotGuide from './spot-guide-pages/LangebaanSpotGuide';
  import ContactUs from './nav-bar-pages/ContactUs';  
import Footer from './Footer';

function App() {
  return (
      <div className='text-blue bg-white text-lg '>
        <Router>
          <ScrollToTop />
            
            <Navbar /> 
          <Routes>
            {/* Nav Components */}
              <Route index element={<Homepage />}/>
              <Route path='/Homepage' element={<Homepage />}/>
              <Route path='/Destinations' element={<Destinations />}/>
              <Route path='/AboutUs' element={<AboutUs />}/>
              <Route path='/ContactUs' element={<ContactUs />}/>
            
            {/* Spot Guides */}
              <Route path='/DahabSpotGuide' element={<DahabSpotGuide />} />
              <Route path='/LeMorneSpotGuide' element={<LeMorneSpotGuide />} />
              <Route path='/VassilikiSpotGuide' element={<VassilikiSpotGuide />} />
              <Route path='/RiscoDelPasoSpotGuide' element={<RiscoDelPasoSpotGuide />} />
              <Route path='/LangebaanSpotGuide' element={<LangebaanSpotGuide />} />
              <Route path='/TestingSpotGuide' element={<TestingSpotGuide />} />
            </Routes>
          <Footer />  
        </Router>
      </div>
  );
}

export default App;
