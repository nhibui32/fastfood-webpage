import React from 'react'

export default function Cart({ items }) {
  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);
  console.log("Cart Items:", items);
  return (
    <div className='text-primaryText'>
      <p>Your Order Summary</p>
      <p className='text-sm text-secondaryText'>{totalQuantity} items yet</p>
      <div className='mt-5'>
        {items.map((item, index) => {
          const { name, price, quantity, image } = item;
          const itemTotal = (price * quantity).toFixed(2);
          return (
            <div key={index} className='flex w-full p-5 gap-5'>
              <div className=''>
                <img src={image} alt="" className='h-20 w-20 object-fit'/>
              </div>
              <div className='text-sm'>
                <p>{name}</p>
                <p>Quantity: {quantity}</p>
                <p>Total: ${itemTotal}</p>
              </div>
            </div>
          );
        })}
      </div>
      <p>Total Items: {totalQuantity}</p>
    </div>
  )
}
