import clas from './main.module.scss'
import {data} from '../../data/collection'
import { Header, Footer, Banner, Shopcontainer, Recommend } from '../../container'
import React from 'react'


const BookSeries = ()=>{
    return <React.Fragment>
        <Header/>
        <Banner title={'Cерия книги'} image={'https://cdn-v2.asla.org/uploadedImages/CMS/Shop/Bookstore/books.jpg'}/>
        <div className={clas.bookseries_wrapper}>
            <div className="container">
                <div className={clas.inner}>
                    {
                        data?.slice(0,4).map((el)=>{
                            return <Shopcontainer name={el.name} data={el.products}/>
                        })
                    }
                </div>
                <Recommend/>
            </div>
        </div>

        <Footer/>
    </React.Fragment>
}
export default BookSeries