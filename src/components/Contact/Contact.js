import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import "./Contact.css";
import { FiSend } from "react-icons/fi";
export default function Contact() {
  // Handling Email
  const form = useRef();
  function sendEmail(e) {
    e.preventDefault();
    const serviceId = "service_upgpwli";
    const templateId = "template_dwu64xp";
    const publicKey = "L2ViLAx26OSfAMZR6";

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
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

      <button type="submit" value="Send" onClick={sendEmail} className="submit">
        {<FiSend />}
      </button>
    </form>
  );
}
