import { React } from 'react';
import { Analytics } from "@vercel/analytics/react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ScrollToTop from './components/ScrollToTop';
import Homepage from './nav-bar-pages/Homepage';
import Navbar from './nav-bar-pages/Navbar';
  import AboutUs from './nav-bar-pages/AboutUs';
  import Destinations from './nav-bar-pages/Destinations';
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
              <Route path='/' element={<Homepage />}/>
              <Route path='/about-us' element={<AboutUs />}/>
              <Route path='/contact-us' element={<ContactUs />}/>

              {/* Spot Guides */}
              <Route path='/destinations' element={<Destinations />}/>
                <Route path='/destinations/dahab-spot-guide' element={<DahabSpotGuide />} />
                <Route path='/destinations/le-morne-spot-guide' element={<LeMorneSpotGuide />} />
                <Route path='/destinations/vassiliki-spot-guide' element={<VassilikiSpotGuide />} />
                <Route path='/destinations/risco-del-paso-spot-guide' element={<RiscoDelPasoSpotGuide />} />
                <Route path='/destinations/langebaan-spot-guide' element={<LangebaanSpotGuide />} />
            </Routes>
          <Footer />  
        </Router>
        <Analytics />
      </div>
  );
}

export default App;
