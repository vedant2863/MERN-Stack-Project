import React from "react";

const Footer = () => {
  return (
    <div className="footer bg-slate-800 text-white flex flex-col justify-center items-center fixed bottom-0 w-full">
      <div className="logo font-bold">
        <span className="text-green-500">&lt;</span>
        <span>Pass</span>
        <span className="text-green-500"> Op /&gt;</span>
      </div>
      <div className="flex justify-center items-center">
        Created with
        <img className="w-7 mx-2" alt="Heart" src="icons/heart.png" /> by Deku
      </div>
    </div>
  )
};

export default Footer;
