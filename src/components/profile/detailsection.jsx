import { useEffect, useState, useRef } from 'react';
import { GetUserDetails, updateProfile } from '../../utils/firbase.utils';

export default function DetailsSection() {
    const [username, setusername] = useState('');
    const [userage, setuserage] = useState('');
    const [usercollege, setusercollege] = useState('');
    const [userid, setuserid] = useState('');
    const idofuser = useRef()
    const handleChange = event => {
        switch (event.target.name) {
            case 'username':
                return setusername(event.target.value);
            case 'age':
                return setuserage(event.target.value);
            case 'college':
                return setusercollege(event.target.value);
            default:
                break;
        }
    };
    useEffect(() => {
        async function getuserdetail() {
            const cat = await GetUserDetails();
            if (cat != '') {
            setusername(cat[0].name.username);
            setuserage(cat[0].name.age);
            setusercollege(cat[0].name.college);
            setuserid(cat[0].id)
            }
        }
        getuserdetail();
    }, [])

    async function UpdateYourDetails(e) {
        e.preventDefault();
        await updateProfile(userid, { username: username, age: userage, college: usercollege });
    }
    return (
        <>
            <div className="flex flex-col items-center justify-center xl:w-[30rem] xl:ml-[15rem] xsm:ml-[1rem] xsm:w-[21rem] mt-[3rem]">
                <p className="font-medium xl:text-3xl xsm:text-2xl" data-userid={userid} ref={idofuser}>Your Personal Details</p>
                <form className="flex flex-col gap-4">
                    <button onClick={UpdateYourDetails} className="xl:ml-[28rem] xsm:ml-[20rem]"><i className="uil uil-arrow-right text-4xl hover:bg-black hover:text-white hover:rounded-full hover:px-2"></i></button>
                    <input type="text" className="border-b-2 p-2 text-xl focus:outline-none focus:border-b-2 focus:border-cyan-700" name="username" value={username} onChange={handleChange} />
                    <input type="text" className="border-b-2 p-2 text-xl focus:outline-none focus:border-b-2 focus:border-cyan-700" name="age" value={userage} onChange={handleChange} placeholder="Update your age" />
                    <input type="text" className="border-b-2 p-2 text-xl focus:outline-none focus:border-b-2 focus:border-cyan-700" name="college" value={usercollege} onChange={handleChange}  placeholder="Update your college" />
                </form>
            </div>
        </>
    )
}
