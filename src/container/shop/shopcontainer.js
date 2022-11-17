import clas from './main.module.scss'
import {PaginationCustome, Shopcard} from '../../components'

const Shopcontainer = ({name,data})=>{
    return <div className={clas.Shopcontainer_wrapper}>
        <h1>{name}</h1>
        <div className={clas.shopCards}>
            {
                data.map((el)=>{
                    return <div className={clas.card}>
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
        <PaginationCustome/>
    </div>
}

export default Shopcontainer