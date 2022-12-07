import React from 'react';
import { Edit } from '../../assets/icons'
import clas from './main.module.scss'
import { Space, Table, Tag } from 'antd';
import 'antd/dist/reset.css';
import { useEffect } from 'react'
import { useState } from 'react';
const Profile = ()=>{
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: 'Tags',
          key: 'tags',
          dataIndex: 'tags',
          render: (_, { tags }) => (
            <>
              {tags.map((tag) => {
                let color = tag.length > 5 ? 'geekblue' : 'green';
                if (tag === 'loser') {
                  color = 'volcano';
                }
                return (
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                );
              })}
            </>
          ),
        },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <Space size="middle">
              <a>Invite {record.name}</a>
              <a>Delete</a>
            </Space>
          ),
        },
      ];
    const [tableData, setTableData] = useState([{

    }])
    useEffect(()=>{
        getData()
    })
    const getData = async ()=>{
        const fecthBook = await fetch('https://www.googleapis.com/books/v1/volumes?q=romance&filter=paid-ebooks&key=AIzaSyC9ROl3QupFvo-5ZqG3AD7LS_ECZqy8GsI') 
        const data  = await fecthBook.json()

        console.log(data.items);
    }
    return <div className={clas.profile_wrapper}>
        <div className="container">
            <div className={clas.inner}>
                <div className={clas.profile_img}>
                    <img src="https://www.film.ru/sites/default/files/people/1469450-2166844.jpg" alt="" />
                    <button>
                        <Edit/>
                    </button>
                </div>
                <div className={clas.profile_info}>
                    <ul className={clas.info_ul}>
                        <li><span>Имя</span></li>
                        <li><span>Иван</span></li>
                    </ul>
                    <ul className={clas.info_ul}>
                        <li><span>Фамилия</span></li>
                        <li><span>Иванов</span></li>
                    </ul>
                    <ul className={clas.info_ul}>
                        <li><span>Дата рождения</span></li>
                        <li><span>09.09.1999</span></li>
                    </ul>
                    <ul className={clas.info_ul}>
                        <li><span>Пол</span></li>
                        <li><span>Мужской</span></li>
                    </ul>

                    <ul className={clas.info_ul}>
                        <li><span>Номер телефона</span></li>
                        <li><span>+998 99 999 99 99 </span></li>
                    </ul>
                    <ul className={clas.info_ul}>
                        <li><span>E-mail</span></li>
                        <li><span>ivan@gmail.com</span></li>
                    </ul>
                </div>
            </div>
            <div className={clas.my_orders}>
                <h1 className={clas.order_holder}>Моя корзина</h1>
                <div className={clas.order_list}>

                </div>
            </div>
        </div>
    </div>
}

export default Profile