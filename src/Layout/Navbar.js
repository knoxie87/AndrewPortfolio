import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai"

const Navbar = (props) => {
    return (
        <div>
            <nav className="p-5 pl-2 z-40 flex justify-between bg-gray-100">
                <h1 className='h-full text-lg w-32 font-light'>Andrew Knox Portfolio</h1>
                <div className='flex gap-3 flex-row items-center justify-center'>
                    <button aria-label="Navigation" onClick={() => { props.setSideBar() }} className='fa-2x border p-2 border-solid'>
                        {props.displayIcon == false ?
                            <FaBars className=" text-2xl" /> : <AiOutlineClose className=" text-2xl"/>}
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar