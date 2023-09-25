import { useState, useContext } from "react"
import { Context } from "../../context/context";

export function FilterBar() {
    const [hide, sethide] = useState(true);
    const {setapplyvalue} = useContext(Context);
    const [applyfiltervalue, setapplyfiltervalue] = useState('');

    function getval(e) {
      setapplyfiltervalue(e.target.value)
    }

    function handleFilterbar() {
      const path = window.location.pathname.split('/')
      const notpath = ['post', 'profile', 'my-cart']
      const res = path.map((el)=>{
        return notpath.includes(el);
      })
      if (res.includes(true)) {
        return;
      }
      sethide(!hide)
     
    }

    function ApplyFilter() {
      setapplyvalue(applyfiltervalue)
      sethide(true)
    }
    function RemoveFilter() {
      setapplyvalue('g');
      sethide(true)
    }
    return (
        <>
          <div className="flex flex-col items-center justify-center">
          <span className="text-white rounded-lg p-2 px-3 bg-slate-500 ml-[1rem]" onClick={handleFilterbar}>
                <i className="uil uil-filter text-2xl "></i>
            </span>
            <div className={`${hide? 'hidden':''} flex flex-col gap-2 rounded-lg w-[15rem] bg-white items-center justify-center p-3 fixed xl:top-[85px] xsm:top-[200px] xsm:right-[10px]`}>
              <div className="flex gap-2 border-2 rounded-lg p-1 px-2 w-full">
                <input type="radio" name="filterquery" value="lowtohigh" onChange={getval} />
                <label> low to high</label>
              </div>
              <div className="flex gap-2 border-2 rounded-lg p-1 px-2 w-full">
                <input type="radio" name="filterquery" value="hightolow" onChange={getval} />
                <label> high to low</label>
              </div>
      
              <div className="flex gap-4">
              <button className="rounded-[5px] bg-black text-white text-sm p-1 px-3 hover:border-2 hover:bg-white hover:text-black font-[600]" onClick={ApplyFilter}>Apply</button>
              <button className="rounded-[5px] bg-black text-white text-sm p-1 px-3 hover:border-2 hover:bg-white hover:text-black font-[600]" onClick={RemoveFilter}>Remove filter</button>
              </div>
            </div>
          </div>
        </>
    )
}