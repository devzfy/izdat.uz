import clas from './main.module.scss'
import {Header, Footer, Banner
} from '../../container'
import { Shopcard } from '../../components'
import {data} from '../../data/collection'
const SeriesSingle = ()=>{
    return <div className={clas.series_wrapper}>
        <Header />
        <Banner image={'https://images.unsplash.com/photo-1526243741027-444d633d7365?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'}/>
        <div className="container">
            <h1>Записки о Шерлоке Холмсе. Артур Конан Дойл</h1>
            <p>Серия книг</p>
            <div className={clas.single_books_wrapper}>
                {
                    data[0].products.map(el =>{
                        return <div className={clas.books}>
                        <Shopcard
                            image={el.image}
                            title={el.title}
                            rate={el.rate}
                            rateCount={el.rateCount}
                            price={el.price}
                            sale={el.sale}
                            saleprice={el.saleprice}
                        />
                    </div>
                    })
                }
            </div>
        </div>
        <Footer/>
    </div>
}

export default SeriesSingle