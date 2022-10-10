// import React, { useState } from "react";
import "./Contact.css";
import { FiSend } from "react-icons/fi";
export default function Contact() {
  return (
    <div className="contact">
      <div className="form">
        <p>Full name</p>{" "}
        <input name="name" placeholder="Your name" type="text" />
      </div>
      <div className="form">
        {" "}
        <p>Email address</p>
        <input
          name="email"
          placeholder="email-address@email.com"
          type="email"
        />
      </div>
      <div className="form">
        <p>Message</p>
        <textarea name="message" cols={25} rows={2}></textarea>
      </div>
      <button className="submit">{<FiSend />}</button>
    </div>
  );
}
