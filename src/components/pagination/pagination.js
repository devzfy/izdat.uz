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
    return <div className="pagination-wrapper">
        <Pagination size="small" total={50} itemRender={itemRender}/>
    </div>
}

export default PaginationCustome
