import clas from './main.module.scss'
import {data} from '../../data/collection'
import { Header, Footer, Banner, Recommend, Sidebar } from '../../container'
import React, { useEffect, useState } from 'react'
import { Shopcard } from '../../components'



const BookSeries = ()=>{
    const [bookData, setBookData] = useState([])
    useEffect(()=>{
        fetchData()
    },[])
    const fetchData = async ()=>{
        const data = await fetch('https://www.googleapis.com/books/v1/volumes?q=romance&filter=paid-ebooks&key=AIzaSyC9ROl3QupFvo-5ZqG3AD7LS_ECZqy8GsI' + '&maxResults=40')
        const book = await data.json()
       setBookData(book.items)
    }
    console.log(bookData);
    return <React.Fragment>
        <Header/>
        <Banner image={'https://cdn-v2.asla.org/uploadedImages/CMS/Shop/Bookstore/books.jpg'}/>
        <div className={clas.bookseries_wrapper}>
            <div className="container">
                <div className={clas.inner}>
                    <div className={clas.sidebar_wrapper}>
                        <Sidebar/>
                    </div>
                    <div className={clas.bookseries_wrapper_cards}>
                        {
                            bookData?.map((el, index)=>{
                                return <div className={clas.card} key={index}>
                                    <Shopcard
                                        image={el.volumeInfo.imageLinks.smallThumbnail}
                                        title={el.volumeInfo.title}
                                        rate={el.volumeInfo.averageRating}
                                        rateCount={el.volumeInfo.ratingsCount? el.volumeInfo.ratingsCount : 0}
                                        price={el.saleInfo.retailPrice? el.saleInfo.retailPrice.amount : 0}
                                        sale={false}
                                        saleprice={''}
                                    />
                                </div>
                            })
                        }
                    </div>
                </div>
               
            </div>
        </div>
                    <div className="container">
                    <Recommend/>
                    </div>
        <Footer/>
    </React.Fragment>
}
export default BookSeries