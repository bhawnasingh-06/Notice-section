import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import TeacherSidebar from '../TeacherSidebar';
const StudentDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <div>
      <h1 className='text-4xl text-center'>Teacher Dashboard</h1>
      <div className='flex'><TeacherSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
    
    <Outlet/></div>
    </div>
  )
}

export default StudentDashboard