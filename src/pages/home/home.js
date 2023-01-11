import React, { useState, useEffect } from "react";
import clas from "./main.module.scss";
import Slider from "react-slick";
import { settings } from "../../helpers/settings";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Filter, Loupe, Fantasy, Motivation, Comedic, Business, Pen, Thriller } from "../../assets/icons";
import FilterContent from "../../container/filter/filter";
import "../../helpers/settings.css";
import Image from "../../assets/images/Rectangle 10.png";
import { Shopcard } from "../../components";
import { categories } from "../../data/base";
import { motion } from "framer-motion";
import BackImage from '../../assets/icons/pexels-josh-sorenson-990432.jpg'
import Book from '../../assets/images/Open-Book-Transparent-Background-PNG-2 1.png'
import AOS from "aos";
import 'aos/dist/aos.css'
import { GetData } from "../../hooks/getdata";
import Loading from "../../container/loading/loading";
import Image2 from "../../assets/images/3D-Book-Transparent.png";
import Image5 from "../../assets/images/48-482463_lifestyle-builders-book-cover-3d-final-book-cover-removebg-preview (1).png";
import Image6 from '../../assets/images/Лермонтов_Герой-нашего-времени-removebg-preview (1).png'
import Image7 from '../../assets/images/16642110_1-removebg-preview (1).png'
import Image8 from '../../assets/images/61fL0wtmhXL-removebg-preview (1).png'
const Home = () => {

  useEffect(() => {
    AOS.init()
  }, [])
  const [filter, setFilter] = useState(false);
  const [loading, data, error] = GetData('https://www.googleapis.com/books/v1/volumes?q=thriller&filter=paid-ebooks&key=AIzaSyC9ROl3QupFvo-5ZqG3AD7LS_ECZqy8GsI' + `&maxResults=${'16'}`)
  if (loading) return <Loading />
  if (error) return null
  const fakeArr = [1, 1, 1];

  return (
    <React.Fragment>
      <div className={clas.home_wrapper}>
        <div className="slider_container">
          <div className={clas.inner}>
            <div className={clas.banner}>
              <motion.div
                className={clas.slider_wrapper}
              >
                <div className={clas.blue_square}></div>
                <div className={clas.back_image} style={{
                  backgroundImage: `url(${BackImage})`
                }}>

                </div>
                <div className="container">
                  <div className={clas.slider}
                    data-aos="fade-up"
                    data-aos-duration="4000"
                    data-aos-anchor-placement="center-bottom"
                  >
                    <Slider {...settings}>
                      {
                        data.items?.map((el, index) => {
                          return <div className={clas.slider_wrapper_slides}>
                            <div data-aos="fade-right" data-aos-duration="1000" className={clas.bla_bla}>
                              <div className={clas.slider_text}>
                                <h3> Выгодное Предложение</h3>
                                <p>
                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos odit voluptatem numquam repellat earum soluta ratione, voluptas voluptatibus vitae necessitatibus rem fugit aperiam reiciendis quaerat delectus, nesciunt quos omnis.
                                </p>
                              </div>
                              <div className={clas.slider_image}>

                                <img data-aos="flip-left"
                                  data-aos-easing="ease-out-cubic"
                                  data-aos-duration="2000" src={Book} alt="" />
                              </div>
                            </div>
                            <button className={clas.btn_16}>Подробнее</button>
                          </div>
                        })
                      }
                    </Slider>
                    <div className={clas.count_slide}>
                      <span>01</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <div className={clas.sales_ads}>
          {fakeArr.map((el, index) => {
            return (
              <div key={index} className={clas.sale_card}>
                <img src={Image} alt="" />
              </div>
            );
          })}
        </div>
        <div className={clas.result_header}>
          <div className="container">
            <div className={clas.result_inner}>
              <div className={clas.cate_name}>
                <h2>Категории</h2>
              </div>
              <div className={clas.result_count}>
                <button>Художественная литература</button>
                <h3>
                  Показано <span>18</span> результатов
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className={clas.products}>
            <div className={clas.sidebar} data-aos="fade-right">
              <ul className={clas.category_ul}>
                {categories.map((el, index) => {
                  return (
                    <li key={index} data-aos="fade-up" data-aos-duration="4000">
                      <span className={clas.category_tag}>
                        {el.name.substring(0, 2)}
                      </span>
                      <button className={clas.category_btn}>{el.name}</button>
                      <span className={clas.category_count}>393</span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className={clas.inner}>
              {data.items?.slice(0,8).map((el, index) => {
                return <div data-aos="fade-up" className={clas.showing_cards} key={index}
                >
                  <Shopcard
                    image={el.volumeInfo.imageLinks.smallThumbnail}
                    title={el.volumeInfo.title}
                    rate={el.volumeInfo.averageRating}
                    rateCount={el.volumeInfo.ratingsCount ? el.volumeInfo.ratingsCount : 0}
                    price={el.saleInfo.retailPrice ? el.saleInfo.retailPrice.amount : 0}
                    sale={false}
                    saleprice={''}
                    link={'/book-series/1'}
                    id={el.id}
                  />
                </div>
              })}
          <div className={clas.most_cate}>
          <h1>Лучшие категории</h1>
          <div className={clas.cates_wrapper}>
            <div className={clas.big_cate}>
              <Fantasy/>
              <span>Фантастика</span>
            </div>
            <div className={clas.small_cates}>
              <div className={clas.cate}>
                <Motivation/>
                <span>Психология и <br />  мотивация</span>
              </div>
              <div className={clas.cate}>
                <Thriller/>
                <span>Tриллер</span>
              </div>
              <div className={clas.cate}>
              <Loupe/>
                <span>Детектив</span>
              </div>
              <div className={clas.cate}>
                <Business/>
                <span>Бизнес</span>
              </div>
              <div className={clas.cate}>
                <Pen/>
                <span>Художественная литература</span>
              </div>
              <div className={clas.cate}>
                <Comedic/>
                <span>Kомедийный</span>
              </div>
            </div>
          </div>
         </div>

          <div className={clas.continue_cards}>
          {data.items?.slice(0,12).map((el, index) => {
                return <div data-aos="fade-up" className={clas.showing_cards} key={index}
                >
                  <Shopcard
                    image={el.volumeInfo.imageLinks.smallThumbnail}
                    title={el.volumeInfo.title}
                    rate={el.volumeInfo.averageRating}
                    rateCount={el.volumeInfo.ratingsCount ? el.volumeInfo.ratingsCount : 0}
                    price={el.saleInfo.retailPrice ? el.saleInfo.retailPrice.amount : 0}
                    sale={false}
                    saleprice={''}
                    link={'/book-series/1'}
                    id={el.id}
                  />
                </div>
              })}
          </div>
            </div>
            
          </div>
          
         

          <div className={clas.filter}>
            <div className={clas.filter_btn}>
              <button onClick={() => setFilter(true)}>
                <span>Каталог</span>
                <Filter />
              </button>
            </div>
            <h1>Все товары</h1>
            <div className={clas.filter_results}>
              {data.items?.map((el, index) => {
                return <div className={clas.showing_cards} key={index}
                >
                  <Shopcard
                    image={el.volumeInfo.imageLinks.smallThumbnail}
                    title={el.volumeInfo.title}
                    rate={el.volumeInfo.averageRating}
                    rateCount={el.volumeInfo.ratingsCount ? el.volumeInfo.ratingsCount : 0}
                    price={el.saleInfo.retailPrice ? el.saleInfo.retailPrice.amount : 0}
                    sale={false}
                    saleprice={''}
                    link={'/book-series/1'}
                    id={el.id}
                  />
                </div>
              })}
            </div>
          </div>
        </div>
        <FilterContent setState={setFilter} state={filter} />
      </div>
    </React.Fragment>
  );
};

export default Home;
