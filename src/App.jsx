import React from 'react'
import Navbar from './Components/Header/Navber'
import Home from './Components/Main/Home/Home'
import About from './Components/Main/About/AboutPage/About'
import Projects from './Components/Main/Projects/Projects'
import SkillCards from './Components/Main/Skills/SkillCards'




function App() {
  return (

    <div className=' h-screen w-full bg-black text-[#97FFFF] font-bold'>
      <header>
        <Navbar />
      </header>
      <main className=' curser-pointer bg-black text-[#97FFFF]'>
        {/* <Home />
        <About /> */}
        {/* <Projects /> */}
        <SkillCards />
      </main>
    </div>

  )
}

export default App
