import React, { useState,useEffect } from "react";
import axios from "axios";
import "../Product/product.css";

async function ContactData(getContact){
    await axios.post('http://localhost:5000/product/getproduct',
    {
        headers: { authorization: `Bearer ${localStorage.getItem('token')}` },
    }
    )
    .then((res)=>{
        console.log(res.data);
        getContact(res.data);
    })
  }

function ProductList() {
    const [contact, getContact] = useState([]);
    const [defaultcontact, DefaultgetContact] = useState([]);


    useEffect(() => {
        ContactData(getContact,DefaultgetContact)   
     }, [])
      console.warn(contact)

  return (
    <div>
            <table id="customers">
      <thead style={{background:"#1B2644", color:"white"}}>
       <tr>
          <td>S.No</td>
          <td>Product Name</td>
          <td>Product Image</td>
          <td>Date</td>
        </tr>
        </thead>
        <tbody>
        {
          contact.map((item,i)=>
            <tr key={i}>
            <th scope="row">{i+1}</th>
            <td>{item.username}</td>
            <td ><img src={`/uploads/${item.userimg}`}/></td>
            <td>{item.date.slice(0,10)}</td>
          </tr>
          )
        }
       </tbody>
      </table>
    </div>
  )
}

export default ProductList