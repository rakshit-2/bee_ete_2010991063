import './index.css';

const Auth=(props)=> {
  return (
    <>
    <div className='outer__auth'>
      <div className="inner__auth">
        <div className="main">  	
          <input type="checkbox" id="chk" aria-hidden="true"/>
          <div className="signup">
            <form>
              <label for="chk" aria-hidden="true">SIGN UP</label>
              <input type="text" name="txt" placeholder="User name" required="required"/>
              <input type="email" name="email" placeholder="Email" required="required"/>
              <input type="password" name="pswd" placeholder="Password" required="required"/>
              <button>SIGN UP</button>
            </form>
          </div>

          <div className="login">
            <form>
              <label for="chk" aria-hidden="true">LOGIN</label>
              <input type="email" name="email" placeholder="Email" required="required"/>
              <input type="password" name="pswd" placeholder="Password" required="required"/>
              <button>LOGIN</button>
            </form>
          </div>
          </div>
        </div>
    </div>
    </>
  );
}

export default Auth;