import React from 'react'
import {Routes,Route} from 'react-router-dom';
import TeacherClassEve from './TeacherClassEve';
import TeacherMainEveluation from './TeacherMainEveluation';
import AttendenceEveluation from './AttendenceEveluation';
import AssementEveluation from './AssementEveluation';
import QuizeEveluation from './QuizeEveluation';
import OverallEveluation from './OverallEveluation';

import AssesmentEveluationDetail from './AssesmentEveluationDetail';
const TeacherRouter = () => {
  return (
    <>
        <Routes>
            <Route exact path='/teacher/classEveluation' element={<TeacherClassEve/>}/>
            <Route exact path='/teacher/mainEveluation' element={<TeacherMainEveluation/>}/>
            {/* ======main eveluation ke part ka router======== */}
            <Route exact path='/teacher/mainEveluation/attendence' element={<AttendenceEveluation/>}/>

            <Route exact path='/teacher/mainEveluation/assesment' element={<AssementEveluation/>}/>
            <Route exact path='/teacher/mainEveluation/assesment/:name' element={<AssesmentEveluationDetail/>}/>
            <Route exact path='/teacher/mainEveluation/quiz' element={<QuizeEveluation/>}/>
            <Route exact path='/teacher/mainEveluation/overall/:name' element={<OverallEveluation/>}/>
          
        </Routes>
    </>
  )
}

export default TeacherRouter