import React from 'react'
import { Header , Shopcontainer, Footer} from '../../container'
import clas from './main.module.scss'
import Slider from 'react-slick'
import { settings } from '../../helpers/settings'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Bg from '../../assets/images/Union (3).png'
import '../../helpers/settings.css'
import Image from '../../assets/images/Rectangle 10.png'
import Book from '../../assets/images/Open-Book-Transparent-Background-PNG-2 1.png'
import {data} from '../../data/collection'

const Home = ()=>{
    const fakeArr = [1,1,1]
    return <React.Fragment>
        <Header/>
        <div className={clas.home_wrapper}>
            <div className="container">
                <div className={clas.inner}>
                    <div className={clas.banner}>
                        <div className={clas.slider_wrapper} style={{backgroundImage: `url(${Bg})`}}>
                            <Slider {...settings}>
                                {
                                    data.map((el)=>{
                                        return <div className={clas.slider_cards}  >
                                            <div className={clas.left_side}>
                                                <h1>
                                                Скидка 10% на приобретение ПЕРВОЙ КНИГИ
                                                </h1>
                                                <button>Подробнее</button>
                                            </div>
                                            <img src={Book} alt="" />
                                        </div>
                                    })
                                }
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
            <div className={clas.sales_ads}>
                {
                    fakeArr.map(()=>{
                        return <div className={clas.sale_card}><img src={Image} alt="" /></div>
                    })
                }
            </div>
            <div className={clas.products}>
                <div className="container">
                    <div className={clas.inner}>
                        {
                            data.map((el, index)=>{
                                return <Shopcontainer name={el.name} data={el.products}/>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </React.Fragment>
}

export default Home