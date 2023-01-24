import './index.css';
import Axios from 'axios'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';




const Auth=(props)=> {

  const navigate = useNavigate();
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [pass,setPass]=useState("")

  const [emailLogin,setEmailLogin]=useState("")
  const [passLogin,setPassLogin]=useState("")

  function signUpClicked()
  {
    let nameCheck=/^[A-Z a-z]+$/;
    if(nameCheck.test(name)===false)
    {
      alert("fill name correctly!!")
      return;
    }
    var emailCheck=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(emailCheck.test(email)===false)
    {
        alert("Email is incorrect");
        return;
    }
    else if(pass==="")
    {
      alert("fill pass correctly!!")
      return;
    }
    Axios.post('http://localhost:5000/api/post/sign-up',
    {
      name:name,
      email:email,
      pass:pass
    }).then((res)=>{
      if(res.data==="createdSuccess")
      {
        alert("Account Created Successfully!!!")
        navigate("/profile")
      }
      else if(res.data==="alreadyExist")
      {
        alert("Account Already Exists Please Login!!!")
      }
      document.getElementById("nameSignup").value="";
      document.getElementById("emailSignup").value="";
      document.getElementById("passSignup").value="";
      
      // document.getElementById("checkTest").;
    });
  }




  function signInClicked()
  {
    if(emailLogin==="" || passLogin==="")
    {
        alert("Email Or Password is Incorrect!!");
        return;
    }
    Axios.post('http://localhost:5000/api/post/sign-in',
    {
      email:emailLogin,
      pass:passLogin
    }).then((res)=>{
      if(res.data==="loginSuccess")
      {
        alert("Login Successful!!!")
        navigate("/profile")
        document.getElementById("emailLogin").value="";
        document.getElementById("passLogin").value="";
      }
      else if(res.data==="loginFailed")
      {
        alert("Email or Password Incorrect")
      }
      
      // document.getElementById("checkTest").;
    });
  }
  


  return (
    <>
    <div className='outer__auth'>
      <div className="inner__auth">
        <div className="main__auth">  	
          <input type="checkbox" id="chk" aria-hidden="true"/>
          <div className="signup">
            <form>
              <label id="checkTest" for="chk" aria-hidden="true">SIGN UP</label>
              <input onChange={(e)=>{setName(e.target.value)}} id="nameSignup" type="text" name="txt" placeholder="Name" required="required"/>
              <input onChange={(e)=>{setEmail(e.target.value)}} id="emailSignup" type="email" name="email" placeholder="Email" required="required"/>
              <input onChange={(e)=>{setPass(e.target.value)}} id="passSignup" type="password" name="pswd" placeholder="Password" required="required"/>
              <button type="button" onClick={()=>{signUpClicked()}}>SIGN UP</button>
            </form>
          </div>

          <div className="login">
            <form>
              <label for="chk" aria-hidden="true">SIGN IN</label>
              <input onChange={(e)=>{setEmailLogin(e.target.value)}} id="emailLogin" type="email" name="email" placeholder="Email" required="required"/>
              <input onChange={(e)=>{setPassLogin(e.target.value)}} id="passLogin" type="password" name="pswd" placeholder="Password" required="required"/>
              <button type="button" onClick={()=>{signInClicked()}}>SIGN IN</button>
            </form>
          </div>
          </div>
        </div>
    </div>
    </>
  );
}

export default Auth;