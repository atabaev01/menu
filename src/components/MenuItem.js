import React from 'react';

const MenuItem = ({item,deleteItem}) => {
    const {name,price,count,id} = item
    return (
        <div className='row mb-2'>
            <div className='col-4'>{name}</div>
            <div className='col-2'>{price}</div>
            <div className='col-2'>{count} </div>
            <div className='col-2'>{price*count}</div>
            <div className='col-2'><button onClick={deleteItem(id)} className='btn btn-danger'></button></div>
        </div>
    );
};

export default MenuItem;