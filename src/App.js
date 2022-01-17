import './App.css';
import Menu from "./components/Menu/menu";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/home";
import Personajes from "./components/Personajes/personajes";
import Citas from "./components/Citas/citas";
import Episodios from "./components/Episodios/episodios";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu/>
      </header>
      {/* el contenido que va a cambiar va a ser este: */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personajes" element={<Personajes />} />
          <Route path="/citas" element={<Citas />} />
          <Route path="/episodios" element={<Episodios />} />
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
