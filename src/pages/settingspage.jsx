import { AnimateNow } from "../utils/motion";

function Settingspage() {
    return(
           <div className="ml-[33rem] mt-[2rem] flex flex-col gap-2 border-2 p-[10px] py-[20px] rounded-[9px] w-2/6">
              <div className="bg-red-300 flex justify-center gap-3 p-[7px] py-[13px] rounded-[5px]">  
                 <i className="uil uil-question-circle text-xl font-[500]"></i>
                 <h1 className="text-xl text-black font-[500]">Help</h1>
              </div>
              <div className="bg-lime-200 flex justify-center gap-3 p-[7px] py-[13px] rounded-[5px]">  
                 <i className="uil uil-question-circle text-xl font-[500]"></i>
                 <h1 className="text-xl text-black font-[500]">Help</h1>
              </div>
              <div className="bg-red-200 flex justify-center gap-3 p-[7px] py-[13px] rounded-[5px]">  
                 <i className="uil uil-question-circle text-xl font-[500]"></i>
                 <h1 className="text-xl text-black font-[500]">Help</h1>
              </div>
              <div className="bg-yellow-200 flex justify-center gap-3 p-[7px] py-[13px] rounded-[5px]">  
                 <i className="uil uil-question-circle text-xl font-[500]"></i>
                 <h1 className="text-xl text-black font-[500]">Help</h1>
              </div>
           </div>
    )
}

export default Settingspage;