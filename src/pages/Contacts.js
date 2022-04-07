import React, { Component } from "react";
import { Divider } from "@material-ui/core";
import styles from "./Contacts.module.css";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

// const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   };

export default function Transactions() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_stgw4v4', 'template_ry8zwrl', form.current, 'd8qD8XJaz1RPShXXf')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

    return (
      <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <br></br><label>Email</label>
      <input type="email" name="user_email" /><br></br>
      <br></br><label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    );
  
}


