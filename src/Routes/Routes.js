
import { Route,Routes } from "react-router-dom";
import Contact from "../component/Contact/Contact";
import Home from "../component/Home/Home";
import AboutP from "../Separate/AboutP/AboutP.jsx";
import SkillsP from "../Separate/SkillsP/SkillsP";
import ProjectP from "../Separate/ProjectP/ProjextP";
import StaticP from "../Separate/StaticP/StaticP";
import ContactP from "../Separate/Contact/ContactP";
import "./Routes.css"
function Router(){
    return (
        <div id = "route">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<AboutP/>}/>
               
                <Route path="/project" element={<ProjectP/>}/>
                <Route path="/skill" element={<SkillsP/>}/>
                <Route path="/static" element={<StaticP/>}/>
                <Route path="/contact" element={<ContactP/>}/>
            </Routes>
        </div>
    )
}
export default Router
