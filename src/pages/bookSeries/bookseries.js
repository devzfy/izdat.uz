import clas from './main.module.scss'
import {  Banner, Recommend, Sidebar } from '../../container'
import React, {useState } from 'react'
import { PaginationCustome, Shopcard } from '../../components'
import {GetData} from '../../hooks/getdata'
import {set_book} from '../../redux/action/action'
import { useDispatch } from 'react-redux'
import { Filter } from '../../assets/icons'
import FilterContent from '../../container/filter/filter'


const BookSeries = ()=>{
    const [filter, setFilter] = useState(false)
    const dispatch = useDispatch()
    const [loading,data, error] = GetData('https://www.googleapis.com/books/v1/volumes?q=fiction&filter=paid-ebooks&key=AIzaSyC9ROl3QupFvo-5ZqG3AD7LS_ECZqy8GsI' + `&maxResults=${'16'}`)
    if(loading) return 'Loading ...'
    if(error) return null
    console.log(data);
   
      const addCard = async (id)=>{
        const book = await data?.items.find(el => el.id === id)
        dispatch(set_book(book))
      }
    return <React.Fragment>
        <Banner image={'https://cdn-v2.asla.org/uploadedImages/CMS/Shop/Bookstore/books.jpg'}/>
        <div className={clas.bookseries_wrapper}>
            <h1>Серии</h1>
            <div className="container">
                <div className={clas.inner}>
                    <div className={clas.sidebar_wrapper}>
                        <Sidebar/>
                    </div>
                    <div className={clas.filter_btn}>
                        <button onClick={()=> setFilter(true)}>
                            <span>Каталог</span>
                            <Filter/>
                        </button>
                    </div>
                    <div className={clas.right_side}>
                        <h1 className={clas.res_holder}>Все товары</h1>
                        <div className={clas.bookseries_wrapper_cards}
                        >
                            {
                                data.items?.map((el, index)=>{
                                    return <div className={clas.card} key={index}
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
                                            add={addCard}
                                            id={el.id}
                                        />
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
                        <div className={clas.pag}>
                            <PaginationCustome/>
                        </div>
                    <div className="container">
                    <Recommend/>
                    </div>
                    <FilterContent state={filter} setState={setFilter}/>
    </React.Fragment>
}
export default BookSeries