import { Link } from 'react-router-dom'
import coffeeBeanHero from '../../assets/images/coffeebeans-hero.png'
import coffeeBean from '../../assets/images/coffeebeans.png'
import coldBrew from '../../assets/images/coldbrew.png'
import inHouseBrew from '../../assets/images/inhousebrew.png'
import tiltedCan from '../../assets/images/tiltedcan.png'
import coffeeBeanIcon from '../../assets/logos/coffee-beans.svg'
import coffeeCupIcon from '../../assets/logos/coffee-cup.svg'
import plantsIcon from '../../assets/logos/planting.svg'
import ProductCards from '../../components/ProductCards/ProductCards'
import Footer from '../../components/Footer/Footer'
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
        <h1 className='homepage__products__title'>Our Products</h1>
        <div className='homepage__products__cards'>
          <ProductCards 
            photo={coffeeBean}
            name={'Coffee Beans'}
            caption={'Pack of 3'}
            price={'$19'}
          />
          <ProductCards
            photo={coldBrew}
            name={'Cold Brew'}
            caption={'1 can'}
            price={'$5'}
          />
          <ProductCards
            photo={inHouseBrew}
            name={'In-house Brew'}
            caption={'1 cup'}
            price={'$3'}
          />
        </div>
        <Link to='/menu' className='homepage__products__link'>
          <button className='homepage__products__link--button'>
            <div className='homepage__products__link--frame'>VIEW ALL</div>
          </button>
        </Link>
      </article>

      <article className='homepage__details'>
        <div className='homepage__details__about'>
          <h1 className='homepage__details__about__title'>We're Different</h1>
          <p className='homepage__details__about__desc'>
            We grow and roast our own beans. Every bean, every cup,
            every step of the way, we strive for excellence.
          </p>
          <div className='homepage__details__about__icons'>
            <img src={plantsIcon} alt='plants' className='homepage__details__about__icons__image'/>
            <img src={coffeeBeanIcon} alt='coffee beans' className='homepage__details__about__icons__image'/>
            <img src={coffeeCupIcon} alt='coffee cup' className='homepage__details__about__icons__image'/>
          </div>
          <Link className='homepage__details__about__link'>
            <button className='homepage__details__about__link--button'>
              <div className='homepage__details__about__link--frame'>LEARN MORE</div>
            </button>
          </Link>
        </div>
        <div className='homepage__details__tilted-can'>
          <img src={tiltedCan} alt='tilted can' className='homepage__details__tilted-can--image'/>
          <div className='homepage__details__tilted-can--frame'></div>
        </div>
      </article>

      <article className='homepage__discount'>
        <h1 className='homepage__discount__regular'>
          Get 20% off your first order with code:
          <span className='homepage__discount__bold'> FirstNitro</span>
        </h1>
      </article>
    </section>
  )
}

export default HomePage;