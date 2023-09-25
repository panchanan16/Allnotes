import { Outlet } from "react-router-dom";

function LoginHeader() {
  return (
    <>
      <div className="md:mt-24 xl:mt-[1rem] ml-[5rem] flex flex-col items-center gap-y-2">
        <h1 className="text-4xl font-medium">Learnyaar</h1>
        <h2 className="text-3xl">Login or signup to explore </h2>
      </div>
      <Outlet />
    </>
  );
}

export default LoginHeader;
