import clas from './main.module.scss'

const Banner = ({image, title})=>{
    return <div className={clas.banner}>
        <h6>{title}</h6>
        <img src={image} alt="" />
    </div>
}

export default Banner