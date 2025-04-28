import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './componentes/Menu';
import Lista from './componentes/Lista';
import Capturados from './componentes/Capturados';
import Aleatorios from './componentes/Aleatorios';
import Usuario from './componentes/Usuario';
import Favoritos from './componentes/Favoritos';
import Historial from './componentes/Historial';
import Consejo from './componentes/Consejo';
import { useState } from 'react';

function App() {
  const [filtro, setFiltro] = useState('');

  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Lista filtro={filtro} />} />
        <Route path="/capturados" element={<Capturados />} />
        <Route path="/aleatorios" element={<Aleatorios />} />
        <Route path="/usuarios" element={<Usuario />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/historial" element={<Historial />} />
        <Route path="/consejo/:id" element={<Consejo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;