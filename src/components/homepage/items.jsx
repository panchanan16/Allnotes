import CardOfMain from "../card/card";
import {ProductContext} from '../../context/product.context';
import {useContext} from 'react';
import { TriSpinner } from "../../utils/loader";
import { filterbyprice } from "../category/eachcategory";
import { Context } from "../../context/context";

function ItemsSection() {
  const { curProduct } = useContext(ProductContext);
  const { applyvalue} = useContext(Context);
  const carddata = filterbyprice(applyvalue, [...curProduct], curProduct)
  return (
    <>
      <p className="font-medium text-1xl xl:text-2xl ml-[2rem]">
        Get your notes
      </p>
      <div className="item-section">
        <div className="xl:mb-[3rem] scroll-items ml-[1rem] xl:w-[67rem] xsm:w-[23rem] mt-2 flex gap-x-3 overflow-x-scroll">
           {!carddata.length ? <TriSpinner/> : carddata.map((el, ind)=>(
            <CardOfMain key={ind} cardsdata={el} btn={{btnname: 'buyandshare'}} />
           ))}
        </div>
      </div>
    </>
  );
}

export default ItemsSection;
