import {Banner, Recommend } from '../../container'
import clas from './main.module.scss'
import React, { useState } from 'react'
import { Shopcard, PaginationCustome } from '../../components'
import Image1 from '../../assets/images/s-l500 2.png'
import { Filter, Planet } from '../../assets/icons'
import FilterContent from '../../container/filter/filter'
const AudioBook = () => {
    const [filter, setFilter] = useState(false)
    const data1 = {
        image: Image1,
        name: 'Тонкое искусство пофигизма. Марк Мэнсон',
        rate: 4,
        count: '165',
        price: '102',
        link: '/audio-book/1'
    }

    const titles = ['Детектив', 'Детские', 'Наука и образование', 'Психология', 'Радиоспектакль']
    const [tab, setTab] = useState(true)

    return <React.Fragment>
        <Banner image={'https://images.unsplash.com/photo-1501808503570-36559610f95e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1971&q=80'} />
        <div className={clas.AudioBook_wrapper}>
            <h1 className={clas.holder}>
                Аудиокниги
            </h1>
            <div className={clas.audio_books}>
                <div className={clas.tab}>
                    <div className="container">
                        <button className={tab ? clas.active : ''} onClick={() => setTab(true)}>Популярные</button>
                        <button className={tab ? '' : clas.active} onClick={() => setTab(false)}>Новые</button>
                    </div>
                </div>
                <div className={clas.change_blocks}>
                    <div className="container">
                        <div className={clas.first_block}>
                            <div className={clas.cards}>
                                {
                                    [1, 1, 1, 1, 1].map(() => {
                                        return <div className={clas.vanilla_card}>
                                            <Shopcard
                                            image={data1.image}
                                            title={data1.name}
                                            rate={data1.rate}
                                            rateCount={data1.count}
                                            sale={false}
                                            saleprice={''}
                                            link={data1.link}
                                            price={data1.price}
                                        />
                                        </div>
                                    })
                                }
                            </div>
                            <div className={clas.pag}>
                            <PaginationCustome />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className={clas.classical_music}>
                
                <h1 className={clas.holder}>Классическая литература</h1>
                <div className="container">
                <button className={clas.filter_btn} onClick={()=> setFilter(true)}>
                    <span>Каталог</span>
                    <Filter/>
                </button>
                <h1 className={` ${clas.all_cards}`}>Все товары</h1>
                    <div className={clas.cards}>
                        {
                            [1, 1, 1, 1, 1].map(() => {
                                return <div className={clas.vanilla_card}>
                                    <Shopcard
                                    image={data1.image}
                                    title={data1.name}
                                    rate={data1.rate}
                                    rateCount={data1.count}
                                    sale={false}
                                    saleprice={''}
                                    link={data1.link}
                                    price={data1.price}
                                />
                                </div>
                            })
                        }
                    </div>
                    <div className={clas.pag}>
                    <PaginationCustome />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className={clas.categories}>
                    <div className={clas.category}>
                        <Planet />
                        <span>Фантастика</span>
                    </div>

                    <div className={clas.category}>
                        <Planet />
                        <span>Художественная литература</span>
                    </div>
                    <div className={clas.category}>
                        <Planet />
                        <span>Мистика</span>
                    </div>

                    <div className={clas.category}>
                        <Planet />
                        <span>Комедия</span>
                    </div>
                </div>
            </div>

            <div className={clas.story_books}>
                <h1 className={clas.holder}>История</h1>
                <div className="container">
                    <div className={clas.cards}>
                        {
                            [1, 1, 1, 1, 1].map(() => {
                                return <div className={clas.vanilla_card}>
                                <Shopcard
                                image={data1.image}
                                title={data1.name}
                                rate={data1.rate}
                                rateCount={data1.count}
                                sale={false}
                                saleprice={''}
                                link={data1.link}
                                price={data1.price}
                            />
                            </div>
                            })
                        }
                    </div>
                            <div className={clas.pag}>
                            <PaginationCustome />
                            </div>
                </div>
            </div>
            <div className="container">
                <div className={clas.ads}></div>
            </div>

            <div className={clas.column_books}>
                <div className="container">
                    <div className={clas.inner_book}>
                        {
                            titles.map(el => {
                                return <>
                                    <h1 className={clas.holder}>{el}</h1>
                                    <div className={clas.cards}>
                                        {
                                            [1, 1, 1, 1, 1].map(() => {
                                                return<div className={clas.vanilla_card}>
                                                <Shopcard
                                                image={data1.image}
                                                title={data1.name}
                                                rate={data1.rate}
                                                rateCount={data1.count}
                                                sale={false}
                                                saleprice={''}
                                                link={data1.link}
                                                price={data1.price}
                                            />
                                            </div>
                                            })
                                        }
                                    </div>
                                        <div className={clas.pag}>
                                        <PaginationCustome />
                                        </div>
                                </>
                            })
                        }
                    </div>
                </div>
                <div className={clas.mobil_pag}>
                <PaginationCustome/>
                </div>
            </div>
        </div>
        <div className="container">
        <Recommend />
        </div>
        <FilterContent state={filter} setState={setFilter}/>
    </React.Fragment>
}

export default AudioBook