import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const FeedBack = (props) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "test_sendmail",
        "template_jvs5i08",
        form.current,
        "ZKLvgDeWyU9HeB9q2"
      )
      .then(
        (result) => {
          alert("Sent Success");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="py-32">
      <label>Name</label>
      <input
        type="text"
        name="user_name"
        placeholder="Enter your name ..."
        className="py-5 px-7 border-dotted"
      />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default FeedBack;
