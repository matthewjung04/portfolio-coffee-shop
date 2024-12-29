import './ProductCards.scss'

function ProductCards({ photo, name, caption, price }) {
  return (
    <section className='product-card'>
      <img src={photo} alt='product image' className='product-card__image'/>
      <article className='product-card__caption'> 
        <div className='product-card__caption__details'>
          <h1 className='product-card__caption__details__name'>{name}</h1>
          <p className='product-card__caption__details__desc'>{caption}</p>
        </div>
        <h2 className='product-card__caption__price'>{price}</h2>
      </article>
    </section>
  )
}

export default ProductCards;