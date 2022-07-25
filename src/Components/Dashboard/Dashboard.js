import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../Firebase/Firebase';
import Product from '../Home/Product';
import Loading from '../SharedComponents/Loading';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const email = user?.email;
    const { data: products, isLoading } = useQuery(['products',user], () => fetch(`https://ancient-chamber-40137.herokuapp.com/order/${email}`).then(res => res.json()));

 
    return (
        <div className='lg:px-12 min-h-screen'>
            <div className='text-center font-bold text-xl my-5'>
                <p >User Dashboard</p>
                <p className='text-sm'>Order History</p>
            </div>

            {
                isLoading && <Loading/>
            }

            {
                products?.lenght < 1 ? <p className='text-center text-lg my-12'>No product to review</p> :
                    <div className="overflow-x-auto">
                        <table className="table w-full">

                            <thead>
                                <tr>
                                    <th>SL</th>
                                    <th>ID</th>
                                    <th>Time</th>
                                    <th>Item(s)</th>
                                    <th>Status</th>
                                    <th>Total Price</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                            
                                {
                                    products?.map((product,index) =>
                                        <tr key={product._id}>
                                            <td>{index+1}</td>
                                            <td>{product._id}</td>
                                            <td>{product.dateTime}</td>
                                            <td>{product?.items?.length}</td>
                                            <td  className="badge badge-success mt-2 badge-sm">{product?.orderStatus}</td>
                                            <td>{product.total}</td>
                                            <td>Details | Cancel</td>
                                        </tr>
                                    )
                                }

                            </tbody>
                        </table>
                    </div>
            }


        </div>


    );
};

export default Dashboard;