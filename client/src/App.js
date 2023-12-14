import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./pages/signup/signup";
import Login from "./pages/login/login";
import Netflix from "./pages/netflix/Netflix";
import Player from "./pages/player/player";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/posts" element={<Posts />} /> */}

          <Route path="/" element={<Netflix />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/player" element={<Player />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
