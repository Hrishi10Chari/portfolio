import './app.css'
import HeroComponent from './components/HeroComponent'
import Navbar, { NavLinks } from './components/NavBar'

function App() {
  return (
    <div>
      <Navbar>
        <NavLinks href={'#dashboard'} >Home</NavLinks>
        <NavLinks href={'#experience'} scroll={true}>Experience</NavLinks>
        <NavLinks href={'#about'}>About Us</NavLinks>
        <NavLinks href={'#contact'}>Contact</NavLinks>
      </Navbar>
      <HeroComponent/>
    </div>
  )
}

export default App
