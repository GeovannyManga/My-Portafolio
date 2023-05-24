import {} from "../styles/work.css";
import { Link } from "react-router-dom";

const Work = () => {
  return (
    <div className="div-work">
      <div className="div-1">
        <h2 className="title">
          Personal Project: E-commerce
          <br /> for Video Games
        </h2>
        <p className="parrafo">
          During my journey as a web developer, I had the opportunity to work on
          an exciting personal project: the creation of an e-commerce platform
          for video games. This project allowed me to combine my passion for
          video games with my technical skills. The main objective was to build
          an online platform that allowed users to explore and purchase a wide
          range of video games. To achieve this, I implemented integration with
          an external API, leveraging its functionalities and up-to-date data on
          available games in the market. This project provided me with the
          opportunity to deepen my knowledge in web development, especially in
          the area of API integrations. Additionally, I was able to enhance my
          skills in design and usability to create an intuitive and visually
          appealing shopping experience for users.
        </p>
        <Link className="btn2" to={"https://videogame-eight.vercel.app/home"}>
          VIEW
        </Link>
      </div>
      <div className="div-2">
        <h2 className="title">
          Proyecto Grupal:
          <br /> Tayrona Park - Hotel Real
        </h2>
        <p className="parrafo2">
          I participated in a group project for Hotel Real in Tayrona National
          Natural Park, called Tayrona Park. We worked as a team and developed a
          website that showcased the beauty of the hotel and provided
          information about its facilities and services. Through this project, I
          acquired soft skills and strengthened my teamwork abilities. We
          collaborated closely with the hotel staff, faced challenges, and
          developed communication and adaptability skills. I am proud of the
          achieved results and excited to continue growing professionally in the
          field of web development.
        </p>
        <Link className="btn" to={"https://tayrona-app.netlify.app/"}>
          VIEW
        </Link>
      </div>
    </div>
  );
};

export default Work;
