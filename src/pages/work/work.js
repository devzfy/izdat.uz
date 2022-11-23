import React, { useState } from 'react'
import clas from './main.module.scss'
import {Header, Footer, Recommend, Banner} from '../../container'
import { PaginationCustome } from '../../components'
import { Link } from 'react-router-dom'
const Work = ()=>{
    return <React.Fragment>
        <Header/>
        <Banner image={'https://images.unsplash.com/photo-1607003881177-9b4e0d844536?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'}/>
        <div className={clas.Work_wrapper}>
            <div className="container">
                <div className={clas.inner}>
                    <div className={clas.short_contents}>
                    <h1 className={clas.holder}>Работа специалистам</h1>
                    {
                        [1,1,1,1].map(() => {
                            return <div className={clas.work_cards}>
                            <div className={clas.top}>
                                <h4>Написать 2 статьи для сайта</h4>
                                <h4>450 000сум</h4>
                            </div>
                            <div className={clas.middle}>
                                <h5>Опубликовано: 15.10.2022</h5>
                                <h5>Ташкент, Узбекистан</h5>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est nisl vitae ac sagittis, maecenas urna urna, et sagittis. Enim, fringilla placerat purus eget nulla sollicitudin iaculis interdum massa. A scelerisque vitae integer magna placerat mauris. Accumsan faucibus ipsum tellus diam massa. A scelerisque vitae </p>
                            <div className={clas.bottom}>
                                <div className={clas.btns}>
                                    <button>Откликнуться</button>
                                    <Link className={clas.single_link} to={'/work/1'}>Подробнее</Link>
                                </div>
                                <div className={clas.views}>
                                    <span>Откликнулись: 14</span>
                                    <span>Просмотрели: 40</span>
                                </div>
                            </div>
                        </div>
                        })
                    }
                    <PaginationCustome/>
                    </div>
                </div>
            </div>
        </div>
        <Recommend/>
        <Footer/>
    </React.Fragment>
}

export default Work