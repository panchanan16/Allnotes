import { ProductContext } from "../context/product.context";
import { useContext } from "react";
import CardOfMain from "../components/card/card";
import { TriSpinner } from "../utils/loader";
import { useParams } from "react-router-dom";
import { filterbyprice } from "../components/category/eachcategory";
import { Context } from "../context/context";

export default function SearchResult() {
    const { curProduct } = useContext(ProductContext);
    const { applyvalue } = useContext(Context);
    const {query} = useParams();
    const carddata = filterbyprice(applyvalue, [...curProduct], curProduct);
    return (
        <>
            <div className="xl:ml-[15rem] xl:mt-[2rem]">
                <p className="font-medium text-1xl xl:text-2xl ml-[2rem]">
                    Here are some result !
                </p>
                <div className="item-section">
                    <div className="ml-[1rem] xl:w-[67rem] xsm:w-[23rem] mt-5 flex gap-x-3 overflow-x-scroll">
                        {carddata.length != undefined ? carddata.map((el, ind) => {
                        if (el.name.subject.toLowerCase().includes(query) || el.name.title.toLowerCase().includes(query) || el.name.stream.toLowerCase().includes(query)) {
                            return  <CardOfMain key={ind} cardsdata={el} btn={{ btnname: 'delete' }} />
                        }
                        }) : <TriSpinner />}
                    </div>
                </div>
            </div>
        </>
    )
}