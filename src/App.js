import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Courses from "./pages/Courses";
import SingleCourse from "./pages/SingleCourse";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (<>
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Courses/>}/>
          <Route path="/course/:id" element={<SingleCourse/>}/>
        </Routes>
        {/* <Courses/> */}
        {/* <SingleCourse /> */}
      <Footer/>
      </Router>
      </>);
}

export default App;
