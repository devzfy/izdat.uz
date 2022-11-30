import clas from './main.module.scss'
import { Header, Footer, Recommend} from '../../container'
import { Shopcard } from '../../components'
import { data } from '../../data/collection'
import React, { useState } from 'react'
import { useWindowDimensions } from '../../hooks/useDimensions'

const WriterSingle = () => {
    const [tab, setTab] = useState(true)
    const {width, height} = useWindowDimensions()
    console.log(width);
    const tabTrue = ()=>{
        setTab(true)
    }
    const tabFalse = ()=>{
        setTab(false)
    }

    return <React.Fragment>
        <Header />
        <div className={clas.tabbar}>
            <div className="container">
                <button onClick={tabTrue}  className={tab ? clas.active : ''}>Автор</button>
                <button onClick={tabFalse} className={tab ? '' : clas.active}>Произведения автора</button>
            </div>
        </div>
        <div className={clas.writersingle_wrapper}>
            <div className="container">
                {
                    width  <= 500 ? <>
                    {
                        tab ? <div className={clas.page_intro}>
                        <img src=" https://upload.wikimedia.org/wikipedia/commons/3/30/%D0%93%D0%B0%D1%84%D1%83%D1%80_%D0%93%D1%83%D0%BB%D1%8F%D0%BC_%28%D0%BF%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82%29.jpg" alt="" />
                        <h1>Гафур Гулям</h1>
                        <p>
                            Гафур Гулям родился 27 апреля (10 мая) 1903 год в Ташкенте. Его отец читал стихотворения узбекских и персидских поэтов, знал русский язык и сам писал стихи. В их доме бывали поэты Мукими, Фуркат, Асири, Хислат и другие.
    
                            С осени 1916 года Гафур стал обучаться в училище. После смерти отца, а затем и матери был беспризорником. Перепробовал десятки профессий. В годы Гражданской войны был принят в детский дом. Стал работать наборщиком в типографии и учиться на педагогических курсах. Окончил Ташкентский педагогический институт. В 1919—1927 годах работал учителем, директором школы, председателем Союза работников просвещения, занимался организацией детских интернатов и приёмных пунктов.
    
                            С 1923 года начал печатать свои первые стихотворения, а также очерки и юмористические рассказы. Первое стихотворение Г. Гуляма «Дети Феликса», рассказывающее о детях-сиротах было опубликовано в журнале «Маориф ва укитувчи» в 1923 году. По словам самого Г. Гуляма на его творчество сильное влияние оказало творчество В. В. Маяковского. Переводил на узбекский язык произведения А. С. Грибоедова, М. Ю. Лермонтова, В. В. Маяковского, Н. Хикмета, Ш. Руставели, Низами, Данте, П. Бомарше, У. Шекспира.
                        </p>
                    </div>:<div className={clas.writer_books}>
                    <h1>
                    Произведения автора
                    </h1>
                    <div className={clas.books}>
                        {
                            data[0]?.products.map(el => {
                                return <div className={clas.book_card}><Shopcard
                                image={el.image}
                                title={el.title}
                                rate={el.rate}
                                rateCount={el.rateCount}
                                price={el.price}
                                sale={el.sale}
                                saleprice={el.saleprice}
                                /></div>
                            })
                        }
                    </div>
                </div>
                    }
                        

                
                    </>:<>
                    <div className={clas.page_intro}>
                    <img src=" https://upload.wikimedia.org/wikipedia/commons/3/30/%D0%93%D0%B0%D1%84%D1%83%D1%80_%D0%93%D1%83%D0%BB%D1%8F%D0%BC_%28%D0%BF%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82%29.jpg" alt="" />
                    <h1>Гафур Гулям</h1>
                    <p>
                        Гафур Гулям родился 27 апреля (10 мая) 1903 год в Ташкенте. Его отец читал стихотворения узбекских и персидских поэтов, знал русский язык и сам писал стихи. В их доме бывали поэты Мукими, Фуркат, Асири, Хислат и другие.

                        С осени 1916 года Гафур стал обучаться в училище. После смерти отца, а затем и матери был беспризорником. Перепробовал десятки профессий. В годы Гражданской войны был принят в детский дом. Стал работать наборщиком в типографии и учиться на педагогических курсах. Окончил Ташкентский педагогический институт. В 1919—1927 годах работал учителем, директором школы, председателем Союза работников просвещения, занимался организацией детских интернатов и приёмных пунктов.

                        С 1923 года начал печатать свои первые стихотворения, а также очерки и юмористические рассказы. Первое стихотворение Г. Гуляма «Дети Феликса», рассказывающее о детях-сиротах было опубликовано в журнале «Маориф ва укитувчи» в 1923 году. По словам самого Г. Гуляма на его творчество сильное влияние оказало творчество В. В. Маяковского. Переводил на узбекский язык произведения А. С. Грибоедова, М. Ю. Лермонтова, В. В. Маяковского, Н. Хикмета, Ш. Руставели, Низами, Данте, П. Бомарше, У. Шекспира.
                    </p>
                </div>

                <div className={clas.writer_books}>
                    <h1>
                    Произведения автора
                    </h1>
                    <div className={clas.books}>
                        {
                            data[0]?.products.map(el => {
                                 <div className={clas.book_card}><Shopcard
                                image={el.image}
                                title={el.title}
                                rate={el.rate}
                                rateCount={el.rateCount}
                                price={el.price}
                                sale={el.sale}
                                saleprice={el.saleprice}
                                /></div>
                            })
                        }
                    </div>
                </div>
                    </>
                }

                <Recommend/>
            </div>
        </div>
        <Footer />
    </React.Fragment>
}

export default WriterSingle