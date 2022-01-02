import {BrowserRouter,Routes,Route} from "react-router-dom";

import { Home } from "./Components/Home"
import {Header} from "./Components/Header"
import Footer from "./Components/Footer";
import './App.css'
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="*" element='404 not found' />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
