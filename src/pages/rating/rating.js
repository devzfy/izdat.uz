import clas from './main.module.scss'
import {  Banner, Recommend } from '../../container'
import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../../assets/images/Rectangle 142.png'


const Rating = ()=>{
    const arr = [
        {
            image: Image,
            text: 'Рейтинги авторов',
            link: '/rating/author'
        },
        {
            image: Image,
            text: 'Рейтинги книг и журналов',
            link: '/rating/book'
        },
        {
            image: Image,
            text: 'Рейтинги издательств',
            link: '/rating/publishing'
        }
    ]
    return <React.Fragment>
        <Banner image={"https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}/>
            <div className={clas.Rating_wrapper}>
                <div className="container">
                <h1>Рейтинги</h1>

<div className={clas.rate_cards}>
    {
        arr.map(el =>{
            return <div className={clas.item}>
            <div className={clas.item_image}>
                <img src={el.image} alt="" />
            </div>
            <div className={clas.item_text}>
                <h3>{el.text}</h3>
                <Link to={el.link} className={clas.item_link}>Подробнее</Link>
            </div>
        </div>
        })
    }
</div>
<Recommend/>
                </div>
            </div>
    </React.Fragment>
}

export default Rating