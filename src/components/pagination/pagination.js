import { Pagination } from "antd";
import './main.css'
import { Arrow, Arrow2 } from "../../assets/icons";

const PaginationCustome = ()=>{
    const itemRender = (_, type, originalElement) =>{
        if(type === 'prev'){
            return <Arrow2/>
        }else if(type === 'next'){
            return <Arrow/>
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
