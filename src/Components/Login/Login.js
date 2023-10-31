import React, { useState, useEffect } from "react";
import axios from "axios";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { MdOutlineLock } from "react-icons/md";
import { AiOutlineMail,AiOutlineUser,AiOutlineKey } from "react-icons/ai";
import {BsArrowRight} from "react-icons/bs"
//hello mannu git
import {
  Nav,
  NavItem,
  Form,
  Button,
  Col,
  Row,
  Label,
  Input,
  FormGroup,
} from "reactstrap";
import { Link,useNavigate,useLocation } from "react-router-dom";
// import logo from "../images/logoPng.png";
import "../Login/login.css";

function Login() {
    const navigate = useNavigate();
    const location = useLocation()
    

    const [isRevealPwd, setIsRevealPwd] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {

    const result = await axios
      .post("http://localhost:5000/login/", {
        email: email,
        password: password,
      }).then(
        (response) => {
          console.log("token",response.data.token);
  
          if (response.data.login === true) {
            // window.location.href = "/product";
            navigate("/product", { state: { id: email } })
            console.log(response.data);
            localStorage.setItem("email", `${email}`);
            localStorage.setItem("jwt", response.data.token);
            localStorage.setItem("userID", response.data.user_id);
            console.log(email);
            document.getElementById("login_id").innerHTML =
              "Successfully login.";
          } else {
           
            document.getElementById("validate_id").innerHTML =
              "Invalid Credentials.";
            // window.alert('Incorrect Password or username')
             
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }
  
  return (
    <section>
<div className="" data-aos="zoom-in">
  <div className="">
    <div className="row align-items-center bg-color-dark">

      <div className="col-sm-12 col-md-6 col-lg-5 col-xl-5 col-xxl-5">
       
        <div className=" px-lg-5">
           
          {/* <h5 style={{ color: "#211E6D",fontSize:"16px" }} >Request a demo to see how Dwellfox platform can power your extended workforce.</h5> */}
          <form className="mt-4">
          
           
          <div className="loginDiv mb-4">
              <Col md={10} className="login-form-box">
              <h3 className="register_heading text-center">Register new user</h3>

              <div className="col-sm-12 col-md-6 col-lg-5 col-xl-5 col-xxl-5  ">
      </div>
                

                <FormGroup action="" className="form">
                {/* <label
                          htmlFor=""
                          className=""
                          style={{ fontSize: "16px" }}
                        >
                           Email or Username<sup className="text-danger">*</sup>
                        </label> */}
                  <div className="form-input">
                    <AiOutlineUser className="icon2" />
                    
                    <input
                      id="email"
                      name="email"
                      className="input-field"
                      placeholder="Login ID"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </FormGroup>
                <FormGroup action="" className="form">
                {/* <label
                          htmlFor=""
                          className=""
                          style={{ fontSize: "16px" }}
                        >
                          Password<sup className="text-danger">*</sup>
                        </label> */}
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
                    <AiOutlineKey className="icon2 password-icon" />
                    <input
                      id="password"
                      name="pwd"
                      className="input-field"
                      placeholder="Password"
                      type={isRevealPwd ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </FormGroup>

                <p className="validate" id="validate_id"></p>
                <p className="login" id="login_id"></p>

              

                <div className="d-flex mt-4">
                  <Button className="login-btn" onClick={handleLogin}>
                    Login <BsArrowRight/>
                  </Button>
                
                </div>
              
                <br />
              </Col>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
</section>
  )
}

export default Login;