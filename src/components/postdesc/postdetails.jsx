import { ProductContext } from "../../context/product.context";
import { useContext, useEffect, useState } from "react";
import { TriSpinner } from "../../utils/loader";
import { Context } from "../../context/context";
import {motion } from "framer-motion"

function JustFilterWishlist(wishlist, product) {
  if(wishlist == ''){return  {
    list: [...wishlist, product],
    added: product.id
  };
  }else {const f = wishlist.filter((el)=>{return el.id === product.id})
    if (f == '') {
      return {
        list: [...wishlist, product],
        added: product.id 
      };
    }else{
      return {
        list: [...wishlist],
        added: product.id 
      };
    } 
  }
}

function colorsetting(para, setcolor, Act) {
  const res = para.includes(Act)
  setcolor(res);
}

export default function PostDetails() {
  const { curProduct } = useContext(ProductContext);
  const [color, setcolor] = useState(false);
  const { quant, setquant } = useContext(Context)
  const productId = window.location.pathname.split('/')[3];
  const ActualProduct = curProduct.length != undefined ? curProduct.filter(p => p.id === productId) : '';

  function addtocart(e) {
    const wishlisrArr = JustFilterWishlist(quant, ActualProduct[0])
    setcolor(wishlisrArr.added)
    setquant(wishlisrArr.list);
  }
  useEffect(()=>{
    colorsetting(quant, setcolor, ActualProduct[0]);
  }, [])
  
  return (
    <>
      <motion.div className="flex xl:flex-row gap-[3rem] xl:ml-[15rem] xl:mt-[2rem] xsm:mt-[2rem] xsm:flex-col xsm:p-2" variants={{hidden: {opacity: 0, y: 80}, visible: {opacity: 1, y: 0}}} initial="hidden" animate="visible"
        transition={{duration: 0.4, delay: 0.25}}>
        <div className="border-2 p-2 xl:w-2/4 xsm:w-full">
          <img src="/img/slider.jpg" className="xsm:h-[12rem] w-full xl:h-[20rem]"/>
          <button className="bg-black text-white p-2 px-5 mt-[-8rem]">View full</button>
        </div>
        <div className="details-person"> 
          <p className="text-3xl font-bold">
            {ActualProduct != ''?ActualProduct[0].name.title : <TriSpinner />}
          </p>
          <p className="text-2xl">
            {ActualProduct != ''?ActualProduct[0].name.subject : <TriSpinner />}
          </p>
          <p className="text-2xl font-bold">
            ${ActualProduct != ''?ActualProduct[0].name.price : <TriSpinner />}
          </p>
          <p className="text-2xl">
            {ActualProduct != ''?ActualProduct[0].name.stream : <TriSpinner />}
          </p>
          <p className="text-xl">
            {ActualProduct !=''?ActualProduct[0].name.name : <TriSpinner />}
          </p>
          <div className="flex gap-5 mt-[2rem] xsm:flex-col">
             <button className={`hover:bg-white hover:text-black hover:border-2 p-2 px-5 rounded-lg font-bold ${color ?'bg-white text-black border-2 ': 'bg-[#facc15] text-white'}`} onClick={addtocart}>{`${color ?'Wishlisted': 'Add to Wishlist'}`}</button>
             <button className="hover:bg-white hover:text-black hover:border-2 bg-[#f97316] text-white p-2 px-6 rounded-lg font-bold">Buy Now</button>
          </div>
        </div>
      </motion.div>
    </>
  )
}

