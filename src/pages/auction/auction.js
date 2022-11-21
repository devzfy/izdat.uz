import clas from './main.module.scss'
import {Header, Footer, Banner, Recommend} from '../../container'
import React, { useEffect, useState } from 'react'
import {Rating} from 'react-simple-star-rating'

const Auction = ()=>{
    useEffect(()=>{
        fetchData()
    },[])
    const [data, setData] = useState()
    const fetchData = ()=>{
        fetch('https://www.googleapis.com/books/v1/volumes?q=shekspir&filter=paid-ebooks&key=AIzaSyC9ROl3QupFvo-5ZqG3AD7LS_ECZqy8GsI')
        .then(res => res.text())
        .then(res => setData(JSON.parse(res)))
        .catch(err => console.log(err))
    }
    console.log(data);
    return <React.Fragment>
        <Header/>
        <Banner image={'https://images.unsplash.com/photo-1517148892120-4d2da39c8dc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'}/>
        <h6>Аукцион</h6>
        <div className="container">
            <div className={clas.inner}>
                {
                    data?.items.map(el => {
                        return <div className={clas.auction_card} key={el.id}>
                            <div className={clas.image}>
                                <img src={el.volumeInfo.imageLinks?.smallThumbnail} alt="" />
                            </div>
                            <h2>{el.volumeInfo.title}</h2>
                            <p>{el.volumeInfo.description}</p>
                            <div className={clas.rating}>
                                <Rating initialValue={Math.floor(Math.random() * 5)} size={25}/>
                                <span>({el.volumeInfo.pageCount})</span>
                            </div>
                            <div className={clas.submit_btn}>
                                <button>Учавствовать</button>
                            </div>
                        </div>
                    })
                }
            </div>
            <Recommend/>
        </div>
        <Footer/>
    </React.Fragment>
}

export default Auction