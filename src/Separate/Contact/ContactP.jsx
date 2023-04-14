
import ContactMe from "../../component/ContactMe/ContactMe"
import Location from "../../component/Location/Location"
import Profile from "../Profile/Profile"
import style from "./ContactP.module.css"

function ContactP(){
     return(
        <div id={style.ContactP}>
        
            <div id={style.loc}>
            <Location/>
        
            </div>
            <div id={style.contactMe}>
            <ContactMe/>
          
            </div>
        </div>
    )
}



export default ContactP