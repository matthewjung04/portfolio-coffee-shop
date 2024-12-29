import { Link } from 'react-router-dom'
import coffeeBeanHero from '../../assets/images/coffeebeans-hero.png'
import coffeeBean from '../../assets/images/coffeebeans.png'
import coldBrew from '../../assets/images/coldbrew.png'
import inHouseBrew from '../../assets/images/inhousebrew.png'
import tiltedCan from '../../assets/images/tiltedcan.png'
import tiltedCanBackground from '../../assets/images/coldbrewbackground.png'
import coffeeBeanIcon from '../../assets/logos/coffee-beans.svg'
import coffeeCupIcon from '../../assets/logos/coffee-cup.svg'
import plantsIcon from '../../assets/logos/planting.svg'
import coffeeBeanBackground from '../../assets/logos/coffee-beans-logo-and-footer.svg'
import facebookIcon from '../../assets/logos/Facebook-Icon.svg'
import instagramIcon from '../../assets/logos/Instagram-Icon.svg'
import yelpIcon from '../../assets/logos/Yelp-Icon.svg'

import './HomePage.scss'

function HomePage() {
  return (
    <section className='homepage'>
      <article className='homepage__hero'>
        <div className = 'homepage__hero__info'>
          <h1 className='homepage__hero__info__title'>Nitro Coffee</h1>
          <p className='homepage__hero__info__desc'>
            Coffee is a brewed drink prepared from roasted coffee beans,
            the seeds of berries from certain Coffea species.
          </p>
          <Link to='/menu' className='homepage__hero__info__link'>
            <button type='button' className='homepage__hero__info__link--button'>
              <div className='homepage__hero__info__link--frame'>SHOP NOW</div>
            </button>
          </Link>
        </div>
        <img src={coffeeBeanHero} alt='coffee-bean-hero' className='homepage__hero__image'/>
      </article>
      <article className='homepage__products'>

      </article>
      <article className='homepage__details'>
        <div className='homepage__details__about'>

        </div>
        <div className='homepage__details__discount'>

        </div>
      </article>
      <article className='homepage__footer'>
        <div className='homepage__footer__address'>

        </div>
        <div className='homepage__footer__hours'>

        </div>
        <div className='homepage__footer__social'>

        </div>
      </article>
    </section>
  )
}

export default HomePage;