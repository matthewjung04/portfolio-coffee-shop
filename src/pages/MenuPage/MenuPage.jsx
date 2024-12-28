import { Link } from 'react-router-dom'
import { menuItems } from '../../utils/utils'
import './MenuPage.scss'

function MenuPage() {
  return (
    <section className='menu'>
      <article className='menu__hero'>
        <div className='menu__hero__title'>
          <div className='menu__hero__title__frame'></div>
          <h1 className='menu__hero__title__text'>MENU</h1>
        </div>
      </article>
      <article className='menu__nav'>
        <Link className='menu__nav__links'>HOT DRINKS</Link>
        <Link className='menu__nav__links'>COLD DRINKS</Link>
        <Link className='menu__nav__links'>PASTERIES</Link>
      </article>
      <article>
        {
          menuItems.map((menu) => (
            <div id={menu.type} className='menu__items'>
              <h1 className='menu__items__title'>{menu.type}</h1>
              <div className='menu__items__block'>
                <h2 className='menu__items__block__name'>{menu.items[0].name}</h2>
                <p className='menu__items__block__desc'>{menu.items[0].description}</p>
                <p className='menu__items__block__price'>{menu.items[0].price}</p>
              </div>
              <div className='menu__items__block'>
                <h2 className='menu__items__block__name'>{menu.items[1].name}</h2>
                <p className='menu__items__block__desc'>{menu.items[1].description}</p>
                <p className='menu__items__block__price'>{menu.items[1].price}</p>
              </div>
            </div>
          ))
        }
      </article>
    </section>
  )
}

export default MenuPage;