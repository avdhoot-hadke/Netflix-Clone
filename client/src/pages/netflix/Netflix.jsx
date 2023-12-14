import "./netflix.css";
import Navbar from "../../Components/Navbar/navbar";
import movieLogo from "../../assets/homeTitle.webp";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { fetchMovies, getGenres } from "../../store/features";
import { useDispatch, useSelector } from "react-redux";

function Netflix() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  useEffect(() => {
    if (genresLoaded) {
      dispatch(fetchMovies({ type: "all" }));
    }
  }, [genresLoaded, dispatch]);
  return (
    <div className="netflix-home container-fluid p-0">
      <Navbar />
      <div className="hero">
        <img className="hero-movie-logo" src={movieLogo} alt="" />
        <button
          className="btn btn-light btn-play "
          type="submit"
          onClick={() => navigate("/player")}
        >
          <i className="fa-solid fa-play me-2"></i>
          Play
        </button>
        <button className="btn btn-secondary btn-more-info " type="submit">
          <i className="fa-solid fa-circle-info me-2"></i>
          More info
        </button>
      </div>
    </div>
  );
}

export default Netflix;
