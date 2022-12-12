import clas from './main.module.scss'
import {PaginationCustome, Shopcard} from '../../components'
import { Arrow, Arrow2 } from '../../assets/icons'

const Shopcontainer = ({name,data})=>{
    return <div className={clas.Shopcontainer_wrapper}>
        <div className={clas.contaner_heder}>
        <h1>{name}</h1>
        <div className={clas.icons}>
            <Arrow/>
            <Arrow2/>
        </div>
        </div>
        <div className={clas.shopCards}>
            {
                data.slice(0,4).map((el)=>{
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
       
    </div>
}

export default Shopcontainer