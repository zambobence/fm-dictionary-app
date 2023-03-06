import React, { useContext } from 'react'
import Logo from '../assets/images/logo.svg'
import MoonIcon from '../assets/images/icon-moon.svg'
import toggleLight from '../assets/images/light-toggle.png'
import toggleDark from '../assets/images/dark-toggle.png'
import { ThemeContext } from '../context/ThemeContext'

function Header({fontStyle, setFontStyle, fontStyleList}) {
  const  {darkMode, toggleDarkMode} = useContext(ThemeContext)
  return (
    <header>
    <div className='container flex'>
      <img className='logo' src={Logo} alt='logo' />
      <select className='style-input' value={fontStyle} onChange={(e) => setFontStyle(e.target.value)}>
        {fontStyleList.map((e, i) =><option key={i} value={e.value}>{e.label}</option>)}
      </select >
      <button onClick={()=> toggleDarkMode()} aria-label='change theme'>
      <img src={darkMode ? toggleDark : toggleLight} className='mode-toggler' alt='toggle' />
      </button>
      <img src={MoonIcon} alt='moon icon' className='icon' />
    </div>
    </header>
  )
}

export default Header