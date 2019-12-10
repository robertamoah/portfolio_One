// import { Redirect } from 'react-router-dom'

// import React from 'react';


import axios from "axios";

export default function login (type, callback){
   let URL = "/login"

   axios.post(URL, {
    email: type.email,
    password: type.password
  })
  .then(function (response) {
    
   

console.log(response)

    localStorage.setItem("token", response.data )
  



    
    // console.log(response.data);


// robertamoah271@gmail.com

let data = response.data


callback(data)

  })
  .catch(function (error) {
    console.log("did it", error);
  });








}

