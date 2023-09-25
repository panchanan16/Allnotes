import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FilterBar } from "./filterbar";
import { categoryContext } from "../../context/category.context";

export function SearchBar() {
    const [searchvalue, setsearchvalue] = useState(null);
    const {setsearchdata} = useContext(categoryContext);
    const navigate = useNavigate();
    const getsearchResult = function (e) {
        setsearchvalue(e.target.value); 
    }

    function searchBtn() {
        if (searchvalue) {
            navigate(`/index-page/search-result/${searchvalue}`);
            setsearchdata(searchvalue);
        }else{
            navigate(window.location.pathname);
        }  
    }
    return (
        <div className="xl:flex xsm:flex xsm:mt-[1rem] gap-2 xsm:pb-3 xl:right-36 xl:top-3 items-center xl:inline-block xl:mt-4 xl:ml-10 xl:absolute xsm:block">
           <div className="flex justify-center">
           <input type="text" onKeyDown={(e)=>{if(e.key === 'Enter'){searchBtn()}}} className="xl:w-[20rem] p-2 px-3 rounded-l-lg" placeholder="Search your query" onChange={getsearchResult}/>
            <span className="text-white rounded-r-lg p-2 bg-black" onClick={searchBtn}>
            <i className="uil uil-search bg-black text-xl text-white px-1"></i>
            </span>
           </div>
           <FilterBar/>
        </div>
    )
}