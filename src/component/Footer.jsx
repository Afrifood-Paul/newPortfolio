import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center">
      <p className="credits border-t-4 py-10 mt-10 text-2xl text-[#853700] border-[#853700]">
        Adebayo Paul © {currentYear} | all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
