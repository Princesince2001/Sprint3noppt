import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Register from '../src/components/LearnerComponent/Register';
import Navbar from "..//src/components/LearnerComponent/Navbar";
import NavbarView from "./View/NavbarView";
import Navbar1 from './components/LearnerComponent/Navbar1';
import Course from "./components/LearnerComponent/Course";
// import Rajcourse from "./components/LearnerComponent/MyCourseFinal";
import RegisterView from "./View/RegisterView";

import UpdateUserProfileView from "./View/UpdateUserProfileView";
import PasswordChange from "./components/PasswordChange";
import ProfileController from "./components/LearnerComponent/ProfileController";
import MyCoursesView from "./View/MyCoursesView";
import { Provider } from "react-redux";
import Store from "./store/fetchPdfStore";


import Moye from "./components/PDF/moye";
// import MyCoursesNavbar from "./components/LearnerComponent/Mycoursefinalnavbar";
import PDFViewer from "./components/PDF/PDFViewer";
import Rfetch from "./components/PDF/reactPDF";
import Appu from "./components/PDF/Third";
import PDFViewerPriya from "./components/PDF/PriyaPDF";
import DownloadPPTX from "./components/PDF/pptx";
import EnrollmentCard from "./components/LearnerComponent/Enrollment";
import Mycourse from "./components/LearnerComponent/Mycourse";
import Iframe from "./components/PDF/Iframe";



function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <Routes>
          <Route path="/" element={<RegisterView />} />
          <Route
            path="/UpdateUserProfile"
            element={<UpdateUserProfileView />}
          />
          <Route path="/PasswordChange" element={<PasswordChange />} />
          <Route path="/ProfileController" element={<ProfileController />} />

          <Route path="/Navbar" element={<NavbarView />} />
          {/* <Route path="/Myenroledcourse" element={<NavbarViewone />} /> */}
          <Route path="/Course" element={<Course />} />
          {/* <Route path="/Rajcourse" element={<Rajcourse />} /> */}
          {/* <Route path="/mycourse" element={<MyCoursesView />}></Route> */}
          {/* <Route path="/Sidenavbar" element={<Sidecourse/>}></Route> */}
          {/* <Route path="/Finalnavbar" element={MyCoursesNavbar}></Route> */}
          {/* <Route path="/PDFViewer" element={<PDFViewer/>}></Route> */}
          <Route path='/Navbar1' element={<Navbar1/>}></Route>
         <Route path='/PDF' element={<PDFViewer/>}></Route>
          {/* <Route path="Moyee" element={<Moye/>}></Route> */}
          {/* <Route path="inte" element={<MyCoursesNavbar/>}></Route> */}
          <Route path="/Moyee" element={<Moye/>}></Route>
          <Route path="/onelove" element={<Rfetch/>}></Route>
          <Route path="/Appu" element={<Appu/>}></Route>
          <Route path="/Priya" element={<PDFViewerPriya/>}></Route>
          <Route path="pptx" element={<DownloadPPTX/>}></Route>
          <Route path="Enrollmy" element={<EnrollmentCard/>}></Route>
          <Route path="mycourse" element={<Mycourse/>}></Route>
          <Route path="Iframe" element={<Iframe/>}></Route>
          
         
        </Routes>
      </Provider>
    </div>
  );
}

export default App;


//Myenroledcourse