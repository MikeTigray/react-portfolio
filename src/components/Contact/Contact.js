// import React, { useState } from "react";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import "./Contact.css";
import { FiSend } from "react-icons/fi";
export default function Contact() {
  // Handling Email
  const form = useRef();
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_upgpwli",
        "template_dwu64xp",
        form.current,
        "qdzrHVHxkv7KBig_d8QJo"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <form ref={form} className="contact">
      <div className="form">
        <p>Full name</p>{" "}
        <input name="user_name" placeholder="Your name" type="text" />
      </div>
      <div className="form">
        {" "}
        <p>Email address</p>
        <input
          name="user_email"
          placeholder="email-address@email.com"
          type="email"
        />
      </div>
      <div className="form">
        <p>Message</p>
        <textarea name="message" cols={25} rows={2}></textarea>
      </div>

      <button
        type="submit"
        value="Send"
        onSubmit={sendEmail}
        className="submit"
      >
        {<FiSend />}
      </button>
    </form>
  );
}
