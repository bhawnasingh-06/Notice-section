import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import StudentSidebar from "../StudentSidebar";
const StudentDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <div>
      <h1 className='text-4xl text-center'>Student Dashboard</h1>
      <div className='flex'><StudentSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
    
    <Outlet/></div>
    </div>
  )
}

export default StudentDashboard