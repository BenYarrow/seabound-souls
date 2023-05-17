import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './Homepage';
import OurWork from './OurWork';
import ContactUs from './ContactUs';
import Navbar from './Navbar';
import Footer from './Footer';
import Mauritius from './Mauritius';
import Egypt from './Egypt';
import MobileNav from './MobileNav';

function App() {
  return (
    <div className='bg-standard'>
      <Router>
        <div id='nav-bar'>
          <Navbar />
        </div>
          <Routes>
            <Route path='/Navbar' element={<Navbar />}/>
            <Route index element={<Homepage />}/>
            <Route path='/Homepage' element={<Homepage />}/>
            <Route path='/OurWork' element={<OurWork />}/>
            <Route path='/ContactUs' element={<ContactUs />}/>
            <Route path='/Mauritius' element={<Mauritius />}/>
            <Route path='/Egypt' element={<Egypt />}/>
            <Route path='/MobileNav' element={<MobileNav />}/>
          </Routes>
        <Footer />  
      </Router>
    </div>
  );
}

export default App;
