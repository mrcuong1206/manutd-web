import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Button from "../UI/Button";

const FeedBack = (props) => {
  const form = useRef();
  const [error, setError] = React.useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.user_name.value;
    const email = form.current.user_email.value;
    const message = form.current.message.value;
    if (!name || !email || !message) {
      setError("Please fill in all the fields");
      return;
    }

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
    // e.target.reset();
    // Reset form và xóa thông báo lỗi (nếu có)
    form.current.reset();
    setError(null);
  };

  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-24">
        <div
          className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-[#ccc] md:p-6 p-2 rounded-lg mx-auto"
        >
          <form
            className="flex flex-col flex-1 gap-5 pt-14 pb-5 px-8 text-black"
            ref={form}
            onSubmit={sendEmail}
          >
            <h1 className="text-4xl font-bold italic mb-2 -mt-10 text-red-700">
              Feedback
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
            {error && <p className="text-red-500 font-bold text-xl">{error}</p>}
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
