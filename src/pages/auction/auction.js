import clas from './main.module.scss'
import {Header, Footer, Banner, Recommend} from '../../container'
import React from 'react'

const Auction = ()=>{
    return <React.Fragment>
        <Header/>
        <Banner image={'https://images.unsplash.com/photo-1517148892120-4d2da39c8dc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'}/>
        <h1>Аукцион</h1>
    </React.Fragment>
}

export default Auction