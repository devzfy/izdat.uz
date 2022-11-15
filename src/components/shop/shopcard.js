import clas from './main.module.scss'
import { Rating } from 'react-simple-star-rating'

const Shopcard = ({image, title, rate, rateCount, price, sale, saleprice})=>{
    return <div className={clas.shopcard_wrapper}>
        <img src={image} alt="" />
        <h3>{title}</h3>
        <div className={clas.rate}>
            <Rating initialValue={rate}/>
            <span>({rateCount})</span>
        </div>
        <div className={clas.price}>
            <span>{price}</span>
            <span></span>
        </div>
    </div>
}

export default Shopcard