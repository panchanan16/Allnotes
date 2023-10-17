import { useContext} from "react";
import { Context } from "../context/context";

function EachCartObject(data) {
    const {quant, setquant} = useContext(Context);
    function removeItem(e) {
       const item = quant.filter((el)=>{return el.id != e.target.id})
       setquant(item)
    }

    return(
        <div className="border-b-2 flex justify-between">
        <img src={data.data.name.thumbnail} className="h-[8rem] w-[10rem] p-3"/>
        <div className="w-1/3">
            <p className="font-bold">{data.data.name.title}</p>
            <p>${data.data.name.price}</p>
            <p className="text-[14px]">{data.data.name.subject}</p>
        </div>
        <div className="border-l-2 w-1/3 flex justify-evenly items-center h-[8rem]">
            <button onClick={removeItem} id={data.data.id} className="hover:border-[black] hover:text-black border-2 text-[#94a3b8] p-1 px-2">Remove <i className="uil uil-minus-circle"></i></button>
            <button className="hover:border-[black] hover:text-black border-2 text-[#94a3b8] p-1">Download <i className="uil uil-file-download"></i></button>
        </div>
    </div>
    )
}


export default function MyCart() {
    const {quant} = useContext(Context);
    const total = quant != '' ? quant.map((el)=> Number(el.name.price)) : [];
    const totalAmount = total != '' ? total.reduce((t, el)=>t+el) : '0';
    return(
        <>
            <div className="border-2 mt-[1rem] w-2/4 ml-[27rem] h-screen">
              <div className="bg-[#4338ca] p-2 flex justify-center items-center">
                 <h1 className="text-white text-2xl">My Wishlist <i className="uil uil-heart"></i></h1>
              </div>
              <div className="overflow-y-scroll h-screen">
                {
                    quant != '' ? quant.map((el)=>(<EachCartObject key={el.id} data={el}/>)):''
                }
              </div>
              <div className="bg-black fixed bottom-0.5 w-2/4 p-3 flex justify-between items-center">
                <button className="p-1 bg-[#4338ca] rounded-[5px] px-3 text-white">Download All <i className="uil uil-file-download"></i></button>
                <p className="text-white mr-[2rem] text-xl font-bold">total $ {totalAmount} </p>
              </div>
            </div>

        </>
    )
}