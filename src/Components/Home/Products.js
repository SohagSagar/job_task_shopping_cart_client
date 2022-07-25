import React, { useEffect, useState } from 'react';
import Loading from '../SharedComponents/Loading';
import Product from './Product';
import { useQuery } from 'react-query';
import toast from 'react-hot-toast';

const Products = ({ cartItems, setCartItems }) => {

    const [category, setCategory] = useState('')
    const [activeBtn, setActiveBtn] = useState('allProducts');
    const [searchedText, setSearchedText] = useState('');

    const { data: products, isLoading } = useQuery(['products', category], () => fetch(`http://localhost:5000/products/${category}`).then(res => res.json()));

    const clearSearchedField = () => {
        document.getElementById('search-input').value = '';
        setSearchedText('');
    }


    // data filter using key word
    const allProducts = () => {
        setCategory('')
        setActiveBtn('allProducts');
        clearSearchedField();
    }

    const asusProducts = () => {
        setCategory('asus');
        setActiveBtn('asusProducts');
        clearSearchedField();
    }

    const hpProducts = () => {
        setCategory('hp');
        setActiveBtn('hpProducts');
        clearSearchedField();
    }

    const lenovoProducts = () => {
        setCategory('lenovo');
        setActiveBtn('lenovoProducts');
        clearSearchedField();

    }

    // add to cart function
    const handleAddToCart = (product) => {
        const exist = cartItems.find(item => item._id === product._id);
        if (!exist) {
            const addedCardItems = [...cartItems, product];
            setCartItems(addedCardItems);
        }
        else {
            toast.error('Item is Already Added In Cart !!')
            // alert('Item is Already Added In Cart !!');
        }

    }


    return (
        <div className='lg:px-12 lg: py-12 min-h-screen'>

            <div className='flex flex-col justify-center items-center font-semibold gap-7'>
                {/* input field for searching data */}
                <input onChange={e => setSearchedText(e.target.value)} id="search-input" type="text" placeholder="Search Your Product..." class="input input-bordered rounded-full w-full max-w-xs lg:max-w-lg" />

                {/* key word for filtering data */}
                <div>
                    <button onClick={allProducts} className={`btn btn-sm rounded-full w-28 mr-2  ${activeBtn === 'allProducts' && "btn-primary"}`}>All</button>
                    <button onClick={asusProducts} className={`btn btn-sm rounded-full w-28 mr-2 ${activeBtn === 'asusProducts' && "btn-primary"}`}>Asus</button>
                    <button onClick={hpProducts} className={`btn btn-sm rounded-full w-28 mr-2 ${activeBtn === 'hpProducts' && "btn-primary"}`}>Hp</button>
                    <button onClick={lenovoProducts} className={`btn btn-sm rounded-full w-28 ${activeBtn === 'lenovoProducts' && "btn-primary"}`}>Lenovo</button>
                </div>
            </div>
            {
                isLoading && <Loading />
            }


            <div className='grid lg:grid-cols-4 sm:grid-cols-1 justify-center items-center'>
                {
                    products?.filter((val) => {
                        if (!searchedText) {
                            return val;
                        } else if (
                            val.name.toLowerCase().includes(searchedText.toLowerCase()) ||
                            val.price.toLowerCase().includes(searchedText.toLowerCase()) ||
                            val.short_des.toLowerCase().includes(searchedText.toLowerCase())
                        ) {
                            return val;
                        }
                    })?.map(product => <Product
                        key={product._id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                        
                    />)
                }
            </div>


        </div>
    );
};

export default Products;