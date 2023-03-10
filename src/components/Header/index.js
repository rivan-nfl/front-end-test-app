const Header = () => {
    return (
        <div className="flex bg-[#FFF] px-[1vw] h-[6vh]">
            <div className="w-full flex items-center">
                <i className="fa fa-search text-xl"></i>
                <input type='text' placeholder="Search anything here..." className="ml-2 text-base outline-0 w-[30%]" />
            </div>
            <div className="flex items-center w-[10%] justify-between">
                <div className="flex items-center cursor-pointer">
                    <i className="fas fa-sign-out-alt text-2xl text-[#EE0D0D] mr-2"></i>
                    <span className="text-[#EE0D0D] font-bold text-lg">Logout</span>
                </div>
                <i className="fa fa-bars text-2xl"></i>
            </div>
        </div>
    )
}

export default Header;