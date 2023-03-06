import './App.css';
import Header from './components/Header';
import SearchForm from './components/SearchForm'
import ResultComponent from './components/ResultComponent';
import NoResultComponent from './components/NoResultComponent';
import Footer from './components/Footer'
import {useState, useEffect, useContext} from 'react'
import {mockData} from './mockData'
import { ThemeContext } from './context/ThemeContext';
function App() {
  const {darkMode} = useContext(ThemeContext)
  
  const [fontStyle, setFontStyle] = useState('sans-serif')
  const [searchTerm, setSearchTerm] = useState('')
  const [meaningData, setMeaningData] = useState(mockData)
  const [error, setError] = useState(false)
  
  const fontStyleList = [{label: 'Sans Serif', value:'sans-sreif'}, {label: 'Serif', value:'serif'}, {label: 'Mono', value: 'mono'}]

  const fetchWord = async () => {
    if (searchTerm !==''){
      setError(false)
      let res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`)
      let data = await res.json()
      console.log(data)
      setMeaningData(data)
    }

    else (
      setError(true)
    )
    
  }

  return (
    <div className={darkMode ? `wrapper ${fontStyle} dark` : `wrapper ${fontStyle} light`}>
      <Header fontStyleList={fontStyleList} setFontStyle={setFontStyle} fontStyle={fontStyle}/>
      <main>
      <SearchForm searchTerm={searchTerm} setSearchTerm={setSearchTerm} toggleFetch={fetchWord} error={error}/>
      {meaningData?.message ? <NoResultComponent /> : <ResultComponent data={meaningData} /> }
      </main>
      <Footer />
    </div>
  )
}

export default App;
