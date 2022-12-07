import {Banner, Recommend} from '../../container'
import { Shopcard } from '../../components'
import React from 'react'
import clas from './main.module.scss'
import {newData} from '../../data/collection'

const UniqueEdition = ()=>{
    return <React.Fragment>
        <Banner image={'https://images.pexels.com/photos/12064/pexels-photo-12064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}/>
        <div className={clas.UniqueEdition_wrapper}>
            <div className="container">
                <h1>Антикварные издания</h1>
                <div className={clas.UniqueEdition_books}>
                    {
                        newData.map(el =>{
                            return <div className={clas.book}>
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
                <Recommend/>
            </div>
        </div>
    </React.Fragment>
}

export default UniqueEdition