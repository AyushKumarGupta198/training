import React from 'react'
import FetchData from '../components/FetchData/FetchData'
import ClassCom_FetchData from '../components/FetchData/ClassCom_FetchData'

function Fetch() {
  return (
    <div className='fetch'>
        <h1>WELCOME TO JOKE PAGE</h1>
        <h2>(Functional component)</h2>
        <FetchData/>
        <h2>(Class component)</h2>
        <ClassCom_FetchData/>
    </div>
  )
}

export default Fetch