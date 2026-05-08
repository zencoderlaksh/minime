import { useState } from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className="auth-page">
      <div className="auth-page__layout">
        <div className="auth-page__visual">
          <div className="auth-page__visual-copy">
            <p className="eyebrow">Welcome back</p>
            <h1>Sign in and continue your MiniMe journey.</h1>
            <p>
              Access your saved favorites, track orders, and checkout faster
              with a tailored account experience.
            </p>
          </div>
        </div>

        <div className="auth-page__panel">
          <div className="auth-card auth-card--auth-panel">
            <p className="eyebrow">Account</p>
            <h1>Login</h1>
            <p className="auth-page__lead">
              Enter your details to sign in and keep shopping smoothly.
            </p>

            <form className="auth-form" onSubmit={handleSubmit} noValidate>
              <label className="auth-form__field">
                <span>Email address</span>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@example.com"
                  required
                />
              </label>

              <label className="auth-form__field">
                <span>Password</span>
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </label>

              <button type="submit" className="button button--primary">
                Sign in
              </button>
            </form>

            <p className="auth-form__footer">
              New to MiniMe? <Link to="/register">Create an account</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
