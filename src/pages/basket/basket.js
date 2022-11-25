import React from 'react'
import {Header, Footer} from '../../container'
import clas from './main.module.scss'
import Image from '../../assets/images/43b196e604811ef2bb54be6e01b7f2b8 2.png'
import { Minus, Plus2 , InStock} from '../../assets/icons'
import { useSelector } from 'react-redux'

const Basket = ()=>{
    const books = useSelector(state => state.data)
    console.log(books, 'books');
    return <React.Fragment>
        <Header/>
            <div className="container">
                    <div className={clas.Basket_wrapper}>
                        <h1>Моя корзина</h1>{
                            books?.map(el => {
                         return <div className={clas.table}>
                            <div className={clas.image}>
                                <img src={el.volumeInfo.imageLinks.smallThumbnail} alt="" />
                                <div className={clas.information}>
                                    <h2>{el.volumeInfo.title}</h2>
                                    <h3><span>по</span> {el.volumeInfo.authors[0]}</h3>
                                    <h4>{el.volumeInfo.publisher} <span>{el.volumeInfo.publishedDate}</span></h4>
    
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
                                <span className={clas.real_price}>{el.saleInfo.listPrice.amount} сум</span>
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