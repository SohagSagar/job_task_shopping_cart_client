import React from 'react';
import { Link } from 'react-router-dom';
import food from '../../resources/test.png';

import CartItems from './CartItems';

const Cart = ({ cartItems, setCartItems,setCartOffsetStatus }) => {
    // remove single cart item
    const handleRemoveCartItem = (_id) => {
        const remainingCartItems = cartItems.filter(item => item._id !== _id);
        setCartItems(remainingCartItems);
    }
    return (
        <div>
            {/* <!-- Put this part before </body> tag-- > */}
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-middle sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-center">Added Items <sup>{cartItems?.length}</sup></h3><hr />
                    {
                        !cartItems?.length && <p className='text-center my-5 text-red-500'>Cart is empty</p>
                    }
                    {
                        cartItems.map(cartItem => <CartItems
                            key={cartItem._id}
                            cartItem={cartItem}
                            handleRemoveCartItem={handleRemoveCartItem}
                        ></CartItems>)
                    }
                    <div className="modal-action flex justify-center ">
                        <button onClick={()=>setCartOffsetStatus(   false)} for="my-modal-6" disabled={!cartItems?.length} className="btn btn-sm normal-case font-semibold"><Link to={'/checkout'}>Review Order</Link></button>

                        <label for="my-modal-6" className="btn btn-sm normal-case btn-error text-white font-semibold">Close Cart</label>
                        
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Cart;