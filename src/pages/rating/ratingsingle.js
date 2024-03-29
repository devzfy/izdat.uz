import clas from './main.module.scss'
import {Banner , RateContainer, Recommend} from '../../container'
import { useLocation } from 'react-router-dom'
const RatingSingle = ()=>{
    const location = useLocation()
    return <div className={clas.RatingSingle_wrapper}>
        <Banner image={'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'}/>
        <h6>Топ самые 
            {
                location.pathname === '/rating/author' ? ' лучшие авторы':
                location.pathname === '/rating/book' ? ' читаемые книги':
                location.pathname === '/rating/publishing' ? ' лучшие издательства': null
            }
        </h6>
            <div className="container">
        <div className={clas.RateContainer_wrapper}>
            {
                [1,2,3,4].map(() =>{
                    return <div className={clas.card}>
                        <RateContainer/>
                    </div>
                })
            }
            </div>
            <Recommend/>
        </div>
    </div>
}

export default RatingSingle