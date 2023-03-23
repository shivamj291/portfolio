import About from "../About/About"
import Contact from "../Contact/Contact"
import Front from "../Front/Front"
import Project from "../Project/Project"
import Skill from "../Skills/Skill"
import Static from "../Statics/Statics"
import "./Home.css"

function Home(){
   
    return(
        <div id="Home" >
            <div> <Front/></div> <hr/>
            <div>  <About/></div>   <hr/>
            <div> <Skill/></div>   <hr/>
            <div> <Project/></div>   <hr/>
            <div>  <Static/></div>   <hr/> 

             <div><Contact/></div> 
           

        </div>
    )
}
export default Home