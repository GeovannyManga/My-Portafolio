import React from "react";
import "../styles/contact.css";
import astro from "../assets/astro2.mp4";


const Contact = () => {
  const phoneNumber = "+573014866865";
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <div className="contact-card">
      <div className="contact-photo-container">
        <video src={astro} autoPlay muted loop className="contact-photo" />
      </div>
      <div className="contact-details">
        <h2>Reach out to me.</h2>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/geodev17/" className="social-link">
              <i className="fab fa-linkedin"></i> Linkedin: Geovanny Manga
            </a>
          </li>
          <li>
            <a href="mailto:youremail@example.com" className="social-link">
              <i className="far fa-envelope"></i> Email: geovannyx.casimirom@unac.edu.co
            </a>
          </li>
          <li>
            <a href={whatsappLink} className="social-link">
              <i className="fab fa-whatsapp"></i> Phone: +57 3014866865
            </a>
          </li>
          <li>
            <a href="https://github.com/yourgithubprofile" className="social-link">
              <i className="fab fa-github"></i> GitHub: GeovannyManga
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
