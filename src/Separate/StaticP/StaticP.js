
import Static from "../../component/Statics/Statics"

import Profile from "../Profile/Profile"
import style from "./StaticP.module.css"

function StaticP(){
     return(
        <div id={style.StaticP}>
            <div id={style.profile}>
               <Profile/>
            </div>
            <div id={style.static}>
               <Static/>
            </div>
        </div>
    )
}

export default StaticP