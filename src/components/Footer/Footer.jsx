import coffeeBeanBackground from '../../assets/logos/coffee-beans-logo-and-footer.svg'
import facebookIcon from '../../assets/logos/Facebook-Icon.svg'
import instagramIcon from '../../assets/logos/Instagram-Icon.svg'
import yelpIcon from '../../assets/logos/Yelp-Icon.svg'
import './Footer.scss'

function Footer() {
  return (
    <section className='footer'>
      <img src={coffeeBeanBackground} alt='coffee background' className='footer__background--top'/>
      <article className='footer__blocks'> 
        <div className='footer__blocks__address'>
          <h2 className='footer__blocks__address__title'>Address</h2>
          <p className='footer__blocks__address__desc'>503 Broadway Penthouse</p>
          <p className='footer__blocks__address__desc'>New York</p>
        </div>

        <div className='footer__blocks__hours'>
          <h2 className='footer__blocks__hours__title'>Hours</h2>
          <p className='footer__blocks__hours__desc'>
            <span className='footer__blocks__hours__desc--bold'>Monday - Friday: </span>
            9am - 7pm
          </p>
          <p className='footer__blocks__hours__desc'>
            <span className='footer__blocks__hours__desc--bold'>Saturday - Sunday: </span>
            10am - 5pm
          </p>
        </div>
        
        <div className='footer__blocks__social'>
          <h2 className='footer__blocks__social__title'>Social</h2>
          <div className='footer__blocks__social__icons'>
            <a href='https://www.facebook.com/' target='blank'>
              <img src={facebookIcon} alt='Facebook logo' className='footer__blocks__social__icons__images'/>
            </a>
            <a href='https://www.yelp.com/' target='blank'>
              <img src={yelpIcon} alt='Yelp logo' className='footer__blocks__social__icons__images'/>
            </a>
            <a href='https://www.instagram.com/' target='blank'>
              <img src={instagramIcon} alt='Instagram logo' className='footer__blocks__social__icons__images'/>
            </a>
          </div>
        </div>
      </article>
      <img src={coffeeBeanBackground} alt='coffee background' className='footer__background--bottom'/>
    </section>
  )
}

export default Footer;