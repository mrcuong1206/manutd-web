import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Button from "../UI/Button";

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
    // <form ref={form} onSubmit={sendEmail} className="py-32">
    //   <label>Name</label>
    //   <input
    //     type="text"
    //     name="user_name"
    //     placeholder="Enter your name ..."
    //     className="py-5 px-7 border-dotted"
    //   />
    //   <label>Email</label>
    //   <input type="email" name="user_email" />
    //   <label>Message</label>
    //   <textarea name="message" />
    //   <input type="submit" value="Send" />
    // </form>
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-32">
        <div
          className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-red-300 md:p-6 p-2 rounded-lg mx-auto"
        >
          <form
            className="flex flex-col flex-1 gap-5 pt-14 pb-10 px-8 text-black"
            ref={form}
            onSubmit={sendEmail}
          >
            <h1 className="text-3xl font-bold italic mb-2 -mt-10 text-red-600">
              FeedBack
            </h1>
            <input
              type="text"
              placeholder="Your Name"
              name="user_name"
              className="py-3 px-4"
            />
            <input
              type="Email"
              name="user_email"
              placeholder="Your Email Address"
              className="py-3 px-4"
            />
            <textarea
              placeholder="Your Message"
              name="message"
              rows={10}
              className="py-3 px-4"
            ></textarea>
            {/* <button className="btn-primary w-fit text-white">
              Send Message
            </button> */}
            <div className="mt-10">
              <Button>Send Message</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FeedBack;
