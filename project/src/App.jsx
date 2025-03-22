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
    <div className='  bg-[#f5f5f8] '>
      <div className='min-h-screen gap-16 mb-0'>
        <Topblock />
        <Blocks />

      </div>

      <div className='h-screen mt-[337px]  bg-[#f5f5f8] flex flex-col justify-between '>
        <SecondBlock />
      </div>
    <div className=''>

    </div>
    </div>
  )
}

export default App
