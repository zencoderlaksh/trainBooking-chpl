import React, { useState } from 'react'
import images from "../../assets/identifier"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Form from 'react-bootstrap/Form';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IconButton } from "@mui/material";
import Button from "../../components/button/Button"


const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);
  return (
    <div className='login-wrapper'>
          <div className="login-bg  flex items-center justify-center">
            <div className="login-container signup-container w-full max-w-[50%] bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
              <div className="login-wrapper bg-white rounded-lg ">
                 <div className="logo-container">
                   <img className='w-full h-[50px] login-logo' src={images.logo}  alt="" srcset="" />
                 </div>
                 <div className="login-input-body">
                   <div className="username">
                     <Box
                        component="form"
                        sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                        noValidate
                        autoComplete="off"
                      >
                      
                        <TextField id="standard-basic"  variant="standard" placeholder='Phone number / email' />
                      </Box>
                   </div>
                   <div className="password">
                    <Box
                        component="form"
                        sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                        noValidate
                        autoComplete="off"
                      >
                         <TextField
          id="standard-basic"
          variant="standard"
          placeholder="Enter password"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <IconButton onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </IconButton>
            ),
          }}
        />
                      </Box>
                   </div>
                   <div className="checkbox-wrapper">
                    <div className="rememberme">
                       <div className="checkox">
                           <Form>
                          <Form.Check 
                            type="checkbox" 
                            id="default-checkbox" 
                            label="Remember me" 
                          />
                        </Form>
                       </div>            
                    </div>
                    <div className="forget-passwored"><a className='underline forgot' href="">Forgot password</a></div>
                   </div>
                   <div className="login-btn">
                  <Button text="Login"></Button>
                   </div>
                 </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default LoginPage