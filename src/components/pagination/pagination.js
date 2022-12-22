import { Pagination } from 'antd';
import './main.scss'
import { Arrow, Arrow2 } from "../../assets/icons";
import 'antd/dist/reset.css';

const PaginationCustome = ()=>{
    return <div className="pagination-wrapper">
        <div className={"arrow"}>
            {/* <button><Arrow/></button> */}
        </div>
        <div className={"steps"}>
            <button>1</button>
            <button>2</button>
            <button>3</button>
        </div>
        <div className={"arrow"}>
            <button><Arrow2/></button>
        </div>
    </div>
}

export default PaginationCustome
