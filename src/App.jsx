import './App.css'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'
import Nav from './Components/Navber/Nav'
import Players from './Components/Players/Players'

function App() {

  return (
    <>
      <div className='md:w-4/5 mx-auto p-8'>
        <Nav></Nav>
        <Hero></Hero>
        <Players></Players>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
