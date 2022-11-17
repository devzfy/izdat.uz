import clas from './main.module.scss'
import Image from '../../assets/images/banner.png'
import React from 'react'
import { Header, Footer, Recommend } from '../../container'
import { Link } from 'react-router-dom'
import { writer } from '../../data/collection'
import { PaginationCustome } from '../../components'

const Writers = () => {

    return <React.Fragment>
        <Header />
        <div className={clas.Writers_wrapper}>
            <div className={clas.banner}>
                <img src={Image} alt="" />
            </div>
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
                                                                <Link to={'/writers/1'} className={clas.single_navigate_link} to={'/writers/1'}>Подробнее</Link>
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
                                <PaginationCustome/>
                            </div>
                        )
                    })
                }
                </div>
            </div>

            <Recommend/>
        </div>
        <Footer />
    </React.Fragment>
}

export default Writers