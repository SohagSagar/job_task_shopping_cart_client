import React from 'react';
import food from '../../resources/test.png';

import CartItems from './CartItems';

const Cart = ({cartItems,setCartItems}) => {
    // remove single cart item
    const handleRemoveCartItem = (_id) =>{
         const remainingCartItems = cartItems.filter(item => item._id !==_id);
         setCartItems(remainingCartItems);
    }
    return (
        <div>
            {/* <!-- Put this part before </body> tag-- > */}
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-middle sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-center">Added Items <sup>{cartItems?.length}</sup></h3><hr />
                    {
                        cartItems.map(cartItem=><CartItems
                        key={cartItem._id}
                        cartItem={cartItem}
                        handleRemoveCartItem={handleRemoveCartItem}
                        ></CartItems>)
                    }
                    <div class="modal-action">
                        <label for="my-modal-6" class="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Cart;