import { Link, useNavigate } from "react-router-dom";
import signupLogo from "../../assets/logo.png";
import "./signup.css";

function SignUp() {
  const navigate = useNavigate();
  const error = false;
  return (
    <div className="signup-page">
      <div className="signup-nav">
        <img className="signup-logo" src={signupLogo} alt=""></img>

        <div className="ms-auto me-5">
          <button
            type="button"
            class="btn btn-danger"
            onClick={() => {
              navigate("/login");
            }}
          >
            Sign in
          </button>
        </div>
      </div>
      <div className="signup-content">
        <h1>The biggest Indian hits. The best Indian stories.</h1>
        <h1>All streaming here.</h1>
        <p className="mt-3">Watch anywhere. Cancel anytime</p>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <form className="signup-form " data-bs-theme="dark">
          {/* email */}
          <div class="form-floating signup-form-floating ">
            <input
              type="email"
              class="form-control signup-blur-bg rounded-0 rounded-start"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>

          {/* password */}
          <div class="form-floating signup-form-floating ">
            <input
              type="password"
              class="form-control signup-blur-bg rounded-0 rounded-end border-start-0"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>

          <button type="submit" class="btn btn-danger signup-submit-btn  ms-2">
            Get Started &nbsp;&nbsp;&nbsp;❯
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
