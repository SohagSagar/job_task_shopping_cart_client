import React from 'react';

const Checkout = ({ cartItems }) => {
    let total = 0;
    cartItems.map(cartItem => <>
        {total = total + parseInt(cartItem?.price)}
    </>);
    console.log(cartItems.length);

    return (
        <div className='min-h-screen lg:px-12'>
            <div className='lg:w-[800px] mx-auto border rounded-lg mt-10'>
                <p className="text-xl font-semibold text-center">Orders Review</p><hr />
                {
                    !cartItems.length ? <p className='text-center text-lg my-12'>No product to review</p> :

                            <div class="overflow-x-auto my-5">
                                <table class="table w-full">
                                    {/* <!-- head --> */}
                                    <thead>
                                        <tr>
                                            <th>Product Image</th>
                                            <th>Product Name</th>
                                            <th>Quantity</th>
                                            <th>Price($)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* <!-- row 1 --> */}

                                        {
                                            cartItems.map(cartItem =>
                                                <tr key={cartItem._id}>

                                                    <td><img className='w-16 rounded-lg' src={cartItem?.img} alt="" srcset="" /></td>
                                                    <td>{cartItem?.name}</td>
                                                    <td>1</td>
                                                    <td>{cartItem?.price}</td>

                                                </tr>
                                            )
                                        }
                                        < td colSpan={3} className='font-semibold'>Total Purchase Amount</td>
                                        <td colSpan={3} className='font-semibold'>{total}</td>

                                    </tbody>
                                </table>
                            </div>

                }

            </div>
            {
                <button disabled={cartItems?.length===0} class="btn btn-success  btn-wide mx-auto flex justify-center mt-2">Place Order</button>
            }

        </div >
    );
};

export default Checkout;