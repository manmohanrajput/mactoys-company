import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const Register = React.lazy(() => import("./Components/Register/Register"));
const Login = React.lazy(() => import("./Components/Login/Login"));
const Product = React.lazy(() => import("./Components/Product/Product"));




function App() {
  return (
    <>
 
    
      <Router>
      
        <React.Suspense fallback={<div className='d-flex justify-content-center align-items-center'>
        </div>}>
          <Routes>
            
            <Route exact path="/" element={<Register />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/product" element={<Product />} />
          </Routes>
        </React.Suspense>
      </Router>
    </>
  );
}

export default App;
