import clas from './main.module.scss'

const Banner = ({image})=>{
    return <div className={clas.banner}>
        <img src={image} alt="" />
    </div>
}

export default Banner