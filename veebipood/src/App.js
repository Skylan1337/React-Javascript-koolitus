import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Avaleht from './pages/Avaleht';
import Ostukorv from './pages/Ostukorv';
import LisaToode from './pages/LisaToode';
import Seaded from './pages/Seaded';
import Meist from './pages/Meist';
import Poed from './pages/Poed';

function App() {
  return (
    <div className="App">
      <Link to="/">
        <img className="main-pilt" src="https://mollerauto.ee/media/wysiwyg/MicrosoftTeams-image_18__2.png" alt="" />
      </Link>
      <Link to="/ostukorv">
        <button className="nupp">Ostukorv</button>
      </Link>
      <Link to="/lisa-toode">
        <button className="nupp">Lisa toode</button>
      </Link>
      <Link to="/seaded">
        <button className="nupp">Seaded</button>
      </Link>
      <Link to="/meist">
        <button className="nupp">Meist</button>
      </Link>
      <Link to="/poed">
        <button className="nupp">Poed</button>
      </Link>

      <Routes>
        <Route path="" element={ <Avaleht /> } />
        <Route path="ostukorv" element={ <Ostukorv /> } />
        <Route path="lisa-toode" element={ <LisaToode /> } />
        <Route path="seaded" element={ <Seaded /> } />
        <Route path="meist" element={ <Meist /> } />
        <Route path="poed" element={ <Poed /> } />
      </Routes>
    </div>
  );
}

export default App;