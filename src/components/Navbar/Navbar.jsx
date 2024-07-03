const Navbar = () => {
    const links = <>
        <li className="mx-2 px-1 cursor-pointer border-b-2 border-transparent hover:border-b-[#FFC637]">Home</li>
        <li className="mx-2 px-1 cursor-pointer border-b-2 border-transparent hover:border-b-[#FFC637]">Services</li>
        <li className="mx-2 px-1 cursor-pointer border-b-2 border-transparent hover:border-b-[#FFC637]">Blog</li>
        <li className="mx-2 px-1 cursor-pointer border-b-2 border-transparent hover:border-b-[#FFC637]">About</li>
    </>
    return (
        <header className="md:max-w-[1440px] md:w-[1160px] mx-auto">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-normal text-base">
                            {links}
                        </ul>
                    </div>
                    <a><img src="./logo-dark.png" alt="Logo...." className="w-[124.818px]" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-normal text-base">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn font-medium rounded-[12px] border-[1px] border-[#343268] hover:bg-[#FFC637]">Appointment <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="Arrow 1" d="M13.3137 1.86314C13.3137 1.31086 12.866 0.863141 12.3137 0.863141L3.31371 0.863141C2.76142 0.863141 2.31371 1.31086 2.31371 1.86314C2.31371 2.41543 2.76142 2.86314 3.31371 2.86314L11.3137 2.86314L11.3137 10.8631C11.3137 11.4154 11.7614 11.8631 12.3137 11.8631C12.866 11.8631 13.3137 11.4154 13.3137 10.8631L13.3137 1.86314ZM1.70711 13.884L13.0208 2.57025L11.6066 1.15603L0.292893 12.4697L1.70711 13.884Z" fill="#020043" />
                    </svg>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Navbar;