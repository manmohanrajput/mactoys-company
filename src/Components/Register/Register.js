import React, { useState, useEffect } from "react";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { MdOutlineLock } from "react-icons/md";
import { AiOutlineMail, AiOutlineUser, AiOutlinePhone } from "react-icons/ai";
import { Button, Form, FormGroup, Input, Col} from "reactstrap";
import axios from "axios";
import "../Register/register.css";
import { Link } from "react-router-dom";


function Register() {
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validationError, setValidationError] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  useEffect(() => {
    const userAlreadyRegistered = true; 

    if (userAlreadyRegistered) {
    
      console.log("User is already registered.");
    }
  }, []);

  async function handleRegisterUser() {
    if (!name || !email || !password || !phone) {
      setValidationError("*Please fill all required fields.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/signup/register", {
        name: name,
        email: email,
        password: password,
        phone: phone,
      });
      console.log("User Registration Data:", response.data);
      setValidationError("");
      setRegistrationSuccess(true);
      window.location.href = "/login";
    } catch (error) {
      console.log(error);
      setValidationError("Registration failed. Please try again.");
    }
  }

  return (
    <div className="container">
      <Col md={6} className="box-2">
        <div>
          <Col md={10} className="login-form-box">
            <h3 className="register_heading">Register new user</h3>
            <div className="form">
              <FormGroup action="" className="form">
                <div className="form-input">
                  <AiOutlineUser className="icon2" />
                  <input
                    id="name"
                    name="name"
                    className="input-field"
                    placeholder="Enter name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </FormGroup>

              <FormGroup action="" className="form">
                <div className="form-input">
                  <AiOutlineMail className="icon2" />
                  <input
                    id="email"
                    name="email"
                    className="input-field"
                    placeholder="Enter email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </FormGroup>

              <FormGroup action="" className="form">
                <div className="form-input">
                  <span className="icon1">
                    {isRevealPwd ? (
                      <>
                        {" "}
                        <AiFillEye
                          onClick={() =>
                            setIsRevealPwd((prevState) => !prevState)
                          }
                        />{" "}
                      </>
                    ) : (
                      <>
                        <AiFillEyeInvisible
                          onClick={() =>
                            setIsRevealPwd((prevState) => !prevState)
                          }
                        />{" "}
                      </>
                    )}
                  </span>
                  <MdOutlineLock className="icon2" />
                  <input
                    name="pwd"
                    className="input-field"
                    placeholder="Enter Password"
                    type={isRevealPwd ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </FormGroup>
              <FormGroup action="" className="form">
                <div className="form-input">
                  <AiOutlinePhone className="icon2" />
                  <input
                    id="phone"
                    name="phone"
                    className="input-field"
                    placeholder="Enter Number"
                    type="number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </FormGroup>

              <p className="error-message">{validationError}</p>
              {registrationSuccess && (
                <p className="success-message">Registration Successful!</p>
              )}
              <br />

              {password != "" && email != "" && name != "" && phone !="" ? (
                  <>
                    <FormGroup>
                     <div >
                     <Link to="/login">
                      <Button className="login_button" onClick={handleRegisterUser}>
                        Register 
                      </Button>
                      </Link>
                      
                 
                     </div>
                    </FormGroup>
                  </>
                ) : (
                  <FormGroup className="">
                   <div className="d-flex ">
                 <Button className="login_button " onClick={handleRegisterUser}>
                    Register
                  </Button>
                <p style={{margin:'10px'}}>Or</p>
                  <Link to="/login">
                  <Button className="login_button" >
                    Login
                  </Button>
                  </Link>
                 </div>
                </FormGroup>
                )}
            </div>
            <br />
          </Col>
        </div>
      </Col>
    </div>
  );
}

export default Register;
