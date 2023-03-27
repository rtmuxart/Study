
import './App.css';
import logo from './picture/logo.jpg';
import './css/logo.css';
import Navbar from './componentes/navbar';
import Redes from './componentes/redes';

function App() {
  return (
    <div className="App">
      
      <div className='logo'>
      <img src={logo} className="logo" alt="logo" />
      </div>
      <div className='redesociales'>
       <Redes/>
      </div>
      <Navbar/>
    </div>
  );
}

export default App;
