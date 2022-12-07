import React from 'react'
import { Banner, Recommend} from '../../container'
import clas from './main.module.scss'

const SinglePrint = ()=>{
    return <React.Fragment>
        <Banner image={'https://images.unsplash.com/photo-1503694978374-8a2fa686963a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'}/>
            <div className={clas.SinglePrint_wrpper}>
                <div className="container">
                    <div className={clas.inner}>
                        
                    </div>
                </div>
            </div>
        <Recommend/>
    </React.Fragment>
}

export default SinglePrint