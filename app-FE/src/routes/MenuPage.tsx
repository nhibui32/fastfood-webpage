import React from 'react'
import NavBar from '../components/LandingPage/NavBar'
import {menu} from '../data/Menu.js'
import { useState } from 'react'

const shoppingCart = "/CredentialsPageImages/ShoppingCart.svg";

export default function HomePage() {
  // menu[0] default the first category on the menu
  // so the current state at default will be menu[0].category which is pizza 
  const[selectedCategory, setSelectedCategory] = useState(menu[0].category)
  
  return (
    <div>
      <NavBar/>

      <div className='p-5 desktop:p-10 '>
        <h1 className='text-3xl desktop:5xl font-bold'>MENU</h1>
        <div className='w-[80%]  flex flex-wrap justify-start gap-10 p-4 rounded-lg text-xl desktop:text-3xl'>
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
      <div className=' grid grid-cols-1 desktop:grid-cols-3 gap-10 p-5 desktop:p-10 w-[70%] desktop:gap-36'>
            {menu
            // selectedCategory right now is the category of selected from the users. cat.category will return the category and theirs(items)
              .find((cat) => cat.category === selectedCategory)
              .items.map((item, index)=>(
                <div key={index} className='h-[500px] w-[400px] bg-slate-200 rounded-xl relative'>
                  <img src={item.image} alt="" className='h-[65%] w-full object-fit rounded-xl'/>
                  <div className='pl-5 pt-3'>
                    <p className='font-bold text-xl'>{item.name}</p>
                    <p className='text-gray-600'>{item.description}</p>
                    <p className='text-red-700 font-bold'>${item.price.toFixed(2)}</p>
                  </div>

                  <button className='absolute -bottom-5 left-[30%] text-center font-bold bg-red-300 text-xl px-4 pt-2 py-3 rounded-lg active:bg-red-500 flex gap-2 items-center shadow-lg'><img src={shoppingCart} alt="Shopping Cart Icon" className='w-8 h-8' />Add to cart</button>
                  
                </div>
              ))
            }
      </div>

    </div>
  )
}
