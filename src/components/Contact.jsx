import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "template_1s0epga", form.current, "y-a43L7WirM1-IuDF")
      .then(
        (result) => {
          swal({
            title: "Good job!",
            text: "Your Message Has Been Sent",
            icon: "success",
            button: "Ok",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div
      name="contact"
      className="w-full h-full bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        ref={form}
        onSubmit={sendEmail}
        action="https://formsubmit.co/andaruakbar11@gmail.com"
        method="POST"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="py-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-[#9121f3] text-gray-300">
            Contact
          </p>
        </div>
        <input
          type="text"
          className="bg-[#ccd6f6] p-2 text-[#0a192f] rounded-md"
          name="subject"
          placeholder="Subject"
        />
        <input
          type="text"
          className="bg-[#ccd6f6] p-2 my-4 text-[#0a192f] rounded-md"
          name="name"
          placeholder="Name"
        />
        <input
          type="email"
          className="bg-[#ccd6f6] p-2 text-[#0a192f] rounded-md"
          name="email"
          placeholder="Email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2 my-4 text-[#0a192f] rounded-md"
          name="message"
          id="input-msg"
          rows="10"
          placeholder="message"
        ></textarea>
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-1 my-8 items-center rounded-lg border-2 border-[#9121f3] button-light-code"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
