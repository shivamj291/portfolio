import "./Contact.css"
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
function Contact(){
    useEffect(()=>{
        AOS.init({duration:500,offset:200})
    },[])
    
    return(
        <div id="contact"  data-aos="fade-up">
            <div id="contact_Inner_div">
                
                <p>Contact Me</p>
                <h1 >Shivam Jaiswal</h1>
                <div id="cont">
                  <h3>Mobile number : 9399849603 <br/>
                                            Gmail : shivamj291@gmail.com <br/>
                                            location : Raisen, M.P.  </h3>
                </div>
               
           </div>
       </div>
    )
}
export default Contact