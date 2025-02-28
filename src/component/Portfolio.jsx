import React from "react";
import ImportingImgs from "./ImportingImgs";
import { FaGithub } from "react-icons/fa6";
import { FaLink } from "react-icons/fa";

const Portfolio = () => {
  const images = ImportingImgs();
  return (
    <section className="portfolio" id="portfolio">
      <h1 className="heading">
        my <span>portfolio</span>
      </h1>

      <div className="py-1 bg-[#eaeaea] w-20 mb-10"></div>
      <div className="box-container grid grid-cols-3">
        {/* Allure Web Store */}
        <div className="box">
          <img src={images.project1} />
          <div className="content">
            <h3>Heritage Capital</h3>
            <div className="link">
              <a
                href="https://heritagecapitals.com.ng/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLink />
              </a>
              {/* <a
                href="https://github.com/Benedict-Anthony/Allure"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a> */}
            </div>
          </div>
        </div>

        {/* Web3 Blog */}
        <div className="box">
          <img src={images.project2} />
          <div className="content">
            <h3>Hamonie Spring Schools</h3>
            <div className="link">
              <a
                href="https://web3-0-blog-chain.vercel.app/popular"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLink />
              </a>
              {/* <a
              href="https://github.com/Benedict-Anthony/web3.0-blog-chain"
              target="_blank"
              rel="noopener noreferrer"
              >
                <FaGithub />
              </a> */}
            </div>
          </div>
        </div>

        {/* Bookmark Landing Page */}
        <div className="box">
          <img src={images.project4} />
          <div className="content">
            <h3>Heritage Capital</h3>
            <div className="link">
              <a
                href="https://openmindedservices.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLink />
              </a>
              {/* <a
              href="https://github.com/Benedict-Anthony/Allure"
              target="_blank"
              rel="noopener noreferrer"
              >
                <FaGithub />
              </a> */}
            </div>
          </div>
        </div>

        {/* Tasty Spices */}
        <div className="box">
          <img src={images.project3} />
          <div className="content">
            <h3>E-Commerce Web App</h3>
            <div className="link">
              <a
                href="https://react-ecommerce-ten-kappa.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLink />
              </a>
              {/* <a
                href="https://github.com/Afrifood-Paul/ReactEcommerce"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a> */}
            </div>
          </div>
        </div>

        {/* Meta BNB */}
        {/* <div className="box">
          <img src={images.project2} />
          <div className="content">
            <h3>Hamonie Spring Schools</h3>
            <div className="link">
              <a
                href="https://web3-0-blog-chain.vercel.app/popular"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLink />
              </a>
              <a
                href="https://github.com/Benedict-Anthony/web3.0-blog-chain"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Portfolio;
