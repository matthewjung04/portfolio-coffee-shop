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
      {/* <article>
        <Link></Link>
        <Link></Link>
        <Link></Link>
      </article> */}
    </section>
  )
}

export default MenuPage;