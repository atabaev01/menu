import React from 'react';
import MenuItem from './MenuItem';

const Menu = () => {
    return (
        <div>
            <div className='row mb-4'>
                <div className='col-4 font-weight-bold'>Блюда</div>
                <div className='col-2 font-weight-bold'>Цена</div>
                <div className='col-2 font-weight-bold'>кол-во</div>
                <div className='col-2 font-weight-bold'>Общая сумма</div>
                <div className='col-2 font-weight-bold'></div>
            </div>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>  
            <MenuItem/>
         
        </div>
    );
};

export default Menu;