import style from "./Contact.module.css"
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
function Contact(){
    useEffect(()=>{
        AOS.init({duration:500,offset:200})
    },[])
    
    return(
        <div id={style.contact}  data-aos="fade-up">
            <div id={style.contact_Inner_div}>
                
                <h1 id={style.firh1}>Contact Me</h1>
                <h1 id={style.sech1}>Shivam Jaiswal</h1>
                <div id={style.cont}>
                  <h3>Mobile number : 9399849603 <br/>
                                            Gmail : shivamj291@gmail.com <br/>
                                            location : Raisen, M.P.  </h3>
                </div>
               
           </div>
       </div>
    )
}
export default Contact