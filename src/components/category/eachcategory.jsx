import { useContext} from "react";
import { ProductContext } from "../../context/product.context";
import CardOfMain from "../card/card";
import { TriSpinner } from "../../utils/loader";
import { Context } from "../../context/context";

export function filterbyprice(valu, arr, orgarr) {
    if (valu === 'lowtohigh') {
        const fil = arr;
        fil.sort((a, b) => a.name.price - b.name.price);
        return fil;
    }else if (valu === 'hightolow'){
        const fil = arr;
        fil.sort((a, b) => b.name.price - a.name.price);
        return fil;
    }else {
        return orgarr;
    }
   
}

function EachCategory() {
    const p = {btnname: 'buyandshare'}; 
    const { filteredItems } = useContext(ProductContext);
    const {applyvalue} = useContext(Context);
    const carddata = filterbyprice(applyvalue, [...filteredItems], filteredItems);
    return (
        <> 
            <div className="item-section">
                <div className="scrol-items ml-[1rem] xl:w-[67rem] xsm:w-[23rem] mt-2 flex gap-x-3 overflow-x-scroll">
                    {!carddata.length ? <TriSpinner/> : carddata.map((el, ind) => (
                        <CardOfMain key={ind} cardsdata={el} btn={p} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default EachCategory;