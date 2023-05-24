import {  } from "../styles/welcome.css";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="div-principal">
        <div className="div-central">
          <h1 className="title-welcome">Welcome to My Portfolio</h1>
          <Link to={"/home"} class="link">VIEW</Link>
        </div>
    </div>
  );
};

export default Welcome;
