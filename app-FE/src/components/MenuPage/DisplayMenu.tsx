import React from 'react'
import NavBar from '../LandingPage/NavBar.js'
import {menu} from '../../data/Menu.js'
import { useState } from 'react'

const shoppingCart = "/CredentialsPageImages/ShoppingCart.svg";
const increase ="/Menu/increase.svg";
const decrease ='/Menu/decrease.svg';


export default function DisplayMenu() {
    // menu[0] default the first category on the menu
    // so the current state at default will be menu[0].category which is pizza 
  const[selectedCategory, setSelectedCategory] = useState(menu[0].category)
  // check if the items already in cart?
  const[cartItems, setcartItems] =useState([]);

  const handleOnClick = (name, price) => {
    setcartItems([...cartItems, { name, price, quantity: 1 }]);
  };
  

  
  return (
    <div className='bg-slate-500 '>
      

    <div className='p-5 desktop:p-10 '>
      <h1 className='text-3xl desktop:5xl font-bold'>MENU</h1>
      <div className='flex flex-wrap justify-start gap-10 p-4 rounded-lg text-xl desktop:text-3xl '>
        {menu.map((category, index)=>
          <button className={`px-4 py-2 font-semibold rounded-lg shadow-md transition duration-300 ${
            selectedCategory === category.category // category.category get the name of category such as pizza, burger, etc. So when the user selected the category, the selecltedCategory will be update because of(setSelectedCategory(category.category))
              ? 'bg-red-400 text-white'
              : 'bg-white text-black hover:bg-gray-300'
          }`} onClick={()=> setSelectedCategory(category.category)}
            >{category.category}
          </button>
        )}
      </div>
    </div>

    {/* Display the items in each category  */}

    <div className='grid grid-cols-1 desktop:grid-cols-3 p-5 desktop:p-10 gap-10'>
    {menu
      .find((cat) => cat.category === selectedCategory)
      .items.map((item, index) => {
        const{name, description, price} =item;
        const isInCart = cartItems.find((itemIdex)=>itemIdex.name === name)
        return (
          <div
            key={index}
            className='h-[500px] w-[80%] desktop:w-full bg-slate-200 rounded-xl relative ' // Added flex and centering styles
          >
            <img
              src={item.image}
              alt=""
              className='h-[65%] w-full object-fit rounded-xl'
            />
            <div className='pl-5 pt-3'>
              <p className='font-bold text-xl'>{name}</p>
              <p className='text-gray-600'>{description}</p>
              <p className='text-red-700 font-bold'>${price.toFixed(2)}</p>
            </div>

            {isInCart? 
              <button className='bg-red-300 rounded-2xl border-gray-700 border w-[150px] h-10 flex items-center justify-between absolute -bottom-5 left-[30%] px-3'>
                <img src={decrease} alt="decrease icon" className='w-6 h-6'/>
                <p className='text-center w-6 h-6 flex items-center justify-center bg-slate-500 text-white rounded'>
                  {isInCart ? isInCart.quantity : 0}
                </p>
                <img src={increase} alt="increase icon" className='w-6 h-6'/>
              </button> 
              :
              <button className='bg-red-300 rounded-2xl border-gray-700 border w-[150px] h-10 flex items-center justify-between absolute -bottom-5 left-[30%] px-3' onClick={()=> handleOnClick(name, price)}>
                <img
                  src={shoppingCart}
                  alt="Shopping Cart Icon"
                  className='w-6 h-6'
                />
                Add to cart
              </button>
            }
              
          </div>  
        )
      })}
    </div>
    </div>
  )
}
