import "flowbite";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import AdminAssessment from "./pages/AdminDashboard/AdminAssessment/AdminAssessment";
import AdminCompletedAssessmentsHome from "./pages/AdminDashboard/AdminAssessment/AdminCompletedAssessmentsHome";
import AdminCreateAssessments from "./pages/AdminDashboard/AdminAssessment/AdminCreateAssessment";
import AdminStudentAssessment from "./pages/AdminDashboard/AdminAssessment/AdminStudentAssessment";
import AdminTeacherAssessment from "./pages/AdminDashboard/AdminAssessment/AdminTeacherAssessment";
import AdminCalendar from "./pages/AdminDashboard/AdminCalendar/AdminCalendar";
import AdminEvent from "./pages/AdminDashboard/AdminCalendar/AdminEvent";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard/AdminDashboard";
import AdminCreateNotice from "./pages/AdminDashboard/AdminNotice/AdminCreateNotice";
import AdminNotice from "./pages/AdminDashboard/AdminNotice/AdminNotice";
import AdminAcademicDocument from "./pages/AdminDashboard/Documents/AdminAcademicDocument";
import AdminAddDocument from "./pages/AdminDashboard/Documents/AdminAddDocument";
import AdminAdminstration from "./pages/AdminDashboard/Documents/AdminAdminstration";
import AdminDocuments from "./pages/AdminDashboard/Documents/AdminDocuments";
import AdminPersonalDocument from "./pages/AdminDashboard/Documents/AdminPersonalDocument";
import FeeRecipt from "./pages/AdminDashboard/FeeCollection/FeeRecipt";
import GenerateDue from "./pages/AdminDashboard/FeeCollection/GenerateDue";
import AdminLibraryStudentProfile from "./pages/AdminDashboard/Library/AdminLibraryStudentProfile";
import AdminLibraryTeacherProfile from "./pages/AdminDashboard/Library/AdminLibraryTeacherProfile";
import ClassStatus from "./pages/AdminDashboard/Library/ClassStatus";
import Completion from "./pages/AdminDashboard/Library/Completion";
import CreateContent from "./pages/AdminDashboard/Library/CreateContent";
import AddProfile from "./pages/AdminDashboard/Profile/AddProfile";
import AdminMyProfile from "./pages/AdminDashboard/Profile/AdminMyProfile";
import AdminProfile from "./pages/AdminDashboard/Profile/AdminProfile";
import AdminSchoolProfile from "./pages/AdminDashboard/Profile/AdminSchoolProfile";
import AdminStudentProfile from "./pages/AdminDashboard/Profile/AdminStudentProfile";
import AdminTeacherProfile from "./pages/AdminDashboard/Profile/AdminTeacherProfile";
import Home from "./pages/Home";
import CompletedAssessment from "./pages/StudentDashboard/Assessment/CompleteAssesment";
import StudentAssessment from "./pages/StudentDashboard/Assessment/StudentAssessment";
import StudentAcademic from "./pages/StudentDashboard/Documents/StudentAcademic";
import StudentAdminstration from "./pages/StudentDashboard/Documents/StudentAdminstration";
import StudentDocuments from "./pages/StudentDashboard/Documents/StudentDocuments";
import StudentPersonal from "./pages/StudentDashboard/Documents/StudentPersonal";
import Library from "./pages/StudentDashboard/Library/Library";
import LibrarySubject from "./pages/StudentDashboard/Library/LibrarySubject";
import StudentCalendar from "./pages/StudentDashboard/studentCalendar/StudentCalendar";
import StudentDashboard from "./pages/StudentDashboard/StudentDashboard/StudentDashboard";
import StudentFee from "./pages/StudentDashboard/StudentFee/StudentFee";
import StudentNotice from "./pages/StudentDashboard/StudentNotice/StudentNotice";
import StudentProfile from "./pages/StudentDashboard/StudentProfile/StudentProfile";
import StudentAssesReport from "./pages/StudentDashboard/StudentReports/StudentAssesReport";
import TeacherAssessment from "./pages/TeacherDashboard/Assessment/TeacherAssessment";
import TeacherCompleteAssesment from "./pages/TeacherDashboard/Assessment/TeacherCompleteAssesment";
import TeacherUploadAsses from "./pages/TeacherDashboard/Assessment/TeacherUploadAsses";
import TeacherDashboard from "./pages/TeacherDashboard/TeacherDashboard/TeacherDashboard";
import TeacherAcademic from "./pages/TeacherDashboard/TeacherDocuments/TeacherAcademic";
import TeacherAdminstration from "./pages/TeacherDashboard/TeacherDocuments/TeacherAdminstration";
import TeacherDocuments from "./pages/TeacherDashboard/TeacherDocuments/TeacherDocuments";
import TeacherPersonal from "./pages/TeacherDashboard/TeacherDocuments/TeacherPersonal";
import TeacherProfile from "./pages/TeacherDashboard/TeacherProfile/TeacherProfile";
function App() {
  const [menuOpen, setMenuOpen] = useState(true);
  const toggleMenu = () => {
    setMenuOpen((t) => !t);
  };
  return (
    <Router>
      <Navbar/>
      <Routes>
      

        {/* home route */}
        <Route path="/" element={<Home />} />

        {/* student routes */}
        <Route path="/studentDashboard" element={<StudentDashboard/>}>
        <Route
          path="/studentDashboard"
          element={<StudentProfile/>}
        />
        <Route
          path="/studentDashboard/studentProfile"
          element={<StudentProfile/>}
        />
        <Route
          path="/studentDashboard/studentLibrary"
          element={<Library/>}
        />
        <Route
          path="/studentDashboard/studentAssessment"
          element={<StudentAssessment />}
        />
        <Route
          path="/studentDashboard/studentCompletedAssessment"
          element={<CompletedAssessment />}
        />
        <Route
          path="/studentDashboard/studentCalender"
          element={<StudentCalendar />}
        />
        <Route
          path="/studentDashboard/studentAccessReport"
          element={<StudentAssesReport />}
        />
        <Route
          path="/studentDashboard/studentFee"
          element={<StudentFee />}
        />
        <Route
          path="/studentDashboard/studentNotices"
          element={<StudentNotice />}
        />
        <Route
          path="/studentDashboard/studentDocuments"
          element={<StudentDocuments />}
        >
        <Route path="/studentDashboard/studentDocuments/academic" element={<StudentAcademic />} />
          <Route
            path="/studentDashboard/studentDocuments/personal"
            element={<StudentPersonal />}
          />
          <Route
            path="/studentDashboard/studentDocuments/adminstration"
            element={<StudentAdminstration />}
          />
          </Route>
        </Route>

        {/* teacher routes */}
        <Route path="/teacherDashboard" element={<TeacherDashboard/>}>
        <Route path='/teacherDashboard/teacherProfile' element={<TeacherProfile/>}/>
        <Route path='/teacherDashboard/teacherAssessment' element={<TeacherAssessment/>} />
           
          <Route path="/teacherDashboard/teacherAssessment/teacherCompleteAssessment"
            element={<TeacherCompleteAssesment/>}/>

          <Route path="/teacherDashboard/teacherAssessment/teacherCreateAssessment"
            element={<TeacherUploadAsses/>}/>
            
          <Route path="/teacherDashboard/teacherDocuments"
            element={<TeacherDocuments/>}>
                <Route path="/teacherDashboard/teacherDocuments/academic" element={<TeacherAcademic/>}/>
                <Route path="/teacherDashboard/teacherDocuments/personal" element={<TeacherPersonal/>}/>
                <Route path="/teacherDashboard/teacherDocuments/adminstration" element={<TeacherAdminstration/>}/>
              </Route>
        </Route>

        {/* admin routes */}
          <Route path="/adminDashboard" element={<AdminDashboard/>}>

{/* admin profile routes */}
            <Route path="/adminDashboard/adminProfile" element={<AdminProfile/>}>

              <Route path="/adminDashboard/adminProfile/myProfile" element={<AdminMyProfile/>}/>
              <Route path="/adminDashboard/adminProfile/schoolProfile" element={<AdminSchoolProfile/>}/>
              <Route path="/adminDashboard/adminProfile/teacherProfile" element={<AdminTeacherProfile/>}/>
              <Route path="/adminDashboard/adminProfile/studentProfile" element={<AdminStudentProfile/>}/>
              <Route path="/adminDashboard/adminProfile/adminAddProfile" element={<AddProfile/>}/>
              </Route>

{/* admin library routes */}
            <Route path="/adminDashboard/adminLibrary" element={<Completion/>}/>
            <Route path="/adminDashboard/classStatus" element={<ClassStatus/>}/>
            <Route path="/adminDashboard/studentProfile" element={<AdminLibraryStudentProfile/>}/>
            <Route path="/adminDashboard/teacherProfile" element={<AdminLibraryTeacherProfile/>}/>
            
            {/* admin calender routes */}
            <Route path="/adminDashboard/adminCalender" element={<AdminCalendar/>}/>
            <Route path="/adminDashboard/AdminEvent" element={<AdminEvent/>}/>

            {/* admin document routes */}
            <Route path="/adminDashboard/adminDocuments" element={<AdminDocuments/>}>
              <Route path="/adminDashboard/adminDocuments/adminAcademic" element={<AdminAcademicDocument/>}/>
              <Route path="/adminDashboard/adminDocuments/adminPersonal" element={<AdminPersonalDocument/>}/>
              <Route path="/adminDashboard/adminDocuments/adminAdminstration" element={<AdminAdminstration/>}/>
              <Route path="/adminDashboard/adminDocuments/adminAddDocument" element={<AdminAddDocument/>}/>
            </Route>

            {/* admin fee collection routes */}
            <Route path="/adminDashboard/adminFeeCollection" element={<FeeRecipt/>}/>
            <Route path="/adminDashboard/adminFeeGenerateDue" element={<GenerateDue/>}/>


            {/* admin assessment routes */}
            <Route path="/adminDashboard/adminAssessment" element={<AdminAssessment/>}>

            <Route path="/adminDashboard/adminAssessment/studentAssessment" element={<AdminStudentAssessment/>}/>

            <Route path="/adminDashboard/adminAssessment/teacherAssessment" element={<AdminTeacherAssessment/>}/>

            <Route path="/adminDashboard/adminAssessment/completedAssessment" element={<AdminCompletedAssessmentsHome/>}/>

            <Route path="/adminDashboard/adminAssessment/createAssessment" element={<AdminCreateAssessments/>}/>

              </Route>

              {/* admin notice routes */}

              <Route path="/adminDashboard/adminNotices" element={<AdminNotice/>}/>
              <Route path="/adminDashboard/createNotice" element={<AdminCreateNotice/>}/>

              

          </Route>


        {/* other routes */}

        
        <Route
          path="/librarySubject"
          element={
            <LibrarySubject menuOpen={menuOpen} toggleMenu={toggleMenu} />
          }
        />
        <Route
          path="/completion"
          element={<Completion menuOpen={menuOpen} toggleMenu={toggleMenu} />}
        />
        <Route
          path="/classStatus"
          element={<ClassStatus menuOpen={menuOpen} toggleMenu={toggleMenu} />}
        />
        <Route
          path="/teacherStatus"
          element={
            <StudentProfile menuOpen={menuOpen} toggleMenu={toggleMenu} />
          }
        />
        <Route path="/teacherProfile" element={<TeacherProfile />} />
        <Route path="/createContent" element={<CreateContent />} />

        <Route path="/adminDocuments" element={<AdminDocuments />}>
          <Route path="/adminDocuments" element={<AdminAcademicDocument />} />
          <Route path="/adminDocuments/personal" element={<AdminPersonalDocument />} />
          <Route
            path="/adminDocuments/adminstration"
            element={<AdminAdminstration />}
          />
          <Route path="/adminDocuments/addDocument" element={<AdminAddDocument />} />
        </Route>

        

        {/* teacher document routes */}
        <Route path="/teacherDocuments" element={<TeacherDocuments />}>
          <Route path="/teacherDocuments" element={<TeacherAcademic />} />
          <Route
            path="/teacherDocuments/personal"
            element={<TeacherPersonal />}
          />
          <Route
            path="/teacherDocuments/adminstration"
            element={<TeacherAdminstration />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
