import React from 'react'
import { Banner, Recommend } from '../../container'
import clas from './main.module.scss'
import UploadFile from '../../components/upload/upload'
import { Incr, Decr } from '../../assets/icons'
import { useState } from 'react'

const SinglePrint = () => {
    const [counter, setCounter] = useState(1)
    return <React.Fragment>
        <Banner image={'https://images.unsplash.com/photo-1503694978374-8a2fa686963a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'} />
        <div className={clas.SinglePrint_wrpper}>
            <div className="container">
                <div className={clas.inner}>
                    <div className={clas.holder}>
                        <h1>Онлайн печать</h1>
                    </div>
                    <div className={clas.main_content}>
                        <div className={clas.left_side}>
                            <UploadFile/>
                        </div>
                        <div className={clas.right_side}>
                            <h3 className={clas.names}>Распечатать фото для фотоальбома</h3>
                            <p className={clas.content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra ipsum sit diam tristique viverra ut sed ridiculus etiam. Sed leo, morbi a a malesuada nunc consectetur. Libero euismod et, lacus, facilisis scelerisque erat cras viverra nulla facilisis.</p>
                            <div className={clas.page_count}>
                                <h4 className={clas.name}>Кол-во страниц:</h4>
                                <div className={clas.counter}>
                                    <span>{counter}</span>
                                    <button onClick={()=> setCounter(counter - 1)}>
                                        <Decr/>
                                    </button>   
                                    <button  onClick={()=> setCounter(counter + 1)}>
                                        <Incr/>
                                    </button>
                                    
                                </div>
                            </div>
                            <div className={clas.type_case}>
                                <h4 className={clas.name}>Вид покрытия:</h4>
                                <div className={clas.types}>
                                    <div className={clas.type}>
                                        <label htmlFor="case_one">глянцевый </label>
                                        <input type="radio" name="case" id="case_one" />
                                    </div>
                                    <div className={clas.type}>
                                        <label htmlFor="case_two">матовый</label>
                                        <input type="radio" name="case" id="case_two" />
                                    </div>
                                </div>
                            </div>
                            <div className={clas.type_size}>
                                <h4 className={clas.name}>Размер страниц:</h4>
                                <div className={clas.types}>
                                    <div className={clas.type}>
                                        <label htmlFor="">8х8</label>
                                        <input type="radio" name="" id="" />
                                    </div>
                                    <div className={clas.type}>
                                        <label htmlFor="">10х10</label>
                                        <input type="radio" name="" id="" />
                                    </div>
                                    <div className={clas.type}>
                                        <label htmlFor="">11х8</label>
                                        <input type="radio" name="" id="" />
                                    </div>
                                </div>
                            </div>
                            <div className={clas.reading}>
                                <div className={clas.type}>
                                    <label htmlFor="">все страницы</label>
                                    <input type="radio" name="" id="" />
                                </div>
                                <div className={clas.type}>
                                    <label htmlFor="">только четные</label>
                                    <input type="radio" name="" id="" />
                                </div>
                                <div className={clas.type}>
                                    <label htmlFor="">только нечетные</label>
                                    <input type="radio" name="" id="" />
                                </div>
                            </div>
                            <div className={clas.type_list}>
                                <h3 className={clas.name}>Внутренние страницы:</h3>
                                <div className={clas.types}>
                                    <div className={clas.type}>
                                        <label htmlFor="">глянцевый </label>
                                        <input type="radio" name="" id="" />
                                    </div>
                                    <div className={clas.type}>
                                        <label htmlFor="">матовый</label>
                                        <input type="radio" name="" id="" />
                                    </div>
                                </div>
                            </div>
                            <div className={clas.type_list}>
                                <h3 className={clas.name}>Ориентация страницы:</h3>
                                <div className={clas.types}>
                                    <div className={clas.type}>
                                        <label htmlFor="">альбомная </label>
                                        <input type="radio" name="" id="" />
                                    </div>
                                    <div className={clas.type}>
                                        <label htmlFor="">книжная</label>
                                        <input type="radio" name="" id="" />
                                    </div>
                                </div>
                            </div>
                            <div className={clas.closing}>
                                <button>Заказать</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <Recommend />
        </div>
    </React.Fragment>
}

export default SinglePrint