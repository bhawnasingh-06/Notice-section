import React from 'react'
import {Link} from 'react-router-dom'
import TeacherAssesmentEveluationApi from '../../TeacherApi/TeacherAssesmentEveluationApi'
const TeacherMenu = () => {
  return (
    <div className="flex mx-5 items-center justify-center flex-col md:flex-row lg:flex-row xl:flex-row ">
    <Link to='/teacher/mainEveluation/attendence' className=" bg-blue-800 py-2 px-5 border-2 border-gray-500 text-white hover:bg-blue-900 my-2">Attendance</Link>
    <Link  to='/teacher/mainEveluation/assesment' className=" bg-blue-800 py-2 px-5 border-2 border-gray-500 text-white hover:bg-blue-900 my-2">Assesment</Link>
    <Link  to='/teacher/mainEveluation/quiz'  className=" bg-blue-800 py-2 px-5 border-2 border-gray-500 text-white hover:bg-blue-900 my-2">Quizes</Link>
    <Link  to={`/teacher/mainEveluation/overall/${TeacherAssesmentEveluationApi[0].name}`} className=" bg-blue-800 py-2 px-5 border-2 border-gray-500 text-white hover:bg-blue-900 my-2">Overall</Link>
</div>
  )
}

export default TeacherMenu