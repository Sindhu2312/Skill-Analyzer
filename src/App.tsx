import { Route, Routes } from 'react-router-dom'
import Home from './components/Pages/Home'
import Navbar from './components/navbar/Navbar'
import Features from './components/Pages/Features'

function App() {

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Home />
      </main>
    </>
  )
}

export default App
