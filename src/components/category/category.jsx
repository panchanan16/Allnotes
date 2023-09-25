import { categoryContext } from "../../context/category.context";
import { useContext, useState } from "react";
import {TriSpinner} from "../../utils/loader";
import { Outlet, useNavigate } from "react-router-dom";
import { ProductContext } from "../../context/product.context";

function Category() {
  const [color, setcolor] = useState('');
  const { category } = useContext(categoryContext);
  const { setfilterproductsid } = useContext(ProductContext);
  const navigate = useNavigate();
  function navig(e) {
    setcolor(e.target.dataset.catid)
    if (window.location.pathname == '/index-page') {
      navigate('category-page');
      setfilterproductsid(e.target.dataset.catid);
    }else{
      setfilterproductsid(e.target.dataset.catid);
    } 
  }

  return (
    <>
    <p className="font-medium text-1xl xl:text-2xl ml-[1rem]">Choose Subjects</p>
      <div className="categoryClass overflow-x-scroll xsm:w-[23rem] xl:w-[67rem] ml-[1rem]">
        <ul className="flex gap-x-6 mt-2">
          {!category.length ? <TriSpinner/> : category.map((cat) => (
            <li
              className="flex flex-col text-xs justify-center items-center font-medium"
              key={cat.id}
            >
              <i onClick={navig} className={`${color === cat.id ? 'bg-black' : 'bg-green-400'} uil uil-calculator-alt text-4xl p-2 px-3 rounded-lg text-white`} data-catid={cat.id}></i>
              {cat.id}
            </li>
          ))}
        </ul>
        <Outlet/>
      </div>
    
    </>
  );
}

export default Category;
