import "./Statics.css"
import AOS from "aos"
import "aos/dist/aos.css"
import {useEffect, useState} from "react"

   
  
function Static(){
   
    useEffect(()=>{
        AOS.init({duration:500,offset:300})
       
     },[])
   
    return(
        <div id="static"> 
           
                <h1 id='staticheading'>Statics</h1>
                <div className="outer" data-AOS="fade-up">
                    <div className="inner">
                        <img src=" https://github-readme-streak-stats.herokuapp.com/?user=shivamj291&theme=dark&hide_border=false" id="staticimg2" width="70%"/>
                    </div>
                </div>
               
                
                <div className="outer" data-AOS="fade-up" >
                    <div className="inner">
                        <img src="https://github-readme-stats.vercel.app/api?username=shivamj291&theme=dark&hide_border=false&include_all_commits=true&count_private=true" id="staticimg" width="70%" />
                    </div>
                </div>
         </div>
    )
}
export default Static

//
//https://github-readme-stats.vercel.app/api/top-langsusername=shivamj291&theme=dark&hide_border=false&include_all_commits=true&count_private=true&layout=compact