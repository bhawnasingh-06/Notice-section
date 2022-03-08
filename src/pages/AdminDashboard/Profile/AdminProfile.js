import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const AdminProfile = () => {
    const navs = [
        {id:1, nav:"My Profile", link: "/adminDashboard/adminProfile/myProfile"},
        {id:1, nav:"School Profile", link: "/adminDashboard/adminProfile/schoolProfile"},
        {id:1, nav:"Teacher Profile", link: "/adminDashboard/adminProfile/teacherProfile"},
        {id:1, nav:"Student Profile", link: "/adminDashboard/adminProfile/studentProfile"},
        {id:1, nav:"Add Profile", link: "/adminDashboard/adminProfile/adminAddProfile"},
    ]
  return (<div>
      <ul class="flex hidden rounded-lg divide-x divide-gray-200 shadow sm:flex dark:divide-gray-700">

{
    navs.map(nav => (
        <li key={nav.id} class="w-full">
<Link to={nav.link} class="inline-block relative py-4 px-4 w-full text-sm font-medium text-center text-gray-500 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:z-20 dark:text-gray-400 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white">{nav.nav}</Link>
</li>
    ))
}

</ul>

<Outlet/>
  </div>


  )
}

export default AdminProfile