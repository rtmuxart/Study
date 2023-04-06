
import './App.css';
import logo from './picture/logo.jpg';
import './css/logo.css';
import Navbar from './componentes/navbar';
import Redes from './componentes/redes';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './componentes/Home';
import Services from './componentes/Servicios';
import About from './componentes/About';
import Contact from './componentes/Contact';
import Gallery from './componentes/gallery';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './componentes/footer';



function App() {
  return (
    
    <div className="App">
      
      {/* este div es el que contine el logo */}
      
        <div className='logo'>
        <a href="/">
          <img src={logo} className="logo" alt="logo" />
        </a>
        </div>
        <div>
        
        </div>
   
      {/* este div es el que contine los vinculos e imagenes de las redes */}
      <div className='redesociales'>
       <Redes/>
       </div>
      
      {/* este div es el que contine el Navbar */}
      <Router>
      <Navbar/>
      <Routes>
        <Route path='/'   element={<Home/>}/>
        <Route path='/Home'   element={<Home/>}/>
        <Route path='/Services'  element={<Services/>}/>
        <Route path='/About'  element={<About/>}/>
        <Route path='/Contact'  element={<Contact/>}/>
        <Route path='/gallery'  element={<Gallery/>}/>
      </Routes>
      </Router>

       <Footer/>

    </div>
  );
}

export default App;
