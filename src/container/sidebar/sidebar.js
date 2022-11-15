import React from 'react'
import clas from './main.module.scss'
import ReactDOM from  'react-dom'
const Sidebar = ({activeSidebar, setActiveSidebar})=>{
    const root = document.getElementById('root')
    const body = document.querySelector('body')
    if(activeSidebar){
        root.classList.add('active')
        body.classList.add('active')
    }else{
        root.classList.remove('active')
        body.classList.remove('active')
    }
    console.log(root); 
    return ReactDOM.createPortal(
        <div className={clas.sidebar_wrapper}>
            <div onClick={()=> setActiveSidebar(false)} className={`${clas.overlay} ${activeSidebar ? clas.active : ''}`}></div>
            <div className={`${clas.sidebar_content} ${activeSidebar ? clas.active : ''}`}></div>
        </div>,
        document.getElementById('portal')
    )
}
export default Sidebar
