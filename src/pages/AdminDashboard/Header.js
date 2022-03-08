import React from 'react';
import { Link } from 'react-router-dom';
const Header = ()=>{
    return (
        <>
             <div className=" flex">
                    <ul className=" flex justify-around items-center mx-2  my-5">
                        <li className=" bg-gray-500 px-3 border border-gray-400 py-2 "> <Link className="px-2 text-white" to="/" >My Profile</Link></li>
                        <li className=" bg-gray-500 px-3 border border-gray-400 py-2"> <Link className="px-2 text-white" to="/school">School Profile</Link></li>
                        <li className=" bg-gray-500 px-3 border border-gray-400 py-2"> <Link className="px-2 text-white" to="/teacher">Teachers Profile</Link></li>
                        <li className=" bg-gray-500 px-3 border border-gray-400 py-2"> <Link className="px-2 text-white" to="/student">Student Profile</Link></li>
                        <li className=" bg-gray-500 px-3 border border-gray-400 py-2"> <Link className="px-2 text-white" to="/add">Add Profile</Link></li>
                    </ul>
                </div>
        </>
    )
}

export default Header;