import React, { useState } from 'react'
import {Header, Footer, Banner, Recommend} from '../../container'
import clas from './main.module.scss'
import { sale_data } from '../../data/collection'
import { PaginationCustome, SaleCard } from '../../components'
const SaleEvents = ()=>{
    const [id, setId] = useState(null)
    console.log(id);
    return <React.Fragment>
        <Header/>
        <Banner image={'https://images.unsplash.com/photo-1568667256549-094345857637?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGxpYnJhcnklMjBib29rc3xlbnwwfHwwfHw%3D&w=1000&q=80'}/>
        <div className={clas.SaleEvents_wrapper}>
            <div className={clas.ads_ac}>
                <h1>Акции</h1>
                <div className={clas.ads}>
                    <img src="https://images.pexels.com/photos/256477/pexels-photo-256477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <img src="https://images.pexels.com/photos/256477/pexels-photo-256477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <img src="https://images.pexels.com/photos/256477/pexels-photo-256477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
            </div>
            <div className="container">
            <div className={clas.sale_cards_wrapper}>
                {
                    sale_data.map((el) =>{
                        return <div onClick={()=> setId(el.id)} className={`${clas.sale_card} ${el.id === id ? clas.active : null}`}>
                            <SaleCard t_image={el.t_image} t_name={el.t_name} t_title={el.t_title} b_name={el.b_name} b_link={el.b_link} />
                        </div>
                    })
                }
            </div>
            <div className={clas.pag}>
            <PaginationCustome/>
            </div>
            <div className={clas.see_more}>
                <button>Показать все</button>
            </div>
            <Recommend/>
            </div>
            
        </div>
        <Footer/>
    </React.Fragment>
}

export default SaleEvents