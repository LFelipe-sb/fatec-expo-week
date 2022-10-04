import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Pages/Main';
import Nav from './Components/Nav';
import CasdastroAluno from './Pages/Cadastro/CadastroAluno/index.jsx';
import CasdastroVisitante from './Pages/Cadastro/CadastroVisitante/index.jsx';
import VisitaPalestra from './Pages/Check/VisitaPalestra';
import Checkout from './Pages/Check/Checkout.jsx';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/cadastro-aluno' element={<CasdastroAluno />} />
          <Route path='/cadastro-visitante' element={<CasdastroVisitante />} />
          <Route path='/visita-palestra' element={<VisitaPalestra />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
