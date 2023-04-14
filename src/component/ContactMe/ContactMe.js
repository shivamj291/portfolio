import style from "./ContactMe.module.css"
import {useRef} from "react"
function ContactMe(){
  
  

    return(
        
            <div id="contact" className={style.contactname}>
            
            <h1 id={style.feel_Free}>Feel Free to Contact Me</h1>
             <div id={style.ontact}>
             
             <form
                    action="https://formspree.io/f/mlekoolj"
                    method="POST"
                    id={style.contact_inputs}
                   
                >
                    <input
                      type="text"
                      name="username"
                      placeholder="Your Name"
                      autoComplete="off"
                      required
                    />
                    <input
                      type="number"
                      name="Phone"
                      placeholder="Your Number"
                      autoComplete="off"
                      minLength='10'
                      required
                    />
                   
                    <input
                      type="email"
                      name="Email"
                      placeholder="Your Email"
                      autoComplete="off"
                      required
                    />

                     <input
                      type="text"
                      name="Subject"
                      placeholder="Subject"
                      autoComplete="off"
                      required
                    />
        
                    <textarea 
                      name="message"
                      cols="30"
                      rows="4"
                      autoComplete="off"
                      placeholder="Your Message"
                      required></textarea>
        
                    <input type="submit" value="send" />
                  </form>
             
             </div>
        
             
              
            </div>
          );
    
}
export default ContactMe