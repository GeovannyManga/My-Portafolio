import {  } from "../styles/home.css";
import linkeding from "../assets/linkeding-icon.png";
import github from "../assets/github-icon.png";
import { useEffect } from "react";

const Home = () => {
    useEffect(() => {
        const timer = setTimeout(() => {
          const geoName = document.querySelector('.Geo-name');
          if (geoName) {
            geoName.classList.add('show-element');
          }
        }, 5000); // 5 segundos (5000 milisegundos)
    
        return () => {
          clearTimeout(timer); // Limpiar el temporizador si el componente se desmonta antes de que se active
        };
      }, []);
  return (
    <div className="div-home">
       <div className="div-name">
           <h1 className="hello">HELLO, I AM</h1>
           <span className="Geo-name">Geovanny Manga</span>
           <div className="texto">
            <span className="skills">Full stack web and mobile Developer | ReactJs | NodeJs | ReactNative | Typescript | Mongodb | mongoose |SQL | Postgresql | Sequelize| Backend | Frontend</span>
            <button className="btn-contact" >Contact</button>
            <div className="icons"><span className="spam-get" >Get Social</span>
            <div className="line"></div>
            <img className="icon" src={linkeding} alt="linkeding" />
            <img className="icon" src={github} alt="linkeding" />
            </div>
           </div>
       </div>
       <div className="ilustraciones">
        <div className="image-flete"></div>
        <div className="foto"></div>
        <div className="ilustra2"></div>
       </div>
    </div>
  );
};

export default Home;
