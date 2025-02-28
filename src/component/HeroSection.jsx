import React, { useEffect, useState } from "react";
import {
  FaBars,
  FaFacebook,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMoon,
  FaSun,
  FaTwitter,
} from "react-icons/fa";
import TypewriterComponent from "typewriter-effect";

const HeroSection = () => {
  const darkMode = localStorage.getItem("theme");
  const [theme, setTheme] = useState(darkMode || "light");

  // Toggle the theme between light and dar
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  //download cv logic
  const handleDownload = () => {
    console.log("cv dowloaded");
    const link = document.createElement("a");
    link.href = "/path/to/cv.pdf";
    link.download = "my-cv.pdf";
    link.click();
  };

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("active"); // Add class to body for dark theme
    } else {
      document.body.classList.remove("active"); // Remove class for light theme
    }
  }, [theme]);

  return (
    <div>
      {/*Menu Bar for small Screen */}
      <div id="menu-btn">
        <FaBars className="mx-auto mt-5" />
      </div>

      {/*Dark And Light Mode Toggler */}
      <div id="theme-toggler" onClick={toggleTheme}>
        {theme === "dark" ? (
          <FaSun className="mx-auto mt-5" />
        ) : (
          <FaMoon className="mx-auto mt-5" />
        )}
      </div>

      <section className="home" id="home">
        <div className="content">
          <h3 className="font-bold lg:font-semibold">Adebayo Paul</h3>
          <p>
            <TypewriterComponent
              options={{
                autoStart: true,
                loop: true,
                delay: 50,
                strings: ["I'm a Frontend Developer", "A React Developer"],
              }}
            />
          </p>
          <button onClick={handleDownload} className="btn">
            Download My CV
          </button>
        </div>

        <div className="share">
          <a href="#" target="_blank">
            <FaFacebookF />
          </a>
          <a href="#" target="_blank">
            <FaTwitter />
          </a>
          {/* <a href="#" target="_blank" className="fab fa-instagram">
            <FaInstagram />
          </a> */}
          <a
            href="https://www.linkedin.com/in/adebayo-opeyemi-paul-886147270"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>

          <a href="https://github.com/Afrifood-Paul?tab=repositories" target="_blank">
            <FaGithub />
          </a>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
