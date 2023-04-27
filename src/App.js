import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './Homepage';
import Portfolio from './Portfolio';
import ContactUs from './ContactUs';
import Gallery from './Gallery';
import Navbar from './Navbar';
import Footer from './Footer';


function App() {
  return (
    <div className='full-screen'>
    <div className='app'>
      <Router>
        <Navbar />
          <Routes>
            <Route path='/Navbar' element={<Navbar />}/>
            <Route index element={<Homepage />}/>
            <Route path='/Homepage' element={<Homepage />}/>
            <Route path='/Portfolio' element={<Portfolio />}/>
            <Route path='/ContactUs' element={<ContactUs />}/>
            <Route path='/Gallery' element={<Gallery />}/>
          </Routes>
        <Footer />  
      </Router>
    </div>
    </div>

  );
}

export default App;
