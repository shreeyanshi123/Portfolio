import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects.jsx'
import Bio from './components/Bio.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'
import { Contact } from './components/Contact.jsx'
import Footer from './components/Footer.jsx'


const App = () => {
  return (
    <div className='relative h-full overflow-y-hidden antialiased'>
      <div className="fixed inset-0 bg-fixed bg-cover bg-center bg-img"> </div>
      <div className='relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto '>
        <Hero />
        <Navbar />
        <Projects />
        <Bio />
        <Skills />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </div>

    </div>
  )
}

export default App