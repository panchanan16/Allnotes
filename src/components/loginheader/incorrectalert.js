
export function IncorrectAlert(status) {
    return(
        <>
            <div className={`bg-red-300 p-[.4rem] flex justify-center gap-2 font-[500] ${status.status ? 'block' : 'hidden'}`}>
                <h1>Incorrect password or username</h1>
                <i className="uil uil-exclamation-triangle text-red-600"></i>
            </div>
        </>
    )
}

export function SuccessAlert(status) {
    return(
        <>
            <div className={`bg-green-200 p-[.4rem] flex justify-center gap-2 font-[500] ${status.status ? 'block' : 'hidden'}`}>
                <h1 className="text-[14px]">Signup Successfull !</h1>
                <i className="uil uil-check-circle text-green-600 text-[16px]"></i>
                <h1 className="text-[14px]">Go back to Login</h1>
            </div>
        </>
    )
}