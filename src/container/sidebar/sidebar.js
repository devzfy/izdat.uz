import React, { useEffect, useState } from 'react'
import clas from './main.module.scss'
const Sidebar = ({ activeSidebar, setActiveSidebar }) => {
    const [cateData, setCateData] = useState([])
    useEffect(()=>{
        fetchData()
    },[])
    const fetchData = async ()=>{
        const list = await fetch('https://www.googleapis.com/books/v1/volumes?q=subject&filter=ebooks&key=AIzaSyC9ROl3QupFvo-5ZqG3AD7LS_ECZqy8GsI')
        const data = await list.json()
        setCateData(data.items)
    }
    const categories = []
    for (let i = 0; i < cateData.length; i++) {
        const element = cateData[i];
        categories.push(element.volumeInfo.categories[0])
    }
    console.log(categories);
    const newData = ["Детективы", "Народные повести", "Фантастика", "Триллер"]

    return <div className={clas.sidebar}>

<ul className={clas.category_ul}>
    {
        newData.map((el) => {
            return <li>
                <span className={clas.category_tag}>{el.substring(0,2)}</span>
                <button className={clas.category_btn}>{el}</button>
                <span className={clas.category_count}>393</span>
            </li>
        })
    }
</ul>
</div>
}
export default Sidebar
