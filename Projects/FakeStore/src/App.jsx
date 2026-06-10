import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ContactUs from './pages/ContactUs';

const App = () => {
  return (
    <>
      <BrowserRouter>
       <Header/>

       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Product" element={<Products />} />
          <Route path="/ContactUs" element={<ContactUs />} />

       </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App;
