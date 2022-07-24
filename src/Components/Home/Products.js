import React, { useEffect, useState } from 'react';
import Loading from '../SharedComponents/Loading';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [activeBtn, setActiveBtn] = useState('allProducts');
    const [searchedText, setSearchedText] = useState('');
    const [loadingStatus,setLoadingStatus]=useState(false);


    useEffect(() => {
        setLoadingStatus
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    if (products.length < 0) {
        return <Loading />
    }



    const allProducts = () => {
        fetch(`http://localhost:5000/products`)
            .then(res => res.json())
            .then(data => {
                const allProducts = data;
                if (!allProducts) {
                    return <Loading />
                }
                setProducts(allProducts);
                setActiveBtn('allProducts');
                document.getElementById('search-input').value = '';
                setSearchedText('');

            })
    }


    const asusProducts = () => {
        const category = 'asus';
        fetch(`http://localhost:5000/products/${category}`)
            .then(res => res.json())
            .then(data => {
                const allProducts = data;
                if (allProducts.length < 0) {
                    return <Loading />
                }
                setProducts(allProducts);
                setActiveBtn('asusProducts');
                document.getElementById('search-input').value = '';
                setSearchedText('');
            })
    }

    const hpProducts = () => {
        const category = 'hp';
        fetch(`http://localhost:5000/products/${category}`)
            .then(res => res.json())
            .then(data => {
                const allProjects = data;
                if (allProjects.length < 0) {
                    return <Loading />
                }
                setProducts(allProjects);
                setActiveBtn('hpProducts');
                document.getElementById('search-input').value = '';
                setSearchedText('');
            })
    }

    const lenovoProducts = () => {
        const type = 'lenovo';
        fetch(`http://localhost:5000/products/${type}`)
            .then(res => res.json())
            .then(data => {
                const allProducts = data;
                if (allProducts.length < 0) {
                    return <Loading />
                }
                setProducts(allProducts);
                setActiveBtn('lenovoProducts');
                document.getElementById('search-input').value = '';
                setSearchedText('');
            })
    }
    return (
        <div className='lg:px-12 lg: py-12 min-h-screen'>

            <div className='flex flex-col justify-center items-center font-semibold gap-7'>
                <input onChange={e => setSearchedText(e.target.value)} id="search-input" type="text" placeholder="Search Your Product..." class="input input-bordered rounded-full w-full max-w-xs lg:max-w-lg" />
                <div>
                    <button onClick={allProducts} className={`btn btn-sm rounded-full w-28 mr-2  ${activeBtn === 'allProducts' && "btn-primary"}`}>All</button>
                    <button onClick={asusProducts} className={`btn btn-sm rounded-full w-28 mr-2 ${activeBtn === 'asusProducts' && "btn-primary"}`}>Asus</button>
                    <button onClick={hpProducts} className={`btn btn-sm rounded-full w-28 mr-2 ${activeBtn === 'hpProducts' && "btn-primary"}`}>Hp</button>
                    <button onClick={lenovoProducts} className={`btn btn-sm rounded-full w-28 ${activeBtn === 'lenovoProducts' && "btn-primary"}`}>Lenovo</button>
                </div>
            </div>

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
                    />)
                }
            </div>


        </div>
    );
};

export default Products;