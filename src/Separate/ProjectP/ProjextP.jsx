import About from "../../component/About/About"
import Project from "../../component/Project/Project"

import Profile from "../Profile/Profile"
import style from "./ProjectP.module.css"

function ProjectP(){
     return(
        <div id={style.ProjectP}>
         <div id={style.profile}>
               <Profile/>
            </div>
            <div id={style.project}>
               <Project/>
            </div>

          
        </div>
    )
}

export default ProjectP