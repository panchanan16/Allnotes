import { useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { deletedoc } from "../../utils/firbase.utils";
import { ProductContext } from "../../context/product.context";
function CardOfMain(cardsdata) {
    const { setcallagain } = useContext(ProductContext);
    const dataToDelete = {delid: useRef(), streamid: useRef()};
    async function deletpost() {
      await deletedoc(dataToDelete.streamid.current.textContent, dataToDelete.delid.current.dataset.postid);
      setcallagain('call');
    }
    return(
     <div className="block">
          <Link to={window.location.pathname == '/index-page'?`post/${cardsdata.cardsdata.id}`:cardsdata.cardsdata.id}>
          <div className="item-each block bg-slate-200 xl:min-w-[14rem] xsm:min-w-[10rem] grow">
        <img src="/img/slider.jpg" alt="No-image" className="xl:h-44 xl:w-full xsm:h-24 xsm:w-full border-2"/>
         <div className="px-3 py-1 flex flex-col gap-y-0" data-postid={cardsdata.cardsdata.id} ref={dataToDelete.delid}>
            <h2 className="font-medium xsm:text-sm font-[600]">{cardsdata.cardsdata.name.subject}</h2>
            <span className="text-xs" ref={dataToDelete.streamid}>{cardsdata.cardsdata.name.stream}</span>
            <p className="text-sm font-medium xsm:text-xs">{cardsdata.cardsdata.name.title}</p>
            <p className="text-xs">{cardsdata.cardsdata.name.name}</p>
            <p className="text-xs font-extrabold">{`$${cardsdata.cardsdata.name.price}`}</p>   
         </div>
     </div>
      </Link>
      <div className="flex xsm:gap-x-3 bg-slate-300">
                {cardsdata.btn.btnname === 'buyandshare' ? <i className="uil uil-file-download text-white bg-black p-1 px-2 rounded-full xl:w-8"></i> : <i className="uil uil-trash-alt text-white bg-black p-1 px-2 rounded-full xl:w-8" onClick={deletpost}></i>}
                {cardsdata.btn.btnname === 'buyandshare' ? <i className="uil uil-share-alt text-white bg-black p-1 px-2 rounded-full xl:w-8"></i> : <i className="uil uil-edit text-white bg-black p-1 px-2 rounded-full xl:w-8"></i>}
            </div>
     </div>
    )
}

export default CardOfMain;