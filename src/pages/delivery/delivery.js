import {  Banner, Recommend } from '../../container'
import { Money, Car, DelPhone, CheckMoney, Card, MoneyTwo, Transfer, Phone } from '../../assets/icons'
import clas from './main.module.scss'
import React from 'react'
import Image from '../../assets/images/Group 70.png'

const Delivery = () => {
    return <React.Fragment>
        <Banner image={'https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80'} />
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
                        <div className={clas.scheme}>
                            <DelPhone />
                            <span>Вы обращаетесь к нам</span>
                        </div>
                        <div className={clas.scheme}>
                            <CheckMoney />
                            <span>Предворительная оплата</span>
                        </div>
                        <div className={clas.scheme}>
                            <Car />
                            <span>Выполнение работы</span>
                        </div>
                        <div className={clas.scheme}>
                            <Money />
                            <span>Оплата работы</span>
                        </div>
                    </div>
                </div>
                <h1 className={clas.holder}>Способы оплаты</h1>
                <div className={clas.payment_method}>
                    <div className={clas.method}>
                        <MoneyTwo />
                        <span>Оплата наличными при получении</span>
                        <p>
                            Курьер доставляет вам товар по указанному адресу. Вы осматриваете товар и оплачиваете стоимость товара и услуг.
                        </p>
                    </div>
                    <div className={clas.method}>
                        <Card />
                        <span>Оплата картами</span>
                        <p>
                            Вы можете оплатить вашей картой через платежные системы до или после получения товара.
                        </p>
                    </div>
                    <div className={clas.method}>
                        <Transfer />
                        <span>Банковский перевод</span>
                        <p>
                            Менеджер выставляет вам счет и высылает на вашу электронную почту для осуществления платежа банковским переводом.
                        </p>
                    </div>
                </div>
                {/* <h1 className={clas.holder}>Заказать доставку</h1>
                <div className={clas.order_form}>
                    <div className={clas.image}>
                        <img src={Image} alt="" />
                    </div>
                    <div className={clas.form}>
                        <form action="">
                            <label htmlFor="">Введите код товара</label>
                            <input placeholder='Код товара' type="text" name="" id="" />

                            <label htmlFor="">Введите номер телефона</label>
                            <input placeholder='Ваш номер телефона' type="text" name="" id="" />

                            <label htmlFor="">Введите адрес</label>
                            <input placeholder='Ваш адрес' type="text" name="" id="" />
                        </form>
                        <button type='submit'>Заказать</button>
                    </div>
                </div> */}
            </div>
        </div>
        <div className="container">
            <Recommend />
        </div>
    </React.Fragment>
}

export default Delivery