import {data} from '../../data/collection'
import clas from './main.module.scss'
import {PaginationCustome, Shopcard} from '../../components'
import React from 'react'


const Recomend = ()=>{
    return (
        <React.Fragment>
            <div className='container'>
            <h1>Рекомендуем</h1>
            <div className={clas.rec_cards}>
                {
                    data[0].products.slice(0,4).map(el => {
                        return <div className={clas.card}><Shopcard
                            image={el.image}
                            title={el.title}
                            rate={el.rate}
                            rateCount={el.rateCount}
                            price={el.price}
                            sale={el.sale}
                            saleprice={el.saleprice
                        }
                        /></div>
                    })
                }
            </div>
            <PaginationCustome/>
            </div>
        </React.Fragment>
    )
} 

export default Recomend