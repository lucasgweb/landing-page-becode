import React from "react";
import "./hero.scss";
import images from "./../../../../assets";
import Button from "../../../Generics/button/Button";
const Hero = () => {
  return (
    <div className="Hero container">
      <div>
        <h2>Transformando Possibilidades em Realidade</h2>
        <p>
          Tecnologia, Inovação, Segurança, Agilidade e Eficiência. Tudo em um só
          lugar.
        </p>
        <Button content="Conheça mais" />
      </div>
      <img className="computer" src={images.heroComputer} alt="" />
    </div>
  );
};

export default Hero;
