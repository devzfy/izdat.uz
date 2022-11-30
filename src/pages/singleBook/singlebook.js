import React from 'react'
import { Header, Footer, Recommend } from '../../container'
import clas from './main.module.scss'
import Carousel from 'react-gallery-carousel'
import 'react-gallery-carousel/dist/index.css';
import './index.css'
import { Rating } from 'react-simple-star-rating'
import { ShopBasket } from '../../assets/icons';
import Click from '../../assets/icons/logo.png'
import Apelsin from '../../assets/icons/apelsin-logo-light.b49ddc7.svg'
import Payme from '../../assets/icons/download.svg'
import { Buttons } from '../../components';

const SingleBook = () => {
    const images = [9, 8, 7, 6, 5].map((number) => ({
        src: `https://placedog.net/${number}00/${number}00?id=${number}`
    }));
    return <React.Fragment>
        <Header />
        <div className={clas.SingleBook_wrapper}>
            <div className={clas.page_holder}>
                <div className="container">
                    <h2>Книга Госпожа Бовари. Гюстав Флобер</h2>
                </div>
            </div>

            <div className={clas.book_info}>
                <div className="container">
                    <div className={clas.inner}>
                        <div className={clas.book_image}>
                            <Carousel isLoop={true} hasMediaButton={false} autoPlayInterval={2000} isAutoPlaying hasSizeButton={false} images={images} style={{ height: 520, width: 520 }} />
                        </div>
                        <div className={clas.book_short}>
                            <h5>Коротко о товаре</h5>
                            <div className={clas.book_price}>
                                <ul>
                                    <li>Автор:</li>
                                    <li>Гюстав Флобер</li>
                                </ul>
                                <ul>
                                    <li>Категория:</li>
                                    <li>Художественная <br /> литература</li>
                                </ul>
                                <ul>
                                    <li>Наличие:</li>
                                    <li>Есть в наличие</li>
                                </ul>

                                <ul>
                                    <li>Издательство:</li>
                                    <li>Речь, 2018</li>
                                </ul>
                                <ul>
                                    <li>Страницы:</li>
                                    <li>335</li>
                                </ul>

                                <ul>
                                    <li>Код товара:</li>
                                    <li>235623</li>
                                </ul>
                                <div className={clas.rating}>
                                    <Rating initialValue={4} size={20} />
                                    <span>(165)</span>
                                </div>
                                <span className={clas.price}>Цена 52 000 сум</span>
                            </div>
                        </div>
                        <div className={clas.book_payment}>
                            <div className={clas.payment}>
                                <div className={clas.counter}>
                                    <button>-</button>
                                    <span>1</span>
                                    <button>+</button>
                                </div>
                                <div className={clas.add_basket}>
                                    <button>
                                        <ShopBasket />
                                        <span>В корзину</span>
                                    </button>
                                </div>
                                <button className={clas.order}>Сделать предзаказ</button>
                                <div className={clas.payment_ways}>
                                    <h3>Способ оплаты:</h3>
                                    <ul>
                                        <li><img src={Apelsin} alt="" /></li>
                                        <li><img src={Click} alt="" /></li>
                                        <li><img src={Payme} alt="" /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className={clas.description}>
                <div className="container">
                    <h1>Описание</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ullamcorper malesuada egestas vitae placerat. Etiam blandit nascetur tortor in tortor. Egestas sed diam consequat accumsan vitae. Leo aenean est arcu imperdiet commodo. Sollicitudin pretium, amet, diam mauris, dolor. Lectus ac mi tellus aliquam diam, elementum, tellus mi sollicitudin. Dictum a leo sollicitudin vel adipiscing etiam purus hendrerit. Pellentesque dui habitant tortor quis at blandit non eu. Id blandit ac scelerisque volutpat fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ullamcorper malesuada egestas vitae placerat. Etiam blandit nascetur tortor in tortor. Egestas sed diam consequat accumsan vitae. Leo aenean est arcu imperdiet commodo. Sollicitudin pretium, amet, diam mauris, dolor. Pellentesque dui habitant tortor quis at blandit non eu. Id blandit ac scelerisque volutpat fermentum.</p>
                </div>
            </div>
            <div className={clas.leave_comment}>
                <div className="container">
                    <h1>Отзывы</h1>

                    <div className={clas.comments_wrapper}>
                        <button className={clas.add_comment}>
                            <svg width="18" height="24" viewBox="0 0 18 24" fill="#F7A302" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.44535 0H16.5546C17.3525 0 18 0.640345 18 1.42331V22.5767C18 23.3624 17.3497 24 16.5546 24H1.44535C0.647522 24 1.90735e-06 23.3596 1.90735e-06 22.5767V1.42331C-2.86102e-05 0.640345 0.647522 0 1.44535 0ZM1.09014 22.5794C1.09014 22.7839 1.23767 22.9292 1.44532 22.9292H16.5546C16.7623 22.9292 16.9098 22.7839 16.9098 22.5794V1.42331C16.9098 1.21883 16.7623 1.07354 16.5546 1.07354H1.44535C1.23771 1.07354 1.09017 1.21883 1.09017 1.42331V22.5794H1.09014ZM3.59836 16.8538C3.59836 17.1444 3.83333 17.3758 4.12841 17.3758H10.918C11.2131 17.3758 11.4481 17.1444 11.4481 16.8538C11.4481 16.5632 11.2131 16.3318 10.918 16.3318H4.13115C3.86337 16.3023 3.59836 16.5632 3.59836 16.8538ZM3.59836 20.0798C3.59836 20.3704 3.83333 20.6018 4.12841 20.6018H10.918C11.2131 20.6018 11.4481 20.3704 11.4481 20.0798C11.4481 19.7893 11.2131 19.5579 10.918 19.5579H4.13115C3.86337 19.5283 3.59836 19.7893 3.59836 20.0798ZM3.59836 13.6574C3.59836 13.948 3.83333 14.1794 4.12841 14.1794H10.918C11.2131 14.1794 11.4481 13.948 11.4481 13.6574C11.4481 13.3668 11.2131 13.1354 10.918 13.1354H4.13115C3.86337 13.1354 3.59836 13.3668 3.59836 13.6574ZM3.59836 10.4906C3.59836 10.7812 3.83333 11.0125 4.12841 11.0125H10.918C11.2131 11.0125 11.4481 10.7812 11.4481 10.4906C11.4481 10.2 11.2131 9.96861 10.918 9.96861H4.13115C3.86337 9.96861 3.59836 10.2 3.59836 10.4906ZM11.4781 7.32376C11.4781 7.03318 11.2432 6.8018 10.9481 6.8018H4.22129C3.92621 6.8018 3.69124 7.03318 3.69124 7.32376C3.69124 7.61434 3.92621 7.84573 4.22129 7.84573H10.9453C11.2404 7.84573 11.4781 7.61434 11.4781 7.32376ZM11.4781 4.12734C11.4781 3.83676 11.2432 3.60537 10.9481 3.60537H4.22129C3.92621 3.60537 3.69124 3.83676 3.69124 4.12734C3.69124 4.41792 3.92621 4.64931 4.22129 4.64931H10.9453C11.2404 4.67892 11.4781 4.41795 11.4781 4.12734ZM13.4262 4.12734C13.4262 4.44753 13.6913 4.7085 14.0164 4.7085C14.3415 4.7085 14.6065 4.4475 14.6065 4.12734C14.6065 3.80716 14.3415 3.54619 14.0164 3.54619C13.6912 3.54619 13.4262 3.80719 13.4262 4.12734ZM13.4262 7.32376C13.4262 7.64395 13.6913 7.90492 14.0164 7.90492C14.3415 7.90492 14.6065 7.64392 14.6065 7.32376C14.6065 7.00361 14.3415 6.74261 14.0164 6.74261C13.6912 6.713 13.4262 6.974 13.4262 7.32376ZM13.4262 10.4314C13.4262 10.7516 13.6913 11.0125 14.0164 11.0125C14.3415 11.0125 14.6065 10.7515 14.6065 10.4314C14.6065 10.1112 14.3415 9.85023 14.0164 9.85023C13.6912 9.82332 13.4262 10.0843 13.4262 10.4314ZM13.4262 13.6009C13.4262 13.9211 13.6913 14.182 14.0164 14.182C14.3415 14.182 14.6065 13.921 14.6065 13.6009C14.6065 13.2807 14.3415 13.0197 14.0164 13.0197C13.6912 13.0197 13.4262 13.2807 13.4262 13.6009ZM13.4262 16.8834C13.4262 17.2036 13.6913 17.4646 14.0164 17.4646C14.3415 17.4646 14.6065 17.2036 14.6065 16.8834C14.6065 16.5632 14.3415 16.3023 14.0164 16.3023C13.6912 16.3023 13.4262 16.5632 13.4262 16.8834ZM13.4262 20.0798C13.4262 20.4 13.6913 20.661 14.0164 20.661C14.3415 20.661 14.6065 20.4 14.6065 20.0798C14.6065 19.7596 14.3415 19.4987 14.0164 19.4987C13.6912 19.4691 13.4262 19.7596 13.4262 20.0798Z" fill="#F7A302"/>
                            </svg>
                            <span>Оставить отзыв</span>
                        </button>
                        <div className={clas.comment}>
                            <div className={clas.comment_card}>
                                <h3>Kathryn Murphy</h3>
                                <Rating initialValue={5} size={20}/>
                                <span className={clas.date}>19 февраля 2022</span>
                                <p>А ещё тщательные исследования конкурентов, вне зависимости от их уровня, должны быть смешаны с не уникальными данными до степени совершенной неузнаваемости</p>
                                <div className={clas.reply_like}>
                                    <button className={clas.reply}>Oтветить</button>
                                    <div className={clas.like}>
                                        <Buttons/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Recommend />
        <Footer />
    </React.Fragment>
}

export default SingleBook