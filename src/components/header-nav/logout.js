import {Link} from "react-router-dom";
import {memo} from "react"

function Logout() {
   console.log("I am from logged out")
   return(
   <>
     <li onClick={() =>{sessionStorage.clear()}} className="hover:bg-black p-3 border-b-2 w-full hover:text-gray-50"><i className="uil uil-sign-out-alt text-2xl mr-2"></i><Link to='/'>Log Out</Link></li>
   </>
   ) 
}

export default memo(Logout);