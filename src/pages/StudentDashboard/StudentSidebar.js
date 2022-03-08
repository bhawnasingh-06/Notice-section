import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import logo from "../../images/logo.png";

export default function Sidebar({sidebarOpen, setSidebarOpen}) {
  const menus = [
    { title: "User Profile", url: "/studentDashboard/studentProfile" },
    { title: "Library", url: "/studentDashboard/studentLibrary" },
    { title: "Assessment", url: "/studentDashboard/studentAssessment" },
    { title: "Live Class", url: "/live-class" },
    { title: "Discussions Forums", url: "/discussions-forum" },
    { title: "Calendar", url: "/studentDashboard/studentCalender" },
    { title: "Reports", url: "/studentDashboard/studentAccessReport" },
    { title: "Fee Collection", url: "/studentDashboard/studentFee" },
    { title: "Documents", url: "/studentDashboard/studentDocuments" },
    { title: "Notices", url: "/studentDashboard/studentNotices" },
  ];
  return (
    <div>
      {/* sidebar toggler icon */}
   <div className="p-5 text-4xl ">
   <AiOutlineMenu onClick={() => sidebarOpen === false ? setSidebarOpen(true):setSidebarOpen(false)}/>
   </div>
      {/* sidebar */}
      <div
      className={`${sidebarOpen ? "inline-block " : "w-0 hidden"} space-y-4 border-r `}
    >
      <div className="flex justify-between items-center p-4 mb-6 ">
        <Link to="/">
          <div className="flex">
            <img className="h-6 mr-1" src={logo} alt="YI E-SCHOOL" />
            <h1 className="font-semibold base">YI E-SCHOOL</h1>
          </div>
        </Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 flex-none"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <div className="h-64">
        <div className="w-full border-t border-gray-300"></div>
        {menus &&
          menus.map((menu, index) => (
            <NavLink
              to={menu.url}
              key={index}
              className={({ isActive }) =>
                `flex items-center py-2 px-4 w-full text-left cursor-pointer  hover:text-green-700 focus:outline-none focus:ring-2 focus:ring-green-700 focus:text-green-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white ${
                  isActive ? "bg-green-200" : "hover:bg-gray-100"
                }`
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 10h16M4 14h16M4 18h16"
                />
              </svg>
              &emsp;
              {menu.title}
            </NavLink>
          ))}
      </div>
    </div>
    </div>
  );
}
