import clas from './filter.module.scss'
import { categories } from '../../data/base'
const FilterContent = ({setState, state}) => {
    const close = ()=>{
        setState(false)
    }
    const body = document.querySelector('body')
    if(state){
        body.classList.add('active')
    }else{
        body.classList.remove('active')
    }
    return <div className={`${clas.Filter_wrapper} ${state ? clas.active: ''}`}>
        <button onClick={close} className={clas.overlay}></button>
        <div className={clas.filter_container}>
            <ul className={clas.filter_ul}>
                <h2 className={clas.all_categories}>Все категории</h2>
                {
                    categories.map(el =>{
                        return <li key={el.id}><button className={clas.Filter_btn}>{el.name}</button></li>
                    })
                }
            </ul>
        </div>
    </div>
}

export default FilterContent