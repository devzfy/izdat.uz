import React, { useEffect, useState } from 'react'
import clas from './main.module.scss'
const Sidebar = ({ activeSidebar, setActiveSidebar }) => {
    const data = [1,1,1]
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
    const newData = new Array(...new Set(categories))

    return <div className={clas.sidebar}>
        <ul className={clas.sidebar_ul}>
            <li><button className={clas.sidebar_btn}>Bсе</button></li>
            {
                newData?.map(el => {
                    return <li><button className={clas.sidebar_btn}>{el}</button></li>
                })
            }
        </ul>
    </div>
}
export default Sidebar
