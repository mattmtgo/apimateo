import { Routes, Route } from "react-router-dom";
import Menu from "./componentes/Menu";
import Lista from "./componentes/Lista";
import Aleatorios from "./componentes/Aleatorios";
import Capturados from "./componentes/Capturados";
import Favoritos from "./componentes/Favoritos";
import Historial from "./componentes/Historial";
import Usuario from "./componentes/Usuario";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Lista />} />
        <Route path="/aleatorios" element={<Aleatorios />} />
        <Route path="/capturados" element={<Capturados />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/historial" element={<Historial />} />
        <Route path="/usuarios" element={<Usuario />} />
      </Routes>
      <Menu />
    </>
  );
}

export default App;