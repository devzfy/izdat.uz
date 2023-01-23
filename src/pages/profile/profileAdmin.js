import React from 'react';
import { Cash, Edit } from '../../assets/icons'
import clas from './main.module.scss'
import { Space, Table, Tag } from 'antd';
import { Link } from 'react-router-dom';
const ProfileAdmin = ()=>{
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: "32.000 сум",
      address: 'New York No. 1 Lake Park',
      tags: ['в ожидании'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: "29.000 сум",
      address: 'London No. 1 Lake Park',
      tags: ['доставили курьеру'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: "76.000 сум",
      address: 'Sidney No. 1 Lake Park',
      tags: ['доставлен'],
    },
  ];
    const columns = [
        {
          title: 'Имя',
          dataIndex: 'name',
          key: 'name',
          render: (text) => <h2>{text}</h2>,
        },
        {
          title: 'Цена',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Статус',
          key: 'tags',
          dataIndex: 'tags',
          render: (_, { tags }) => (
            <>
              {tags.map((tag) => {
                let color = tag.length > 5 ? 'geekblue' : 'green';
                if (tag === 'в ожидании') {
                  color = 'volcano';
                }else if(tag === 'доставлен'){
                  color = 'green';
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
          title: 'Действие',
          key: 'action',
          render: (_, record) => (
            <Space size="middle">
              <button>Подробнее</button>
            </Space>
          ),
        },
      ];
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
            <h1 className={clas.balans_holder}>Мой баланс на сайте</h1>
            <Link to="/balance" className={clas.balans}>
              <div className={clas.cash_title}>
                <div className={clas.cach_icon}>
                  <Cash/>
                </div>
                <span>Баланс</span>
              </div>
              <div className={clas.cach_amount}>
                <span>500 000 сум</span>
              </div>
            </Link>
            <div className={clas.my_orders}>
                <h1 className={clas.order_holder}>Мои заказы</h1>
                <div className={clas.order_list}>
                  <div className={clas.table}>
                  <Table dataSource={data} columns={columns} />;
                  </div>
                </div>
            </div>
        </div>
    </div>
}

export default ProfileAdmin