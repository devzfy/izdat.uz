import React from "react";
import { Banner, Recommend} from "../../container";
import clas from './main.module.scss'

const SingleWork = ()=>{
    return <React.Fragment>
        <Banner image={'https://images.unsplash.com/photo-1607003881177-9b4e0d844536?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'}/>
        <div className={clas.SingleWork_wrapper}>
            <div className="container">
            <div className={clas.full_content}>
                        <h2>Написать 2 статьи для сайта</h2>

                        <div className={clas.info}>
                            <h3>450 000сум</h3>
                            <span>Опубликовано: 15.10.2022</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est nisl vitae ac sagittis, maecenas urna urna, et sagittis. Enim, fringilla placerat purus eget nulla sollicitudin iaculis interdum massa. A scelerisque vitae integer magna placerat mauris. Accumsan faucibus ipsum tellus diam massa. A scelerisque vitae Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est nisl vitae ac sagittis, maecenas urna urna, et sagittis. Enim, fringilla placerat purus eget nulla sollicitudin iaculis interdum massa. A scelerisque vitae integer magna placerat mauris. Accumsan faucibus ipsum tellus diam massa. A scelerisque vitae </p>
                            <ul>
                                <li>Срок заказа: </li>
                                <li>2 недели</li>
                            </ul>
                            <ul>
                                <li>Контакты:</li>
                                <li> +998 99 999-99-99</li>
                            </ul>
                            <button>Откликнуться</button>
                        </div>
                    </div>
            </div>
        </div>
        <div className="container">
        <Recommend/>
        </div>
    </React.Fragment>
}

export default SingleWork