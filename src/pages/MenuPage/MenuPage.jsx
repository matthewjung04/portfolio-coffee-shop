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
        <a href='#Hot Drinks' className='menu__nav__links'>HOT DRINKS</a>
        <a href='#Cold Drinks' className='menu__nav__links'>COLD DRINKS</a>
        <a href='#Pasteries' className='menu__nav__links'>PASTERIES</a>
      </article>
      <article>
        {
          menuItems.map((menu) => (
            <div key={menu.type} id={menu.type} className='menu__items'>
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