import "./Skill.css"
import AOS from "aos"
import "aos/dist/aos.css"
import {useEffect} from "react"

function Skill(){
    
    useEffect(()=>{
        AOS.init({duration:500,offset:300})
       
     },[])
    return(
        <div id="s">
        <h1 id="sh1"> Skills</h1>
        <div id="whole_Skill">

         
             <div id="skill" data-AOS="fade-up">
                    
             <div className="round">
             <img src="javaLogo"/>
            
             </div>
             
             <div className="round">
             <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png" />
           
             </div>
           
            <div className="round">
            <img src="cssLogo"/>
          
                </div>
           
            <div className="round">
            <img src="https://static.javatpoint.com/images/javascript/javascript_logo.png"/>
     
            </div>


                <div className="round">
                <img src="mongoLogo"/>
              
                </div>

                <div className="round">
                <img src="express-5-logo-svg-vector.svg"/>
               
                </div>

                
                <div className="round">
                <img src="reactLogo.svg"/>
               </div>

               <div className="round">
             <img src="reduxLogo.png"/>
         
             </div>
             <div className="round">
             <img src="chakra.svg"/>
        
             </div>

                <div className="round">
                <img src="1280px-Node.js_logo.svg.png"/>
               

                </div>
                <div className="round">
                <img src="178-1787134_png-file-svg-github-icon-png.png"/>
               

                </div>

             
             
           
           
           
          
             </div>
             
          
             </div>

        </div>
    )
}
export default Skill