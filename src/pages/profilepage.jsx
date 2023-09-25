import { Link, Outlet } from 'react-router-dom';
import { useCookies } from "react-cookie";
import { loginbtntoback } from '../components/cssf/css';
import { useNavigate } from 'react-router-dom';

function ProfilePage() {
    const [cookies] = useCookies();
    const res = cookies.name;
    let navigate = useNavigate();
    if (res === "12345") {
        return (
            <>
                <section className="profile xl:ml-[14rem] xl:w-full xsm:mt-[5px]">
                    <div className="profilenavbar bg-green-100 p-2">
                        <ul className="flex justify-evenly font-medium">
                            <li className={`${window.location.pathname==='/index-page/profile'? 'border-cyan-600 border-b-4':''} hover:border-b-4 hover:border-cyan-600 p-1 px-5`}>
                                <Link to="">My post</Link>
                            </li>
                            <li className={`${window.location.pathname==='/index-page/profile/mybio'? 'border-cyan-600 border-b-4':''} hover:border-b-4 hover:border-cyan-600 p-1 px-5`}>
                                <Link to="mybio">Details</Link>
                            </li>
                        </ul>
                    </div>
                    <Outlet />
                </section>
                <div>
                </div>
            </>
        )
    } else {
        return (
            <div className="flex flex-col items-center mt-[7rem] ml-[6rem]">
                <h1 className="text-4xl mt-14 underline">Plz log to continue!!</h1>
                <button className={loginbtntoback} onClick={() => navigate("/")}>
                    Go back to Login
                </button>
            </div>
        )
    }
}

export default ProfilePage;