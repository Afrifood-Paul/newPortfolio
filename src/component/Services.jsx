import React from "react";
import { FaCode } from "react-icons/fa";

const Services = () => {
  return (
    <div>
      <section className="services" id="services">
        <h1 className="heading">
          {" "}
          What <span>I can Do</span>{" "}
          <div className="py-1 bg-[#eaeaea] w-20 mb-5"></div>
        </h1>

        <div className="box-container">
          <div className="box">
            <div className="icon">
              {" "}
              <FaCode />
            </div>
            <h3>Fontend development</h3>
            <p>
              I specialize in creating responsive and visually appealing user
              interfaces. I have a strong focus on implementing APIs and
              integrating them seamlessly into web applications. My duties
              include translating design mockups into code, optimizing
              performance, and ensuring cross-browser compatibility. I am
              dedicated to delivering an exceptional user experience through
              intuitive and user-friendly interfaces.
            </p>
          </div>

          {/* <div className="box">
            <i className="fas fa-code"></i>
            <h3>Backend development</h3>
            <p>
              I thrive in backend development, building robust and scalable
              server-side solutions. With expertise in Python and frameworks
              like Django, I create efficient APIs and handle complex business
              logic. My responsibilities include database management, security
              implementation, and performance optimization. I am committed to
              delivering reliable and high-performing backend systems that power
              seamless user experiences.
            </p>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Services;
