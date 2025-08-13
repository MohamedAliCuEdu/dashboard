// scss files:
import '../styles/layouts/layouts.scss';
import { useEffect, useState } from 'react';

function Header(){
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const stored = localStorage.getItem('theme') || 'light';
    setTheme(stored);
    document.documentElement.setAttribute('data-theme', stored);
  }, []);

  function toggleTheme(){
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  }

  return(
    <header>
    <div className="search">
      <input type="search" placeholder="Type A Keyword"/>
    </div>
    <div className="icons">
      <button aria-label="Toggle theme" className="btn-grey fs-13" onClick={toggleTheme}>
        {theme === 'light' ? 'Dark' : 'Light'} mode
      </button>
      <span className="notifications">
        <i className="fa-regular fa-bell fa-lg"></i>
      </span>
      <img src={require('../imgs/avatar.png')} alt="person"/>
    </div>
  </header>
  )
}
export default Header;