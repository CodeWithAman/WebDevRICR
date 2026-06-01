import Header from "./components/Header";
// import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import Register from "./pages/Register";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Product" element={<Products />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
