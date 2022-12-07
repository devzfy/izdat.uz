import clas from './main.module.scss'
import Image from '../../assets/images/banner.png'
import React from 'react'
import {  Recommend, Banner } from '../../container'
import { Link } from 'react-router-dom'
import { writer } from '../../data/collection'
import { PaginationCustome } from '../../components'

const Writers = () => {

    return <React.Fragment>
        <div className={clas.Writers_wrapper}>
            <Banner image={Image}/>
            <div className="container">
                <div className={clas.writers_wrapper}>
                {
                    writer.map(el => {
                        return (
                            <div className={clas.writers_container}>
                                <h1>{el.name}</h1>
                                {
                                    el.writers?.map(el => (
                                        <div className={clas.writers_card_wrapper}>
                                            {
                                                el.humans.map(el => {
                                                    return (
                                                        <div className={clas.card}>
                                                            <div className={clas.top_place}>
                                                                <h3>{el.name}</h3>
                                                                <p>{el.title}</p>
                                                                <Link to={'/writers/1'} className={clas.single_navigate_link}>Подробнее</Link>
                                                            </div>
                                                            <div className={clas.bottom_place}>
                                                                <img src={el.image} alt="" />
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    ))
                                }
                                <div className={clas.pag}>
                                    <PaginationCustome/>
                                </div>
                                <div className={clas.see_more}>
                                    <button>Показать все</button>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
            </div>

            <div className='container'>
                <Recommend/>
            </div>
        </div>
    </React.Fragment>
}

export default Writers