import React from 'react'
import faceIcon from '../assets/images/cara.png'
function NoResultComponent() {
  return (
    <div className='container no-results-container'>
        <img src={faceIcon} alt='smiley' className='face' />
        <h4>No definition found</h4>
        <p>Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.</p>
    </div>
  )
}

export default NoResultComponent