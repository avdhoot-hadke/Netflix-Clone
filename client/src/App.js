import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./pages/signup/signup";
import Login from "./pages/login/login";
import Netflix from "./pages/netflix/Netflix";

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
        </Routes>
      </Router>
    </>
  );
}

export default App;
