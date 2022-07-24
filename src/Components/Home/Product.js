import React from 'react';
import { TbCurrencyDollar } from 'react-icons/tb';
import food from '../../resources/test.png';
import '../../Styles/Product.css'

const Product = ({product}) => {
    const {_id,name,price,short_des,img} = product;
    return (
        <div class="card w-[300px] bg-base-100 food-card text-center mt-10 cursor-pointer">
            <figure><img className='w-full h-[250px]  rounded-t-lg' src={img} alt="Shoes" /></figure>
            <div class="card-body pt-4">
                <h2 class=" font-semibold">{name}</h2>
                <p className='text-gray-500 leading-none'>{short_des}</p>
                <div className='text-lg'><p className=' font-semibold '><TbCurrencyDollar className='inline text-[22px] mb-1 ' />{price}</p></div>

                {/* card buttons */}
                <div className='gap-3 flex justify-center '>
                    <button class="btn btn-sm normal-case">Details</button>
                    <button class="btn btn-sm btn-primary normal-case">Add Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;