import React from 'react'
import {Routes,Route} from 'react-router-dom';
import StudentAssesReport from './StudentAssesReport';
import StudentChapter from './StudentChapter';
const StudentRouter = () => {
  return (
    <>
     <Routes>
     <Route exact path='/student/assesReport' element={<StudentAssesReport/>}/>
     <Route exact path='/student/chapter/:chapter' element={<StudentChapter/>}/>
     </Routes>
    </>
  )
}

export default StudentRouter