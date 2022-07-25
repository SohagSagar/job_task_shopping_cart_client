import React from 'react';
import { TbCurrencyDollar } from 'react-icons/tb';
import food from '../../resources/test.png';
import '../../Styles/Product.css'

const Product = ({product,handleAddToCart,setCartItems}) => {
    const {_id,name,price,short_des,img} = product;
    return (
        <div className="card w-[300px] bg-base-100 food-card text-center mt-10 cursor-pointer">
            <figure><img className='w-full h-[250px]  rounded-t-lg' src={img} alt="Shoes" /></figure>
            <div className="card-body pt-4">
                <h2 className=" font-semibold">{name}</h2>
                <p className='text-gray-500 leading-none'>{short_des}</p>
                <div className='text-lg'><p className=' font-semibold '><TbCurrencyDollar className='inline text-[22px] mb-1 ' />{price}</p></div>

                {/* card buttons */}
                <div className='gap-3 flex justify-center '>
                    <button className="btn btn-sm normal-case">Details</button>
                    <button onClick={()=>handleAddToCart(product)} className="btn btn-sm btn-primary normal-case">Add Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;