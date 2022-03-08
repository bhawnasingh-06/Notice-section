import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AssementEveluation from '../../Components/TeacherEveluation/AssementEveluation';
import AssesmentEveluationDetail from '../../Components/TeacherEveluation/AssesmentEveluationDetail';
import AttendenceEveluation from '../../Components/TeacherEveluation/AttendenceEveluation';
import OverallEveluation from '../../Components/TeacherEveluation/OverallEveluation';
import QuizeEveluation from '../../Components/TeacherEveluation/QuizeEveluation';
import TeacherClassEve from '../../Components/TeacherEveluation/TeacherClassEve';
import TeacherMainEveluation from '../../Components/TeacherEveluation/TeacherMainEveluation';

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