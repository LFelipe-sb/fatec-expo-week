import './style.css';
import LogoFatec from '../../Images/logo-fatec.jpg';
import LogoCPS from '../../Images/logo-cps.jpg';
import { Link } from 'react-router-dom';

function Nav() {

  function handleLogout() {
    sessionStorage.clear();
    window.location.reload(true);
  }

  return (
    <div className="container-nav">
      <Link className='fatec' to='/'>
        <img className='fatec-img' src={LogoFatec} alt="Logo da Fatec" title="Logo da Fatec" />
      </Link>
      <img className='cps' src={LogoCPS} alt="Logo do Centro Paula Souza" title="Logo do Centro Paula Souza" />
      <Link to='/login'>
        <p className='login' onClick={sessionStorage.getItem("login") ? handleLogout : ''}>{sessionStorage.getItem("login") ? 'Sair' : 'Area Restrita'}</p>
      </Link>
    </div>
  );
}

export default Nav;