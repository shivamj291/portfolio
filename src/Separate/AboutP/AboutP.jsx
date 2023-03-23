import About from "../../component/About/About"

import Profile from "../Profile/Profile"
import style from "./AboutP.module.css"

function AboutP(){
     return(
        <div id={style.AboutP}  >
         <div id={style.profile}>
            <Profile/>
         </div>
         <div id={style.about}>
            <About/>
         </div>
           
          
        </div>
    )
}

export default AboutP