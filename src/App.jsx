import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from "./components/Hero/Hero";
import Showcase from "./components/Showcase/Showcase"
import AboutPreview from './components/AboutPreview/AboutPreview';


const App = () => {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <Hero />
        <Showcase />
        <AboutPreview />
      </main>
    </>
  )
}

export default App
