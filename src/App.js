
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
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      {/* este div es el que contine el logo */}
      <div className='logo-container'>
        <div className='logo'>
        <img src={logo} className="logo" alt="logo" />
        </div>
      </div>
      {/* este div es el que contine los vinculos e imagenes de las redes */}
      <div className='redesociales'>
       <Redes/>
       </div>
      
      {/* este div es el que contine el Navbar */}
      <Router>
      <Navbar/>
      <Routes>
        <Route path='/Home'   element={<Home/>}/>
        <Route path='/Services'  element={<Services/>}/>
        <Route path='/About'  element={<About/>}/>
        <Route path='/Contact'  element={<Contact/>}/>
      </Routes>
      </Router>

       

    </div>
  );
}

export default App;
