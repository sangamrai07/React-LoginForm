import React, {useState} from 'react'
import './Form.css'
import axios from 'axios';


function DemoForm() {
      const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);


  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      username,
      password,
    };
      
       try {

      const response = await axios.post('https://64bfaa810d8e251fd111398d.mockapi.io/users', data);

           console.log('API Response:', response.data);
           
           // Clearing the input fields
            setUsername('');
           setPassword('');
           
    } catch (error) {

      console.error('API Error:', error);
    }
  }
    
     const handleTogglePassword = () => {
   
    setShowPassword(!showPassword);
  };

  return (
    <>
          <div className="container">
              <form onSubmit={handleSubmit}>
                  <h1>Login</h1>
                  <div className="input-elements">
                      <input type="text" placeholder='Username'               value={username}
              onChange={handleUsernameChange}  required />
                             <i class='bx bx-user-circle'></i>                                
                  </div>
                   
                  <div className="input-elements">
                      <input type={showPassword ? 'text' : 'password'} placeholder='Password'  value={password}
              onChange={handlePasswordChange} required />
                      <i class='bx bx-lock-alt'></i>   
                       
          
                  </div>
                    <button
              type="button"
              onClick={handleTogglePassword}
              className="toggle-password-button"
            >
              {showPassword ? 'Hide' : 'Show'} Password
            </button>
                  <div className="remember">
                      <label>
                          <input type="checkbox" />
                          Remember Me
                      </label>
                      <a href="#">Forgot Password</a>
                  </div>
                  <button type='submit' className='button'>Sign In</button>
                  <div className="register">
                      <p>Don't have an account?   <a href="#">Register</a></p>
                    
                  </div>
              </form>
      </div>
    </>
  )
}

    export default DemoForm;