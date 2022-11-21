import clas from './main.module.scss'
import {Header, Footer, Banner, Recommend} from '../../container'
import React from 'react'

const Partners = ()=>{
    return <React.Fragment>
        <Header/>
        <Banner image={'https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'}/>
        <div className={clas.Partners_wrapper}>
            <div className="container">
            <h1 className={clas.holder}>Нашим партнерам</h1>
            <div className={clas.Partners}>
                {
                    [1,1,1,1,1].map(el => {
                        return <div className={clas.Partner_info}>
                            <div className={clas.left}>
                                <img src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
                            </div>
                            <div className={clas.right}>
                                <h3>Lorem ipsum dolor sit amet, consectet adipiscing elit.</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum ornare dis consectetur aliquet. Morbi lacus non elementum sed ut turpis. </p>
                                <ul>
                                    <li>Адрес:</li>
                                    <li>Lorem ipsum dolor sit amet, adipiscing elit</li>
                                </ul>
                                <ul>
                                    <li>Номер телефона:</li>
                                    <li>+998 99 999 99 99</li>
                                </ul>

                                <ul>
                                    <li>Время работы:</li>
                                    <li>09:00-18:00</li>
                                </ul>
                            </div>
                        </div>
                    })
                }
            </div>
            </div>
        </div>
        <div className="container">
            <Recommend/>
        </div>
        <Footer/>
    </React.Fragment>
}

export default Partners