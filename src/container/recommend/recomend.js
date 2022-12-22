import {data} from '../../data/collection'
import clas from './main.module.scss'
import { Shopcard} from '../../components'
import React from 'react'
import { Arrow, Arrow2 } from '../../assets/icons'
import Slider from 'react-slick'
import {  settings2 } from '../../helpers/settings'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slick.css'

const Recomend = ()=>{
    return (
        <div className='slick_carousel_container'>
            <div className={clas.Shopcontainer_wrapper}>
        <div className={clas.contaner_heder}>
        <h1>Рекомендуем</h1>
        </div>
        <div className={clas.shopCards}>
         <Slider {...settings2}>
            {
                data[0].products.map((el)=>{
                       return <div>
                        <div className={clas.card}>
                        <Shopcard 
                        image={el.image}
                        title={el.title}
                        rate={el.rate}
                        rateCount={el.rateCount}
                        price={el.price}
                        sale={el.sale}
                        saleprice={el.saleprice}
                        />
                    </div>
                       </div>
                })
            }
            </Slider>
       
    </div></div>
        </div>
    )
} 

export default Recomend