import { AiFillStar } from 'react-icons/ai'
import{BsFillBagHeartFill} from "react-icons/bs"

export default function Card({img,title,star,reviews,newPrice,prevPrice}) {
  return (
    <div>
         <section className="card">
         <img src={img} alt={title} className='card-img'/>
         <div className="card-details">Shoe</div>
         <h3 className='card-title'>{title}</h3>
         <section className="card-review">
            <AiFillStar className='ratings-star'/>   <AiFillStar className='ratings-star'/>  <AiFillStar className='ratings-star'/>  <AiFillStar className='ratings-star'/>
            <span className="total-reviews">{reviews}</span>
            <section className="card-price">
                <div className="price">
                    <del>{prevPrice}</del> {newPrice}
                </div>
                <div className="bag">
                    <BsFillBagHeartFill className='bag-icon'/>
                </div>
            </section>
         </section>
        </section>
    </div>
  )
}
