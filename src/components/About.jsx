import {} from "../styles/about.css";
import astro from "../assets/astro2.mp4";
import {  useEffect, useRef } from "react";

const About = () => {

    const videoRef = useRef(null);

    useEffect(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, []);
  return (
    <div className="div-about">
      <div className="content-text">
        <h3 className="text">
          Hi there ,<br />
          <br />
          I am Geovanny Manga 👨🏻‍💻 Fullstack Web and Mobile Developer
          <br />
          With experience building sites and web applications. <br></br>I
          specialize in JavaScript 🤓
          <br />
          <br />
          At present I focus on the development with the typescript language of
          web pages and mobile applications with React and React Native, I also
          like to implement backends with node and express in the cloud with
          Google Cloud, distributing the features in microservices for the
          scalability of my Freelance projects, I use agile methodologies and
          design patterns to develop a clean, functional and durable product
          over time 🤓
        </h3>
      </div>
      <div className="div-astro">
      <video ref={videoRef} className="astro" src={astro} autoPlay muted loop ></video>

      </div>
    </div>
  );
};

export default About;
