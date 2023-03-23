import About from "../About/About"
import Contact from "../Contact/Contact"
import Project from "../Project/Project"
import Skill from "../Skills/Skill"
import Static from "../Statics/Statics"
import "./Front.css"
import AOS from "aos"
import "aos/dist/aos.css"
import {useEffect, useState} from "react"

   
   

function Front(){
    const[offset,setOffset]=useState();
   
    useEffect(()=>{
        AOS.init()
       
     },[])
     const handleOffset = () => {
        setOffset(window.pageYOffset);
      };
    
      useEffect(() => {
        window.addEventListener("scroll", handleOffset);
     }, []);
    return(
        <div id="Front" style={{ transform: `translateX(-${offset * 2.5}px)`,
        opacity: `${offset > 300 ? "0" : offset > 160 ? ".5" : "1"}`,}}>
            <div id="font_heading" >
            <div id="hoverdiv">
            <img src="https://readme-typing-svg.herokuapp.com?+Daughter&amp;color=rgb(255, 255, 255)&amp;size=20&amp;lines=👋Hey!+It's+SHIVAM+JAISWAL!;Full+Stack-Web+Developer...👨🏻‍💻;" id="hoverpart"/>
                  
            </div >
          

                    <div id="social" >
                        <a href="https://github.com/shivamj291"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png"/></a>
                        <a href="https://www.linkedin.com/in/shivam-jaiswal-43364a23b"><img src="linkedin.webp" style={{background:"royalblue",height:"80px",width:"80px",marginTop:"6px"}}/></a>
                        <a href="shivamj291@gmail.com"><img src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png"/></a>
                    </div>
                   <div id="resume"><a href="shivam_jaiswal.pdf"><p>Resume</p></a></div>

                   
                   
            </div>
            <div id="image" >
                  <img src="shivamHome.jpg"/>
            </div>
        </div>
    )
}
export default Front