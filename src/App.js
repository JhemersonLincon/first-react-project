import {BrowserRouter,Routes,Route} from "react-router-dom";

import { Home } from "./Components/Home"
import {Header} from "./Components/Header"
import Footer from "./Components/Footer";

import Image from "./Components/Pages/Images"
import Acess from "./Components/Pages/Login/Acess";
import './App.css'
function App() {
  return (
    <BrowserRouter basename="/first-react-project">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="*" element='404 not found' />
        <Route path="/images" element={<Image />} />
        <Route path="/acess/*" element={<Acess />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
