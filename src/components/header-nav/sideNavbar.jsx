import { Link } from "react-router-dom";
import { useContext} from "react"
import { Context } from "../../context/context";
import Logout from "./logout";
import { motion } from "framer-motion"

function SideNavbar(){
    const {sidemenu, setsidemenu, quant} = useContext(Context);
    return(
        <>
        <motion.aside className={`${sidemenu?'xsm:block':'xsm:hidden'} xl:block bg-slate-100 sidenav h-screen xl:w-1/6 fixed xl:top-[110px] xsm:top-[180px] xsm:w-3/6`} variants={{
          hidden: {opacity: 0, x: 80},
          visible: {opacity: 1,x: 0}
        }}
        initial="hidden"
        animate="visible"
        transition={{duration: 1, delay: 0.25}}>
        <i className="uil uil-times-circle text-4xl xl:hidden xl:ml-[7rem] xsm:ml-[10rem]" onClick={()=>{setsidemenu(false)}}></i>
          <ul className="flex flex-col h-[30rem] overflow-y-scroll justify-center gap-y-8 items-center ml-2">
                <li className="hover:bg-black p-3 border-b-2 w-full hover:text-gray-50 mt-10"><i className="uil uil-estate text-2xl mr-2"></i><Link to="/index-page">Home</Link></li>
                <li className="hover:bg-black p-3 border-b-2 w-full hover:text-gray-50"><i className="uil uil-heart text-2xl mr-2"></i><Link to="my-cart">My Wishlist</Link><span className={`xl:ml-[1rem] xsm: ml-[5px] bg-black rounded-full text-white p-1 px-[10px] ${quant == 0 ? 'hidden' : ''}`}>{quant.length}</span></li>
                <li className="hover:bg-black p-3 border-b-2 w-full hover:text-gray-50"><i className="uil uil-setting text-2xl mr-2"></i><Link to="settings">Settings</Link></li>
                <li className="hover:bg-black p-3 border-b-2 w-full hover:text-gray-50"><i className="uil uil-user text-2xl mr-2"></i><Link to="profile">My profile</Link></li>
                <Logout/>
            </ul>
        </motion.aside>
        </>
    )
}

export default SideNavbar;