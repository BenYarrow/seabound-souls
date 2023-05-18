import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './Homepage';
import OurWork from './OurWork';
import ContactUs from './ContactUs';
import Navbar from './Navbar';
import Footer from './Footer';
import Mauritius from './Mauritius';
import Egypt from './Egypt';
import Canada from './Canada';
import Greece from './Greece';
import Uk from './Uk'
import MobileNav from './MobileNav';
import MobileDestinations from './MobileDestinations';

function App() {



  return (
    <div className='bg-standard'>
      <Router>
          <Navbar />
        <Routes>
            <Route index element={<Homepage />}/>
            <Route path='/Homepage' element={<Homepage />}/>
            <Route path='/OurWork' element={<OurWork />}/>
            <Route path='/ContactUs' element={<ContactUs />}/>
            <Route path='/Mauritius' element={<Mauritius />}/>
            <Route path='/Egypt' element={<Egypt />}/>
            <Route path='/Canada' element={<Canada />}/>
            <Route path='/Uk' element={<Uk />}/>
            <Route path='/Greece' element={<Greece />}/>
            <Route path='/MobileNav' element={<MobileNav />}/>
            <Route path='/MobileDestinations' element={<MobileDestinations />} />
          </Routes>
        <Footer />  
      </Router>
    </div>
  );
}

export default App;
