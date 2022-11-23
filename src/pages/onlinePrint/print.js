import React from 'react'
import { PaginationCustome } from '../../components'
import { Header, Footer, Banner, Recommend } from '../../container'
import clas from './main.module.scss'
import { Link } from 'react-router-dom'
const Print = () => {
    return <React.Fragment>
        <Header />
        <Banner image={'https://images.unsplash.com/photo-1503694978374-8a2fa686963a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'} />
        <div className={clas.SinglePrint_wrpper}>
            <div className="container">
                <div className={clas.inner}>
                    <h1 className={clas.holder}>Онлайн печать</h1>
                    {
                        [1, 1].map(() => {
                            return <div className={clas.prints}>
                                {
                                    [1, 1, 1].map(() => {
                                        return <div className={clas.item_wrap}>
                                            <div className={clas.image}>
                                                <img src="https://images.unsplash.com/photo-1631270314738-e6f6827f8d9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                                            </div>
                                            <Link to={'/print/1'} className={clas.text}>
                                                <span>Фотоальбомы</span>
                                            </Link>
                                        </div>
                                    })
                                }
                            </div>
                        })
                    }
                    <PaginationCustome/>
                </div>
            </div>
        </div>
        <Recommend />
        <Footer />
    </React.Fragment>
}

export default Print