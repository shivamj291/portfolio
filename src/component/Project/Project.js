import "./Project.css"


import AOS from "aos"
import "aos/dist/aos.css"
import {useEffect, useState} from "react"

   
  
 
function Project(){

     
    useEffect(()=>{
        AOS.init({duration:500,offset:300})
       
     },[])
   
    
    return(
        <div id="project">
              
            <h1 id="pheading" style={{textDecoration:"underline" }}>Project</h1>
        
         <div class="pr"  data-AOS="fade-up">
             <div id="outer_lovoda" >
                <div id="inner_lovoda">
                    <img src="lovoda.gif" id="lovoda_img"/>
                </div>
               
             </div>
                          
                    <div class="text" >
                            <h1>Lovoda</h1>
                            <p>LOVODA® Accessories</p>
                            <p> Jewelry/watches</p>
                            <p>We complete you ♥️ Stunning accessories styled for you.</p>
                            Tech-Stack - HTML | CSS |Javascript
                            <a href="https://comfy-speculoos-0dfe32.netlify.app/"><p>Check from here</p></a>
                            <a href="https://github.com/shivamj291/Project_Lovoda"><p>Git Link</p></a>
                    </div>
         
           </div>
           
          
          <div class="pr_ind"  data-AOS="fade-up" >
          <div class="indiamart_text" >
                        <h1>Indiamart</h1>
                        <p>We connect Buyers & Sellers</p>
                        <p> End all your business worries with IndiaMART</p>
                        <p> IndiaMART is India's largest online B2B marketplace, connecting buyers with suppliers.</p>
                        Tech-Stack - HTML,CSS,JAVA-SCRIPT,REST API,LOCAL STORAGE
                        <a href="https://astonishing-smakager-1c8cc9.netlify.app/"><p>Check from here</p></a>
                        <a href="https://github.com/shivamj291/IndiaMart-Clone"><p>Git Link</p></a>
                        
                </div>
                <div id="outer_indiaMart" >
                    <div id="inner_indiaMart">
                       <img src="indiamartAnim.gif" id="indiamart_img"/>
                    </div>
                   
                </div>
           
               
    
            </div>
          
           
        </div>
    )
}
export default Project