import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from "../AdminSidebar";
const StudentDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <div>
      <h1 className='text-4xl text-center'>AdminDashboard</h1>
      <div className='flex'><AdminSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
    
    <Outlet/></div>
    </div>
  )
}

export default StudentDashboard