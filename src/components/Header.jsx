import React from "react";
import Lottie from "lottie-react";
import noteAnimation from "../assets/notes.json";

const Header = () => {
  return (
    <div className="header">
      <Lottie
        animationData={noteAnimation}
        loop={false}
        style={{ height: "100px", width: "100px" }}></Lottie>
      <h2>Note Keep</h2>
    </div>
  );
};

export default Header;
