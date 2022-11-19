import clas from './main.module.scss'
import { Dislike, Like, Book, Eye, Send } from '../../assets/icons'
import Image from '../../assets/images/Rectangle 138.png'
import { Rating } from 'react-simple-star-rating'

const RateContainer = ()=>{
    return <div className={clas.RateContainer}>
        <div className={clas.image_side}>
            <img src={Image} alt="" />
        </div>
        <div className={clas.items_side}>
            <h2>Психология влияния. Чалдини Роберт</h2>
            <div className={clas.info_items}>
                <Book/>
                <span className={clas.read}>Прочитали:</span>
                <span className={clas.count}>50</span>
            </div>
            <div className={clas.info_items}>
                <Eye/>
                <span className={clas.read}>Просмотрели:</span>
                <span className={clas.count}>60</span>
            </div>
            <div className={clas.info_items}>
                <Like/>
                <span className={clas.read}>Понравилась:</span>
                <span className={clas.count}>50</span>
            </div>
            <div className={clas.info_items}>
                <Dislike/>
                <span className={clas.read}>Не понравилась:</span>
                <span className={clas.count}>2</span>
            </div>
            <div className={clas.info_items}>
                <Rating initialValue={4} size={20} />
                <span className={clas.count}>(165)</span>
            </div> 
            <div className={clas.info_items}>
                <div className={clas.input}>
                    <input placeholder='Оставить отзыв' type="text" name="" id="" />
                    <button><Send/></button>
                </div>
                <button className={clas.button}>Оценить</button>
            </div>
            <button className={clas.see__comment}>Смотреть все отзывы</button>
        </div>
    </div>
}


export default RateContainer