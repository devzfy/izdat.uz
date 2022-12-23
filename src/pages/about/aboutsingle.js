import clas from "./main.module.scss";
import { Recommend } from "../../container";
import { Shopcard } from "../../components";
import { data } from "../../data/collection";
import React, { useState } from "react";
import { useWindowDimensions } from "../../hooks/useDimensions";
import Image from '../../assets/images/Rectangle 94.png'
import Image2 from '../../assets/images/Rectangle 94.png'

const WriterSingle = () => {
  console.log(data[0].products);
  const [tab, setTab] = useState(true);
  const { width, height } = useWindowDimensions();
  console.log(width);
  const tabTrue = () => {
    setTab(true);
  };
  const tabFalse = () => {
    setTab(false);
  };

  return (
    <React.Fragment>
      <div className={clas.tabbar}>
        <div className="container">
          <button onClick={tabTrue} className={tab ? clas.active : ""}>
            Автор
          </button>
          <button onClick={tabFalse} className={tab ? "" : clas.active}>
            Произведения автора
          </button>
        </div>
      </div>
      <div className={clas.writersingle_wrapper}>
        <div className="container">
          {width <= 500 ? (
            <>
              {tab ? (
                <div className={clas.page_intro}>
                  <img
                    src=" https://upload.wikimedia.org/wikipedia/commons/3/30/%D0%93%D0%B0%D1%84%D1%83%D1%80_%D0%93%D1%83%D0%BB%D1%8F%D0%BC_%28%D0%BF%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82%29.jpg"
                    alt=""
                  />
                  <h1>Гафур Гулям</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit est consequuntur a sequi cumque accusamus molestias consequatur corporis. Illo sed, architecto dicta unde odit esse modi! Praesentium vero repudiandae a?</p>
                  <div className={clas.text_image}>
                    <div className={clas.images}>
                    <img src={Image} alt="" />
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SvLmKKLdZlNaMw_2kaBuZt_9vP2vamv3PQ&usqp=CAU" alt="" />
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTODEHubHfxjqXkejp_FVTF_J12RLg4L1QFm08baNWYDSKAznY_93rrEakhzwDmWtbdQjo&usqp=CAU" alt="" />
                      <img src={Image2} alt="" /> 
                    </div>
                    <p>
                      Гафур Гулям родился 27 апреля (10 мая) 1903 год в Ташкенте.
                      Его отец читал стихотворения узбекских и персидских поэтов,
                      знал русский язык и сам писал стихи. В их доме бывали поэты
                      Мукими, Фуркат, Асири, Хислат и другие. С осени 1916 года
                      Гафур стал обучаться в училище. После смерти отца, а затем и
                      матери был беспризорником. Перепробовал десятки профессий. В
                      годы Гражданской войны был принят в детский дом. Стал
                      работать наборщиком в типографии и учиться на педагогических
                      курсах.
                    </p>
                  </div>
                </div>
              ) : (
                <div className={clas.writer_books}>
                  <h1>Произведения автора</h1>
                  <div className={clas.books}>
                    {data[0].products.map((el) => {
                      return <div className={clas.book_card}>
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

                    })}
                  </div>
                </div>
              )}
            </>
          ) : (
            <>
              <div className={clas.page_intro}>
                <img
                  src=" https://upload.wikimedia.org/wikipedia/commons/3/30/%D0%93%D0%B0%D1%84%D1%83%D1%80_%D0%93%D1%83%D0%BB%D1%8F%D0%BC_%28%D0%BF%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82%29.jpg"
                  alt=""
                />
                <h1>Гафур Гулям</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium illum, ipsum cum veniam voluptate ipsa sunt eligendi excepturi doloremque beatae iusto dolore suscipit iure, enim voluptatibus quia? Quaerat, et aperiam.</p>
                <div className={clas.text_image}>
                    <div className={clas.images}>
                      <img src={Image} alt="" />
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SvLmKKLdZlNaMw_2kaBuZt_9vP2vamv3PQ&usqp=CAU" alt="" />
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTODEHubHfxjqXkejp_FVTF_J12RLg4L1QFm08baNWYDSKAznY_93rrEakhzwDmWtbdQjo&usqp=CAU" alt="" />
                      <img src={Image2} alt="" />
                    </div>
                    <p>
                      Гафур Гулям родился 27 апреля (10 мая) 1903 год в Ташкенте.
                      Его отец читал стихотворения узбекских и персидских поэтов,
                      знал русский язык и сам писал стихи. В их доме бывали поэты
                      Мукими, Фуркат, Асири, Хислат и другие. С осени 1916 года
                      Гафур стал обучаться в училище. После смерти отца, а затем и
                      матери был беспризорником. Перепробовал десятки профессий. В
                      годы Гражданской войны был принят в детский дом. Стал
                      работать наборщиком в типографии и учиться на педагогических
                      курсах.
                    </p>
                  </div>
              </div>

              <div className={clas.writer_books}>
                <h1>Произведения автора</h1>
                <div className={clas.books}>
                  {data[0]?.products.map((el) => {
                    return <div className={clas.book_card}>
                      <Shopcard
                        image={el.image}
                        title={el.title}
                        rate={el.rate}
                        rateCount={el.rateCount}
                        price={el.price}
                        sale={el.sale}
                        saleprice={el.saleprice}
                      />
                    </div>;
                  })}
                </div>
              </div>
            </>
          )}

          <Recommend />
        </div>
      </div>
    </React.Fragment>
  );
};

export default WriterSingle;
