
import Skill from "../../component/Skills/Skill"

import Profile from "../Profile/Profile"
import style from "./SkillsP.module.css"
import Navbar from "../../component/navbar/navbar"
function SkillsP(){
     return(
        <div id={style.SkillsP}>
  
            <div id={style.profile}>
               <Profile/>
            </div>
            <div id={style.skill}>

               <Skill/>
            </div>
        </div>
    )
}

export default SkillsP