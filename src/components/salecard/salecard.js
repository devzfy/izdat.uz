import { useState } from 'react'
import clas from './main.module.scss'
const SaleCard = ({t_image,t_name, t_title, b_name, b_link})=>{
    const [active, setActive] = useState(false)
    return <div className={clas.sale_card_wrapper}>
        <div onClick={()=> setActive(false)} className={`${clas.overlay_content} ${active ? clas.active : null}`}>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum officia quaerat quasi ipsam accusantium laboriosam ut voluptas neque, amet illum similique quam aut necessitatibus totam excepturi, voluptatibus ipsum! Laborum, ratione.
            </p>
        </div>
        <div className={clas.top_place}>
            <h4>{t_name}</h4>
            <p>{t_title}</p>
            <img src={t_image} alt="" />
        </div>
        <div className={clas.bottom_place}>
            <h2>{b_name}</h2>
            <span>{b_link}</span>
            <button onClick={()=> setActive(true)} className={clas.more_btn} to={'/sale'}>Подробнее</button>
        </div>
    </div>
}

export default SaleCard