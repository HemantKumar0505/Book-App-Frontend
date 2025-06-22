import React from 'react'
import { useGetOrdersByEmailQuery } from '../../redux/features/orders/ordersApi'
import { useAuth } from '../../context/AuthContext';

const OrderPage = () => {
  const {currentUser} =useAuth();
  const {data: orders =[], isLoading , isError} = useGetOrdersByEmailQuery(currentUser.email);
  if(isLoading) return <div>Loading...</div>
  if(isError) return <div>Error loading orders</div>
  return (
    <div className='conatiner max-auto p-6'>
      <h2 className='text-2xl font-semibold mb-4'>Your Orders</h2>
      {
        orders.length === 0 ? (<div>No Orders found!!</div>) : (<div>
          {
            orders.map((order,index) => (
              <div key={order._id} className='border p-4 mb-4 rounded-md shadow-md'>
                <p className='p-1 bg-secondary text-white w-10 rounded mb-1'># {index + 1}</p>
                <h2 className='font-bold'>orderId : {order?._id}</h2>
                <p className='text-gray-600'>Name: {order.name}</p>
                <p className='text-gray-600'>Email: {order.email}</p>
                <p className='text-gray-600'>Phone: {order.phone}</p>
                <p className='text-gray-600'>Total price: {order.totalPrice}</p>
                <h3 className='font-semibold mt-2'>Address:</h3>
                <p>{order.address.city}, {order.address.state}, {order.address.country}, {order.address.zipcode}</p>
                <h3 className='font-semibold mt-2'>product Id:</h3>
                <ul>
                  {
                    order.productIds.map((productId) => (
                      <li key={productId} className='text-gray-600'>{productId
                      }</li>
                    ))
                  }
                </ul>
              </div>
            ))
          }
        </div>)
      }
    </div>
  )
}

export default OrderPage