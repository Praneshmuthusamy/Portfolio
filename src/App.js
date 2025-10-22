import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Homee.js';
function App() {
  return (
    <div className="app-container">


      <BrowserRouter>
            <Navbar/>


      <Routes>
              <Route path='/' element={<Home/>}/>
      </Routes>
            <Footer/>


      </BrowserRouter>
   </div>
  );
}


export default App;
