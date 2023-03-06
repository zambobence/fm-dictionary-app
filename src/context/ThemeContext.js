import React from 'react'
import { createContext, useEffect, useState } from 'react'

    const ThemeContext = createContext()

function ThemeContextProvider({children}) {

    const [darkMode, setDarkMode] = useState(true)
    
    const toggleDarkMode = () => {
        setDarkMode(prevState => !prevState)
    }

    useEffect(() => {
        const prefersDark = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;
        setDarkMode(prefersDark)
    },[])

  return (
    <ThemeContext.Provider value={{darkMode, setDarkMode, toggleDarkMode}}>
        {children}
    </ThemeContext.Provider>
  )
}

export {ThemeContext, ThemeContextProvider}