import React from 'react'
import { useState } from 'react'
import {menu} from '../../data/Menu.js'

const shoppingCart = "/CredentialsPageImages/ShoppingCart.svg";
const increase ="/Menu/increase.svg";
const decrease ='/Menu/decrease.svg';

export default function Dashboard() {
      // menu[0] default the first category on the menu
      // so the current state at default will be menu[0].category which is pizza 
    const[selectedCategory, setSelectedCategory] = useState(menu[0].category)
    // check if the items already in cart?
    const[cartItems, setCartItems] =useState([]);
    const handleOnClick = (name, price) => {
      setCartItems([...cartItems, { name, price, quantity: 1 }]);
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
                <p className='text-wrap'>{item.name}</p>
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
                    <button className='flex items-center gap-3 bg-primary p-2 rounded-lg' onClick={()=> handleOnClick(name, price)}>
                    <img src={shoppingCart} alt="shopping Cart Icon" className='w-8 h-8'/>
                    <p>Add to cart</p>
                  </button>
                  }
                </div>
              </div>
            )
          })
        }
      </div>

    </div>
  )
}



// import React from 'react'
// import DisplayMenu from './DisplayMenu'
// import {menu} from '../../data/Menu.js'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import 'swiper/css'
// import 'swiper/css/pagination'
// import 'swiper/css/free-mode'
// import { Navigation} from 'swiper/modules';
// import { DiVim } from 'react-icons/di';


// export default function Dashboard() {
//   return (
//     <div className='text-primaryText p-5 desktop:p-10'>
//       <h1 className='text-3xl desktop:text-5xl font-bold'>Hey Nhi!</h1>
//       <div className='mt-5 text-3xl desktop:text-5xl bg-containerBackground'>
//         <h1>Categories</h1>
//         <div className='flex items-center content-center justify-center mt-5 p-5 text-xl desktop:text-2xl '>
//           <Swiper
//             slidesPerView={2}
//             spaceBetween={15}
//             navigation={true}
//             modules={[Navigation]}
//             centeredSlides={true}
//             breakpoints={{
//               1024:{slidesPerView:3},
//               1440:{slidesPerView:5},
//             }}
//           >
//             {menu.map((category, index)=>{
//               return (
//                 <SwiperSlide key={index} className='bg-gray-600 text-center justify-center'>
//                   <div className=''>
//                     <p>{category.category}</p>
//                     <img src={category.catImg} alt="" className='w-[100px] h-[100px]'/>
//                   </div>
//                 </SwiperSlide>
//               )
//             })}

//           </Swiper>
//         </div>
//       </div>
//     </div>
//   )
// }


