import React from 'react'
import Header from '../../Components/Header/Header'
import ChangeGUI from '../../Components/ChangeGUI/ChangeGUI'

import "./test.css"
import SearchBar from '../../Components/SearchBar/SearchBar'

function Test() {
  return (
    <div className='ChangePage'>
      <Header />
      <SearchBar />
      <ChangeGUI />
    </div>
  )
}

export default Test