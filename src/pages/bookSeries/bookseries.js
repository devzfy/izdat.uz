import clas from './main.module.scss'
import { Header, Footer, Banner, Recommend, Sidebar } from '../../container'
import React, { useEffect, useState } from 'react'
import { PaginationCustome, Shopcard } from '../../components'
import { motion } from 'framer-motion'
import {GetData} from '../../hooks/getdata'


const BookSeries = ()=>{
    // const [page, setPage] = useState('16')
    const [loading,data, error] = GetData('https://www.googleapis.com/books/v1/volumes?q=fiction&filter=paid-ebooks&key=AIzaSyC9ROl3QupFvo-5ZqG3AD7LS_ECZqy8GsI' + `&maxResults=${'16'}`)
    if(loading) return 'Loading ...'
    if(error) return null
    console.log(data);
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
          }
        }
      };
      const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
      };
    return <React.Fragment>
        <Header/>
        <Banner image={'https://cdn-v2.asla.org/uploadedImages/CMS/Shop/Bookstore/books.jpg'}/>
        <div className={clas.bookseries_wrapper}>
            <div className="container">
                <div className={clas.inner}>
                    <div className={clas.sidebar_wrapper}>
                        <Sidebar/>
                    </div>
                    <div className={clas.right_side}>
                        <motion.div className={clas.bookseries_wrapper_cards}
                            initial="hidden"
                            animate="visible"
                            variants={container}
                        >
                            {
                                data.items?.map((el, index)=>{
                                    return <motion.div className={clas.card} key={index}
                                        variants={item}

                                    >
                                        <Shopcard
                                            image={el.volumeInfo.imageLinks.smallThumbnail}
                                            title={el.volumeInfo.title}
                                            rate={el.volumeInfo.averageRating}
                                            rateCount={el.volumeInfo.ratingsCount? el.volumeInfo.ratingsCount : 0}
                                            price={el.saleInfo.retailPrice? el.saleInfo.retailPrice.amount : 0}
                                            sale={false}
                                            saleprice={''}
                                            link={'/book-series/1'}
                                        />
                                    </motion.div>
                                })
                            }
                        </motion.div>
                        <PaginationCustome/>
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