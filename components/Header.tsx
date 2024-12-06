
import { Poppins } from 'next/font/google';
import Link from "next/link";
import React from "react";
 
const poppins = Poppins({
  weight: '400', 
  subsets: ['latin'], 
});
export default function Header() {
  return (
    <header className={`${poppins.className} w-full fixed top-0 left-0 right-0 z-10  pt-1 `}>
      <div className="text-center mb-[38px] h-[48px]">
        <p className="bg-black text-white  py-[12px]  text-base">
          Summer Sale For All Swim Suits And Free Express Delivery-OFF 50%{" "}
          <span>
            <u className="pl-2">SHOP Now</u>
          </span>
        </p>
      </div>
      <div  className="max-w-7xl mx-auto  h-[38px]  px-9 flex justify-between items-center     ">
    <div> <img src="/icons/Logo.png" alt="" 
    className=' ' />  </div>
   <nav className="flex space-x-[40px]  ">
      <a href="#" className="text-gray-600 hover:text-gray-800">Home</a>
      <a href="#" className="text-gray-600 hover:text-gray-800">Contact</a> 
      <a href="#" className="text-gray-600 hover:text-gray-800">About</a>
      <a href="#" className="text-gray-600 hover:text-gray-800">Sign Up</a>
    </nav>
    <div className="   flex items-center gap-[24px]">
        <input type="text" 
        placeholder='What are you looking for?'
        className='bg-gray-100 p-2'/>
      <button><img src="/icons/search.png" alt="Search" className="" /></button>
      <button><img src="/icons/wishlist.png" alt="Wishlist" className="" /></button>
     <button> <img src="/icons/addtocard.png" alt="Add to Cart" className="" /></button>
     <button> <img src="/icons/account.png" alt="Account" className="w-8" /></button>
    </div></div>
    
     
   
    </header>
  );
}
