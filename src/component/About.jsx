import React from "react";
import ImportingImgs from "./ImportingImgs";

const About = () => {
  const images = ImportingImgs();

  return (
    <section class="about" id="about">
      <h1 class="heading">
        {" "}
        <span>about</span> me{" "}
      </h1>
      <div className="py-1 bg-[#eaeaea] w-20"></div>

      <div class="row">
        {/* <div class="box-container">
          <div class="box">
            <h3>2+</h3>
            <p>years of experience</p>
          </div>
        </div> */}

        <div class="content">
          <p>
            I am a passionate front-end developer crafting seamless user
            experiences with cutting-edge technologies and open to learning more
            from senior developers. Dedicated to responsive design, ensuring
            your site looks stunning on any device. Adept at collaborating with
            cross-functional teams to bring creative visions to life. Ready to
            turn your digital ideas into reality with clean, efficient code.
          </p>
          <p>
            I am proficient in building dynamic and interactive web applications
            using Next Js,React Js,Typescript,Tailwind Css and other development
            tools. I have utilized Redux Toolkit, a powerful state management
            library, to handle complex application states in React projects.
          </p>

          <p>
            I am excited to continue expanding my skillset and contribute to
            innovative projects, leveraging my expertise in frontend development
            to create engaging user interfaces.
          </p>
          
          <a href="mailto:docpaul2016@gmail.com" className="btn">
            contact me
          </a>
        </div>
      </div>

      <div class="row">
        <div class="skills">
          <div class="bar">
            <p> HTML</p>
            <img src={images.html} alt="bootsrap" />
          </div>

          <div class="bar">
            <p> CSS</p>
            <img src={images.css} alt="bootsrap" />
          </div>

          {/* <div class="bar">
            <p> SASS</p>
            <img src="./image/sass.png" alt="">
          </div> */}

          <div class="bar">
            <p>Tailwind CSS</p>
            <img src={images.tailwindcss} alt="bootsrap" />
          </div>
        </div>

        <div class="skills">
          <div class="bar">
            <p>Bootstrap</p>
            <img src={images.Bootstrap} alt="bootsrap" />
          </div>
          <div class="bar">
            <p> React</p>
            <img src={images.react} alt="bootsrap" />
          </div>
          <div class="bar">
            <p>Next JS</p>
            <img src={images.nextjs} alt="bootsrap" />
          </div>

          {/* <div class="bar">
            <p> Material UI</p>
            <img src={images.Bootstrap} alt="bootsrap"/>
          </div> */}
        </div>

        <div class="skills">
          <div class="bar">
            <p> javascript</p>
            <img src={images.javascript} alt="bootsrap" />
          </div>

          <div class="bar">
            <p>Redux toolkit</p>
            <img src={images.redux} alt="bootsrap" />
          </div>

          <div class="bar">
            <p> Typescript</p>
            <img src={images.typescript} alt="bootsrap" />
          </div>
          {/* <div class="bar">
            <p>Python</p>
            <img src={images.Bootstrap} alt="bootsrap"/>
          </div> */}

          {/* <div class="bar">
            <p> Git</p>
            <img src={images.Bootstrap} alt="bootsrap"/>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
