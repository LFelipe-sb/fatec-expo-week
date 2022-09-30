import './App.css';
import CasdastroAluno from './Pages/Cadastro/CadastroAluno/index.jsx';
import CasdastroVisitante from './Pages/Cadastro/CadastroVisitante/index.jsx';
import Nav from './Components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Pages/Main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/cadastro-aluno' element={<CasdastroAluno />} />
          <Route path='/cadastro-visitante' element={<CasdastroVisitante />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
