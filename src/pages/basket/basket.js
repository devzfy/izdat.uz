import React from 'react'
import {Header, Footer} from '../../container'
import clas from './main.module.scss'
import Image from '../../assets/images/43b196e604811ef2bb54be6e01b7f2b8 2.png'
import { Minus, Plus2 , InStock} from '../../assets/icons'

const Basket = ()=>{
    return <React.Fragment>
        <Header/>
            <div className="container">
                    <div className={clas.Basket_wrapper}>
                        <h1>Моя корзина</h1>{
                            [1,1,11,1,1].map(el => {
                         return <div className={clas.table}>
                            <div className={clas.image}>
                                <img src={Image} alt="" />
                                <div className={clas.information}>
                                    <h2>Психология влияния</h2>
                                    <h3><span>по</span> Чалдини Роберт</h3>
                                    <h4>McFarland <span>2016-03-15</span></h4>
    
                                    <div className={clas.stock}>
                                        <button><Minus/></button>
                                        <span>1</span>
                                        <button><Plus2/></button>
                                    </div>
                                </div>
                            </div>
                            <div className={clas.price}>
                                <button className={clas.has_in_shop}><InStock/></button>
                                <span className={clas.sale}>52 000 сум</span>
                                <span className={clas.title}>Цена со скидкой:</span>
                                <span className={clas.real_price}>45 000 сум</span>
                            </div>
                        </div>
            })
                }
                    </div>
            </div>
        <Footer/>
    </React.Fragment>
}

export default Basket