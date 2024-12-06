import Image from "next/image"
export default function main(){
  return(
    <div className="mt-36 ">
      <hr className=""/>
     <div className=" flex flex-row mx-[135px]  pt-8     ">
       
      <div className=" flex  flex-col w-[217px] mx-4 pl-1 gap-y-[16px] border-r-2">
      <div>Womans Fashion</div>
      <div>Mens Fashion</div>
      <div>Electronics</div>
      <div>Home and Lifestyle</div>
      <div>Medicine</div>
      <div>Sports and Outdoor</div>
      <div>Babys and Toys</div>
      <div>Groceries and Pets</div>
      <div>Health and Beauty</div>
      </div>
      <div>  <img
      src="/icons/mobile.png"
      alt="Sample image"
      width={892}
      height={344}
      loading="lazy"
      className="ml-16"
    /></div>
     </div>
    </div>
  )
}