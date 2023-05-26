import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './Homepage';
import OurWork from './OurWork';
import ContactUs from './ContactUs';
import Navbar from './Navbar';
import Footer from './Footer';

import Mauritius from './DestComponents/Mauritius';
  import WindsurfingInMauritius from './MauritiusComponents/WindsurfingInMauritius';

import SouthAfrica from './DestComponents/SouthAfrica';
import Egypt from './DestComponents/Egypt';
import Canada from './DestComponents/Canada';
import Greece from './DestComponents/Greece';
import England from './DestComponents/England';
import Wales from './DestComponents/Wales';
import Iceland from './DestComponents/Iceland';
import CzechRepublic from './DestComponents/CzechRepublic';
import Destinations from './DestComponents/Destinations';


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
            <Route path='/OurWork' element={<OurWork />}/>
            <Route path='/ContactUs' element={<ContactUs />}/>
          {/* DestinationComponents */}
            <Route path='/Mauritius' element={<Mauritius />}/>
              <Route path='/WindsurfingInMauritius' element={<WindsurfingInMauritius />}/>
            <Route path='/SouthAfrica' element={<SouthAfrica />}/>
            <Route path='/Egypt' element={<Egypt />}/>
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
