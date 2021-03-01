import React, {useState } from 'react';
import MenuItem from './MenuItem';

const Menu = () => {


    const [menu, setMenu] = useState([
        {id:10, name:'manty', price:120, count:6},
        {id:20,name:'manty', price:120, count:5},
        {id:30,name:'manty', price:120, count:4},
        {id:40,name:'manty', price:120, count:2},
        {id:50,name:'manty', price:120, count:1},
        {id:60,name:'manty', price:120, count:3},

    ])

    const totalCart = menu.reduce((ans,{price,count})=>ans+price*count,0)

    const deleteItem = (id) => () => {
        const filtered = menu.filter((item) => item.id !== id)
        setMenu([...filtered])
    }

    return (
        <div>
            <div className='row mb-4'>
                <div className='col-4 font-weight-bold'>Блюда</div>
                <div className='col-2 font-weight-bold'>Цена</div>
                <div className='col-2 font-weight-bold'>кол-во</div>
                <div className='col-2 font-weight-bold'>Общая сумма</div>
                <div className='col-2 font-weight-bold'></div>
            </div>
            <hr/>
            {menu.map((item)=> <MenuItem deleteItem={deleteItem} item = {item}/>)}

            <p className='text-right'>Total: {totalCart}</p>        
        </div>
    );
};

export default Menu;