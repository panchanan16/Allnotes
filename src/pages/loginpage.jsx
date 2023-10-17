/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { maindiv, backupcss, loginbtn, inpcss } from "../components/cssf/css";
import { useRef, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginHeader from "../components/header-nav/loginheader";
import { useCookies } from 'react-cookie';
import { loginuser } from "../utils/firbase.utils";
import Spinner from "../utils/loader";
import { AnimateNow } from "../utils/motion";
import { IncorrectAlert } from "../components/loginheader/incorrectalert";


export function Loginf() {
  const email = useRef();
  const password = useRef();
  const [cookies, setCookie] = useCookies(['name']);
  const navigate = useNavigate();
  const [spin, setspin] = useState(false);
  const [alrt, setalrt] = useState(false);


  async function LoginUser() {
    setspin(true)
    const entry = await loginuser(email.current.value, password.current.value);
    if (entry) {
      setCookie('name', '12345');
      navigate('/index-page')
      sessionStorage.setItem('name', email.current.value)
      setspin(false)
    }else{
        setalrt(true);
        setspin(false)
    }
  }

  return (
    <AnimateNow>
      <IncorrectAlert status={alrt} />
      <LoginHeader />
      <div className={maindiv}>
        <div className="container border-2 drop-shadow-md xsm:2/4 sm:w-2/4 xl:w-1/3 bg-white h-96 p-8 flex gap-y-4 flex-col">
          <span className="text-sm font-medium relative block">
            Your Username
          </span>
          <input
            type="text"
            placeholder="Enter your email"
            className={inpcss}
            ref={email}
          />
          <span className="text-sm font-medium relative block">
            Your Password
          </span>
          <input
            type="text"
            placeholder="Enter your password"
            className={inpcss}
            ref={password}
          />
          <button className={loginbtn} onClick={LoginUser}>
            { spin ? <Spinner className="ml-10"/> : 'Login'}
          </button>
          <div className={backupcss}>
            <Link to="/signup" className="underline text-sm">
              Don't have an account?
            </Link>
            <Link to="/forgot-pass" className="underline text-sm">
              Forgot password?
            </Link>
          </div>
        </div>

        <div className="md:w-96 xsm:w-52 mb-6 xsm:mt-10">
          <img src="reading-book.png" alt="" />
        </div>
      </div>
    </AnimateNow>
  );
}
