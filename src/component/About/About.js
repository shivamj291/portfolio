import "./About.css"
import AOS from "aos"
import "aos/dist/aos.css"
import {useEffect} from "react"
  
function About(){

    useEffect(()=>{
        AOS.init({duration:500})
    },[])
   
    return(
        <div id="whole_about"  data-aos="fade-up">
        
              <h1 id="obj">About Me</h1>
              
              <div id="about"  >
                <div>
                <img src="https://www.shutterstock.com/image-vector/vector-illustration-man-working-front-260nw-485667631.jpg" id="img_obj" data-aos="zoom"/>
        
        <h6>Hello! I am Shivam Jaiswal</h6>
        <div id="innerPara">
                 <p>who enjoys coding and solving problems.As an aspiring Full Stack Web developer, I like the impact it creates on the world.
                 One of my strongest skills is creativity and it helps me a lot in web designs I have created various end to end website clone
                 using MERN stack.I always want to enhance my knowledge & adpot new technologies that make impact on people.My desire to earn a 
                 better life motivated me to put my utmost efforts into what I do.</p>
        </div>
 
                </div>
                
              </div>
             
        </div>
    )
}

export default About