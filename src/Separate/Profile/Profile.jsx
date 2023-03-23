

import { useRef } from "react"
import style from "./Profile.module.css"

   
function Profile(){
   
     return(
        <div id={style.Profile} >
            <div className={style.outerP}>
                    <div className={style.innerP}>
                       <img src="shivam.jpg" id={style.pimg}  />
                       <span> <img src="https://readme-typing-svg.herokuapp.com?font=Architects+Daughter&amp;color=ff0000&amp;size=20&amp;lines=👋Hey!+It's+SHIVAM+JAISWAL!;Full+Stack-Web+Developer...👨🏻‍💻;" id={style.full}/></span>
           
                    </div>
                </div>
           
         
        </div>
    )
}

export default Profile