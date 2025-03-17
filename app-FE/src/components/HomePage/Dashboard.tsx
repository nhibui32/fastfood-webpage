import React from 'react'
import { useState } from 'react'
import {menu} from '../../data/Menu.js'
import Cart from '../../components/HomePage/Cart.js'

const shoppingCart = "/CredentialsPageImages/ShoppingCart.svg";
const increase ="/Menu/increase.svg";
const decrease ='/Menu/decrease.svg';

export default function Dashboard({cartItems, setCartItems}) {
      // menu[0] default the first category on the menu
      // so the current state at default will be menu[0].category which is pizza 
    const[selectedCategory, setSelectedCategory] = useState(menu[0].category)
    // check if the items already in cart?
    const handleOnClick = (name, price,image) => {
      setCartItems([...cartItems, { name, price, image, quantity: 1 }]);
    };
    
    const handleDecrease =(name)=>{
      setCartItems((prev) => {
        return prev
        .map((item) =>
          item.name === name 
          ? { ...item, quantity: item.quantity - 1 } 
          : item
        )
        .filter((item)=> item.quantity > 0 )
      });
    }
  
    const handleIncrease = (name) =>{
      setCartItems((prev) => {
        return prev.map((item) =>
          item.name === name ? { ...item, quantity: item.quantity + 1 } : item
        );
      })
    }
  return (
    
    <div className='p-5 desktop:p-10'>
      <p className='text-primaryText text-3xl desktop:text-5xl font-bold'>Category</p>
      <div className='w-full flex justify-around mt-5 bg-containerBackground p-3 rounded-lg'>
        {menu.map((cate, index)=>
          <div key={index} className={`text-primaryText flex-col items-center flex cursor-pointer p-3 rounded-lg ${selectedCategory === cate.category? 'bg-red-400 text-white' : 'bg-containerBackground text-primaryText hover:bg-hoverBackground '}
          `} onClick={()=>setSelectedCategory(cate.category)}>
            <img src={cate.catImg} alt="" className='w-10 h-10'/>
            <p className=''>{cate.category}</p>
          </div>
        )
        }
      </div>

      <p className='text-primaryText text-3xl desktop:text-5xl font-bold mt-5'>Menu</p>
      <div className='grid grid-cols-1 desktop:grid-cols-3 p-5 desktop:p-10 gap-10 '>
        {menu
          .find((cat)=> cat.category === selectedCategory)
          .items.map((item, index)=> {
            const{name, description, price} =item;
            const isInCart = cartItems.find((itemIdex)=>itemIdex.name === name)
            return(
              <div key={index} className='bg-containerBackground h-[400px] p-3 space-y-3 relative'>
                <img src={item.image} alt="" className='w-full object-fit h-[200px] rounded-lg'/>
                <p className='text-wrap text-primaryText'>{item.name}</p>
                <p className='text-secondaryText text-sm'>{item.description}</p>
                <p className='text-primary font-bold'>${item.price.toFixed(2)}</p>
                <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2">
                  {isInCart?
                  <button className='flex items-center gap-3 bg-primary p-2 rounded-lg'>
                    <img src={decrease} alt="decrease icon " className='w-8 h-8' onClick={()=>handleDecrease(name)}/>
                    <p className='text-center w-6 h-6 flex items-center justify-center text-primaryText rounded'>
                    {isInCart.quantity}</p>
                    <img src={increase} alt="increase icon" className='w-8 h-8' onClick={()=> handleIncrease(name)}/>
                
                  </button>
                    :
                    <button className='flex items-center gap-3 bg-primary p-2 pl-1 rounded-lg' onClick={()=> handleOnClick(name, price, item.image)}>
                    <img src={shoppingCart} alt="shopping Cart Icon" className='w-8 h-8'/>
                    <p className='text-base text-nowrap'>Add to cart</p>
                  </button>
                  }
                </div>
              </div>
            )
          })
        }
      </div>
      <div className='hidden'>
        <Cart items={cartItems}/>
      </div>

    </div>
  )
}

