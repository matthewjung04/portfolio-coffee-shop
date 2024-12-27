import { Link } from 'react-router-dom'
import coffeeBeanLogo from '../../assets/logos/coffee-beans-logo-and-footer.svg'
import './Header.scss'

function Header() {
  return (
    <section className='header'>
      <Link to='/' className='header__logo'>
        <img src={coffeeBeanLogo} alt='coffee-bean-logo' className='header__logo__image'/>
        <h1 className='header__logo__title'>nitro</h1>
      </Link>
      <div className='header__nav'>
        <Link to='/' className='header__nav__links'>ABOUT</Link>
        <Link to='/menu' className='header__nav__links'>MENU</Link>
        <Link to='/menu' className='header__nav__links--shop-now'>SHOP NOW</Link>
      </div>
    </section>
  )
}

export default Header;