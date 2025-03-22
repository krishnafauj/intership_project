import React from 'react'
import Blocks from './components/Home/Blocks'
import '@fontsource/dm-sans';
import '@fontsource/dm-sans/400.css';
import '@fontsource/dm-sans/500.css';
import '@fontsource/dm-sans/700.css';
import Topblock from './components/Home/Topblock';
import SecondBlock from './components/Home/SecondBlock';
import './App.css'
function App() {
  return (
    <div className='  bg-[#f5f5f8] min-h-screen '>
      <Topblock/>
      <Blocks/>
      <SecondBlock/>
    
    </div>
  )
}

export default App
