import React, { useState } from 'react'
import clas from './main.module.scss'
import Slider from 'react-slick'
import { settings } from '../../helpers/settings'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Bg from '../../assets/images/Union (3).png'
import { Filter } from '../../assets/icons'
import FilterContent from '../../container/filter/filter';
import '../../helpers/settings.css'
import Image from '../../assets/images/Rectangle 10.png'
import Book from '../../assets/images/Open-Book-Transparent-Background-PNG-2 1.png'
import { data } from '../../data/collection'
import { Shopcard } from '../../components'
import { categories } from '../../data/base';

const Home = () => {
    const [filter , setFilter] = useState(false)

    const fakeArr = [1, 1, 1]
    return <React.Fragment>
        <div className={clas.home_wrapper}>
            <div className="container">
                <div className={clas.inner}>
                    <div className={clas.banner}>
                        <div className={clas.slider_wrapper} style={{ backgroundImage: `url(${Bg})` }}>
                            <Slider {...settings}>
                                {
                                    data.slice(0, 4).map((el, index) => {
                                        return <div key={index} className={clas.slider_cards}  >
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
                    fakeArr.map((el, index) => {
                        return <div key={index} className={clas.sale_card}><img src={Image} alt="" /></div>
                    })
                }
            </div>
            <div className={clas.result_header}>
                <div className="container">
                    <div className={clas.result_inner}>
                        <div className={clas.cate_name}>
                            <h2>Категории</h2>
                        </div>
                        <div className={clas.result_count}>
                            <button>Художественная литература</button>
                            <h3>Показано <span>18</span> результатов</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">

                <div className={clas.products}>
                    <div className={clas.sidebar}>

                        <ul className={clas.category_ul}>
                            {
                                categories.map((el,index) => {
                                    return <li key={index}>
                                        <span className={clas.category_tag}>{el.name.substring(0,2)}</span>
                                        <button className={clas.category_btn}>{el.name}</button>
                                        <span className={clas.category_count}>393</span>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                    <div className={clas.inner}>
                        {
                            data[0].products.map((el, index) => {
                                return <div key={index} className={clas.showing_cards}>
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

                <div className={clas.filter}>
                        <div className={clas.filter_btn}>
                            <button onClick={()=> setFilter(true)}>
                                <span>Каталог</span>
                                <Filter />
                            </button>
                        </div>
                        <h1>Все товары</h1>
                        <div className={clas.filter_results}>
                            {
                                data[0].products.map((el,index) => {
                                    return <div key={index} className={clas.result_card}>
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
            </div>
            <FilterContent setState={setFilter} state={filter}/>
        </div>
    </React.Fragment>
}

export default Home