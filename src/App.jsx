import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import HelpPage from "./pages/HelpPage";
import Footer from "./components/Footer";
import ContactPage from "./pages/ContactPage";




const App = () => {
  return (
    <Router>
      <Navbar />


      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/contact" element={<ContactPage/>}/>
      </Routes>
    
    <Footer/>
    </Router>
  )
}

export default App
