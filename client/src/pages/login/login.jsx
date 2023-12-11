import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import signupLogo from "../../assets/Netflix_Logo_RGB.png";

function Login() {
  const navigate = useNavigate();
  return (
    <div className="login-page">
      <div className="login-nav">
        <img className="login-logo" src={signupLogo} alt=""></img>
      </div>
      <div className="login-form-div" data-bs-theme="dark">
        <form className="login-form">
          <h1>Sign In</h1>

          {/* Email */}
          <div class="form-floating">
            <input
              type="email"
              class="form-control  rounded-1 mb-3 border-0 shadow-none"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>

          {/* Password */}
          <div class="form-floating">
            <input
              type="password"
              class="form-control  rounded-1 border-0 shadow-none"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>

          <button type="submit" class="btn btn-danger login-submit-btn  ">
            Sign In
          </button>
          <p className="mt-5">
            New to Netflix?{" "}
            <span>
              <a
                href="/signup"
                className="login-signup"
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Sign up now.{" "}
              </a>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
