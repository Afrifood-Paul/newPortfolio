import React from "react";

const Contact = () => {
  return (
    <div>
      <section className="contact" id="contact">
        <h1 className="heading">
          <span>contact</span> me
          <div className="py-1 bg-[#eaeaea] w-20"></div>
        </h1>

        <form name="contact" method="POST" data-netlify="true">
          <input
            type="text"
            placeholder="your name"
            name="name"
            className="box placeholder:text-[#333]"
          />
          <input
            type="email"
            placeholder="your email"
            name="email"
            className="box placeholder:text-[#333]"
          />
          <input
            type="text"
            placeholder="subject"
            className="box placeholder:text-[#333]"
            name="subject"
            data-remove-prefix
          />
          <textarea
            name="message"
             className="box placeholder:text-[#333]"
            placeholder="your message"
            cols="30"
            rows="10"
          ></textarea>
          {/* <div data-netlify-recaptcha="true"></div> */}
          <input
            type="submit"
            value="send message"
            name="message"
            className="btn"
          />
        </form>
      </section>
    </div>
  );
};

export default Contact;
