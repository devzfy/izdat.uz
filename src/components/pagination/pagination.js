import { Pagination } from 'antd';
import './main.css'
import { Arrow, Arrow2 } from "../../assets/icons";
import 'antd/dist/reset.css';

const PaginationCustome = ()=>{
    const itemRender = (_, type, originalElement) =>{
        if(type === 'prev'){
            return <Arrow/>
        }else if(type === 'next'){
            return <Arrow2/>
        }
        return originalElement
    }
    const change = ()=>[
        console.log('changed')
    ]
    return <div className="pagination-wrapper">
        <Pagination size="small" total={40} defaultPageSize={16} itemRender={itemRender} onChange={change}/>
    </div>
}

export default PaginationCustome
