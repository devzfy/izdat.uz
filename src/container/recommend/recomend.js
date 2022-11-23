import {data} from '../../data/collection'
import clas from './main.module.scss'
import { Shopcard} from '../../components'
import React from 'react'
import { Arrow, Arrow2 } from '../../assets/icons'

const Recomend = ()=>{
    return (
        <div className={clas.Shopcontainer_wrapper}>
        <div className={clas.contaner_heder}>
        <h1>Рекомендуем</h1>
        <div className={clas.icons}>
            <Arrow/>
            <Arrow2/>
        </div>
        </div>
        <div className={clas.shopCards}>
            {
                data[0].products.map((el)=>{
                    return <div className={clas.card}>
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
                })
            }
        </div>
       
    </div>
    )
} 

export default Recomend