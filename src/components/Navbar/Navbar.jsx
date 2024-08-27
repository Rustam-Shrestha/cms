
import './Navbar.css'

const Navbar = () => {
  return (
    <div> <nav className="navbar">
    <div className="navbar-brand">MyApp</div>
    <ul className="navbar-links">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <div className="navbar-toggle">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </nav></div>
  )
}

export default Navbar