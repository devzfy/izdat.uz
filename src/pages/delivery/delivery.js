import {Header, Footer, Banner, Recommend} from '../../container'
import { Money, Car, DelPhone, CheckMoney, Card, MoneyTwo, Transfer } from '../../assets/icons'
import clas from './main.module.scss'
import React from 'react'

const Delivery = ()=>{
    return <React.Fragment>
        <Header/>
        <Banner image={'https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80'}/>
        <div className="container">
            <h1 className={clas.holder}>Заказывайте доставку удобным для вас способом</h1>
            <div className={clas.Delivery_wrapper}>
                <div className={clas.order_ways}>
                    <div className={clas.order}>
                        <h5>Заказ на сайте</h5>
                        <span>Добавьте товар в корзину на нашем сайте</span>
                        <span>Отправьте ваш список покупок на E-Mail</span>
                        <span>Менеджер с вами свяжется для уточнения заказа</span>
                    </div>
                    <div className={clas.order}>
                        <h5>Заказ по телефону</h5>
                        <span>Позвоните на номер: +998 99 999-99-99</span>
                        <span>Для заказа необходимо сообщить код товара</span>
                        <span>Так же с менеджером необходимо оговорить сроки и условия доставки</span>
                    </div>
                </div>
                <div className={clas.work_scheme}>
                    <h1 className={clas.holder}>Схема работы</h1>
                    <div className={clas.work_wrapper}>
                        <div className={clas.scheme}></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <Recommend/>
        </div>
        <Footer/>
    </React.Fragment>
}

export default Delivery