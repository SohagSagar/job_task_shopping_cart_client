import React from 'react';
import { BiPlus } from 'react-icons/bi';
import { HiMinus } from 'react-icons/hi';

const CartItems = ({cartItem,handleRemoveCartItem}) => {
    const {_id,name,img,price} = cartItem;
    
    return (
        <div className='flex justify-between items-center rounded-lg border px-1 my-2'>
            <img className='w-10 rounded' src={img} alt="" />
            <p>{name}</p>
            {/* update product quantity */}
            <div className='flex items-center gap-2'>
                <button className='btn btn-ghost p-2 text-primary text-xl'><BiPlus /></button>
                <p>1</p>
                <button className='btn btn-ghost p-2 text-primary text-xl'><HiMinus /></button>
            </div>
            <p>$<span>{price}</span></p>
            <button onClick={()=>handleRemoveCartItem(_id)} className="btn btn-error btn-sm font-semibold text-white">X</button>

        </div>
    );
};

export default CartItems;