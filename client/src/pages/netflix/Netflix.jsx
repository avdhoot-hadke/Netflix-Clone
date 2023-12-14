import Navbar from "../../Components/Navbar/navbar";
import "./netflix.css";
import backgroundImg from "../../assets/home.jpg";
import movieLogo from "../../assets/homeTitle.webp";
import { useNavigate } from "react-router-dom";

function Netflix() {
  const navigate = useNavigate();
  return (
    <div className="netflix-home">
      <Navbar />
      <div className="hero">
        <img src={backgroundImg} alt="bgImg" className="netflix-bg-img"></img>

        <div className="netflix-hero-cont">
          <img
            src={movieLogo}
            alt="movieLogo"
            className="netflix-hero-logo mb-4"
          />

          <div className="netflix-hero-item mt-3">
            <button
              type="button"
              class="btn btn-light netflix-hero-btn"
              onClick={() => navigate("/player")}
            >
              <i class="fa-solid fa-play fa-xl me-2"></i>
              Play
            </button>
            <button
              type="button"
              class="btn btn-secondary netflix-hero-btn ms-4"
            >
              <i class="fa-solid fa-circle-info fa-xl me-2"></i>
              More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Netflix;
