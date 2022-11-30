import React from "react";
import { Header, Footer, Banner, Recommend } from "../../container";
import clas from './main.module.scss'
import { Rating } from "react-simple-star-rating";
import { PaginationCustome } from "../../components";
import '../../components/shop/anime.scss'
import Title from 'react-vanilla-tilt'

const Soon = ()=>{
    return <React.Fragment>
        <Header/>
        <Banner image={'https://images.unsplash.com/photo-1527176930608-09cb256ab504?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80'}/>
            <div className={clas.Soon_wrapper}>
                <h1 className={clas.holder}>Скоро в наличие</h1>
                    <div className="container">
                        <div className={clas.soon_cards_wrapper}>
                            {
                                [1,1,1,1,1,1,1,1,1,1,1,1].map(()=>{
                                     
                                    return   <div className={clas.soon_cards}>
                                    <img src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
                                    <h3>Сказание о Мамаевом побоище</h3>
                                    <div className={clas.rating}>
                                        <Rating initialValue={5} size={20}/>
                                        <span className={clas.rate}>(165)</span>
                                    </div>
                                    <h2 className={clas.price}>52 000 сум</h2>
                                    <button>Сделать предзаказ</button>
                                </div>
                                    
                                })
                            }
                    </div>
                            <PaginationCustome/>
                </div>
            </div>
        <Recommend/>
        <Footer/>
    </React.Fragment>
}
export default Soon