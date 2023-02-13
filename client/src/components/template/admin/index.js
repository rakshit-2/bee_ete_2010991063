
import './index.css';
// import err_img from './../../assets/images/err.jpg';
import ErrorCard from '../../atom/errorCard';
import Navbar from '../navbar';
import { useState ,useEffect} from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';


const Admin=(props)=>{
    const navigate=useNavigate()
    const [afterEmail,setAfterEmail]=useState("none")
    const [beforeEmail,setBeforeEmail]=useState("block")
    const li=["lLmOA","fsP8B","F7BiX","oZfEZ","v3hQN","juOEG","LpMvp","cz1GP","kpNM0","R0ze3"]
    const [captcha,setCaptcha]=useState()
    const [check,setCheck]=useState(false)
    const [captchaEnter,setCaptchaEnter]=useState("")

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function checkCaptcha()
    {
        var ele=getRandomInt(li.length);
        setCaptcha(li[ele]);
        setCheck(true);
        return ele;
    }
    

    const sendEmailMessage = (e) => {
        e.preventDefault();
        console.log(e.target)
        emailjs.sendForm('service_gxw1i1n', 'template_56ak8if', e.target, 'm9zEe7gyayQtF5mLB')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        setAfterEmail("block")
        setBeforeEmail("none")
        e.target.reset();
      };

      function loginAdmin()
      {
        if(captchaEnter===captcha)
        {
            props.AdminLoggedInStatusCheck(true,"rakshit4013@gmail.com")
            navigate("/admin-enter")
        }
        else
        {
            props.showError("Wrong Captcha!!","error")
        }
      }

return (
    <>
    <ErrorCard 
        errorDisplay={props.errorDisplay}
        errorIcon={props.errorIcon}
        errorText={props.errorText}
        errorColor={props.errorColor}
    />
    <Navbar LoggedIn={props.LoggedIn} LoggedInStatus={props.LoggedInStatus} />
    <div className='admin__outer'>
        <div className='admin__inner'>
            <div className='admin__inner__inner'>
                <div className="signup">
                    <form style={{display:beforeEmail}} onSubmit={sendEmailMessage} >
                        <label id="checkTest" for="chk" aria-hidden="true">Admin Login</label>
                        <input  type="text" name="email" placeholder="Email" required="required"/>
                        {
                            check?(
                                <>
                                <textarea class="suggestion__textarea" name="message" 
                                placeholder="suggestion here.." required="" spellcheck="false" style={{display:"none"}}>{captcha}</textarea>
                                </>
                            ):(
                            <textarea class="suggestion__textarea" name="message" 
                                placeholder="suggestion here.." required="" spellcheck="false" style={{display:"none"}}>{li[checkCaptcha()]}</textarea>
                            )
                        }
                        
                        <button type="submit"  >Send Mail</button>
                    </form>
                    <form style={{display:afterEmail}}>
                        <label id="checkTest" for="chk" aria-hidden="true">Admin Login</label>
                        <input  type="text" onChange={(e)=>{setCaptchaEnter(e.target.value)}} name="code" placeholder="Verification Code" required="required"/>
                        <button type="button"  onClick={()=>{loginAdmin()}}>Login</button>
                    </form>
                    
                </div>
            </div>
        </div>
    </div>
    </>
);
}

export default Admin;