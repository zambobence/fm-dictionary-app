import React from 'react'
import AudioPlayer from './AudioPlayer'

function ResultComponent({data}) {
  const [wordData] = data
  console.log(wordData)
  const {word, phonetics, meanings, sourceUrls} = wordData

  const getPhoneticsData = () => {
    let phoneticsData = phonetics.find( e => e?.audio !== '')
    return phoneticsData
  }


  return (
    <div className='container'>

      <div className='headline'>
        <h1>{word}</h1>
      
        {getPhoneticsData()?.audio ? <AudioPlayer src={getPhoneticsData().audio} /> : null }
        
        <p className='accent italic phonetics'>{wordData?.phonetic || getPhoneticsData()?.text}</p>
      </div>
        <div className='result-box'>
          <ul>
            {meanings.map(e => 
              <li>
                <div className='flex word-type-container'>
                  <p className='word-type italic'>{e.partOfSpeech}</p>
                  <hr/>
                </div>
                  <h4>Meaning</h4>
                  <ul className='meaning-list'>
                    {e.definitions.map(e => 
                      <li>
                        <p className='def'>{e?.definition}</p>
                        <p className='example'>{e?.example}</p>
                      </li>)}
                  </ul>
              {e?.synonyms[0] ? <h4 className='synonyms'>Synonyms <span className='accent synonym-word'>{e?.synonyms[0]}</span></h4> : null}
              </li>)}

          </ul>
            <p className='source'>Source: </p>
            <a className='source-url' href={sourceUrls[0]} alt='wikipedia source'>{sourceUrls[0]}</a>
        </div>

      
      

    </div>
  )
}

export default ResultComponent