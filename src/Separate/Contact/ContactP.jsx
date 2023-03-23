

import Contact from "../../component/Contact/Contact"
import Profile from "../Profile/Profile"
import style from "./ContactP.module.css"

function ContactP(){
     return(
        <div id={style.ContactP}>
        
            <div id={style.profile}>
                <Profile/>
            </div>
            <div id={style.contact}>
               <Contact/>
            </div>
        </div>
    )
}



export default ContactP