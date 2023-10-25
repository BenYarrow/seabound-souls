import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './Homepage';
import Navbar from './NavBar-Pages/Navbar';
  import AboutUs from './NavBar-Pages/AboutUs';
  import Destinations from './NavBar-Pages/Destinations';
    import DahabSpotGuide from './Spot-guides/DahabSpotGuide';
    import LeMorneSpotGuide from './Spot-guides/LeMorneSpotGuide';
    import VassilikiSpotGuide from './Spot-guides/VassilikiSpotGuide';
    import RiscoDelPasoSpotGuide from './Spot-guides/RiscoDelPasoSpotGuide';
  import ContactUs from './NavBar-Pages/ContactUs';  
import Footer from './Footer';

function App() {

  return (
      <div className='text-blue bg-white text-lg '>
        <Router>
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


            </Routes>
          <Footer />  
        </Router>
      </div>
  );
}

export default App;
