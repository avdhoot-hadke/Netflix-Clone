import "./player.css";
import video from "../../assets/video.mp4";
import { useNavigate } from "react-router-dom";

function Player() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="player">
        <div className="back">
          <button className="btn btn-secondary" onClick={() => navigate(-1)}>
            <i className="fa-solid fa-arrow-left fa-xl text-light"></i>
          </button>
        </div>
        <video src={video} autoPlay loop controls muted></video>
      </div>
    </div>
  );
}

export default Player;
