import { useContext} from "react";
import { Context } from "../../context/context";
import { SearchBar } from "../querybar/searchbar";
import { AnimateHeader } from "../../utils/motion";

function HeaderPart() {
    const Username = sessionStorage.getItem('name');
    const {setsidemenu} = useContext(Context);
    return(
    <AnimateHeader>
        <div className="border-b-2 fixed top-0 border-zinc-400 xl:p-4 flex flex-col xsm:rounded-b-3xl xl:rounded-none items-center justify-between bg-slate-200 w-full">
        <div className="w-full xsm:flex justify-between p-3 border-b-2 xl:hidden xsm:block">
            <div className="flex justify-between items-center gap-2">
                <img src="/img/logo.jpg" alt="No-Image" className="rounded-full" height="30px" width="30px"/>
                <p className="font-medium text-xl font-mono">LearnYaar</p>
            </div>
            <i className="uil uil-bars text-3xl xl:hidden" onClick={()=>{setsidemenu(true)}}></i>
        </div>
        <div className="flex justify-between items-center w-full px-3 py-1">
            <div>
                <div className="xsm:hidden xl:gap-x-2  xl:flex xl:block">
                    <img src="/img/logo.jpg" alt="No-Image" className="rounded-full" height="40px" width="40px"/>
                    <p className="font-medium text-3xl font-mono">LearnYaar</p>
                </div>
                <div className="flex xsm:flex-col xl:flex-row xl:gap-x-1 xsm:mt-[-1rem] xl:mt-[4px]">
                    <p className="text-lg xl:mt-0 xsm:mt-2">Welcome back,</p>
                    <p className="text-lg font-medium">{Username}</p>
                </div>
            </div>
        </div>
        <SearchBar/>
    </div>
</AnimateHeader>
    )
}

export default HeaderPart;