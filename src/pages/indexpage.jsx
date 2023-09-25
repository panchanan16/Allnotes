import { loginbtntoback } from "../components/cssf/css";
import { useNavigate, Outlet } from "react-router-dom";
import { useCookies } from "react-cookie";
import HeaderPart from "../components/header-nav/header";
import SideNavbar from "../components/header-nav/sideNavbar"

export default function MainHomef() {
  const navigate = useNavigate();
  const [cookies] = useCookies();
  const res = cookies.name;
  if (res === "12345") {
    return (
        <section className="flex xl:mt-[7rem] xsm:mt-[12rem]">
          <HeaderPart />
          <SideNavbar />
          <Outlet/>
        </section>
    );
  } else {
    return (
      <div className="flex flex-col items-center mt-[7rem] ml-[5rem]">
        <h1 className="text-4xl mt-14 underline">Plz log to continue!!</h1>
        <button className={loginbtntoback} onClick={() => navigate("/")}>
          Go back to Login
        </button>
      </div>
    );
  }
}
