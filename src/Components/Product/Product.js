import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios"
import {useNavigate} from "react-router-dom"
import Navbar from '../Navbar/Navbar';
import ProductList from '../ProductList/ProductList';

const Register = () => {

    const [fname,setFName] = useState("");
    const [file,setFile] = useState("");

    const history = useNavigate();

    const setdata = (e)=>{
        setFName(e.target.value)
    }

    const setimgfile = (e)=>{
        setFile(e.target.files[0])
    }

    const addUserData = async(e)=>{
        e.preventDefault();

        var formData = new FormData();
        formData.append("photo",file)
        formData.append("fname",fname);

        const config = {
            headers:{
                "Content-Type":"multipart/form-data"
            }
        }

        const res = await axios.post("http://localhost:5000/product/register",formData,config);
       
        if(res.data.status == 201){
            history("/login")
        }else{
            console.log("error")
        }
    }

    return (
        <>
        <Navbar/>
            <div className='container mt-3'>
                <h1>Upload Your Img Here</h1>

                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>UserName</Form.Label>
                        <Form.Control type="text" name='fname' onChange={setdata} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Select Your Image</Form.Label>
                        <Form.Control type="file" name='photo' onChange={setimgfile} />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={addUserData}>
                        Submit
                    </Button>
                </Form>
            </div>
            <ProductList/>
        </>
    )
}

export default Register