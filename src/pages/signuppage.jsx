import {backupcss, loginbtn, inpcssS } from "../components/cssf/css";
import { Link } from "react-router-dom";
import LoginHeader from "../components/header-nav/loginheader";
import { AnimateNow } from "../utils/motion";
import { useRef, useState } from "react";
import { SignUser } from "../utils/firbase.utils";
import { SuccessAlert } from "../components/loginheader/incorrectalert";
import Spinner from "../utils/loader";

export function Signupf() {
  const [alrt, setalrt] = useState(false);
  const [spin, setspin] = useState(false);
  const username = useRef()
  const Email = useRef()
  const phno = useRef()
  const password = useRef()

  async function signupok() {
   setspin(true)
   const signupdata = {user:username.current.value, email:Email.current.value, phnum :phno.current.value, pass:password.current.value}
   const entry = await SignUser(signupdata);
   if (entry) {
    setalrt(true);
    setspin(false)
   }
  }
  return (
    <AnimateNow>
     <SuccessAlert status={alrt}/>
      <LoginHeader />
      <div className="flex justify-center ">
        <div className="container border-2 drop-shadow-md xsm:mt-10 xl:mt-[25px] xsm:2/4 sm:w-2/4 xl:w-1/3 bg-white p-[20px] flex gap-y-4 flex-col">
          <span className="text-sm font-medium relative block">
            Your Username
          </span>
          <input
            type="text"
            placeholder="Enter your Name"
            className={inpcssS}
            ref={username}
          />
          <span className="text-sm font-medium relative block">Your Email</span>
          <input
            type="text"
            placeholder="Enter your Email"
            className={inpcssS}
            ref={Email}
          />
          <span className="text-sm font-medium relative block">
            Your Phone number
          </span>
          <input
            type="text"
            placeholder="Enter your Phone number"
            className={inpcssS}
            ref={phno}
          />
          <span className="text-sm font-medium relative block">
            Your Password
          </span>
          <input
            type="password"
            placeholder="Enter your Password"
            className={inpcssS}
            ref={password}
          />
          <button className={loginbtn} onClick={signupok}>
          { spin ? <Spinner className="ml-10"/> : 'Signup'}
          </button>
          <div className={backupcss}>
            <Link to="/" className="underline text-sm">
              Already have an account?
            </Link>
          </div>
          </div>
      </div>
    </AnimateNow>
  );
}
