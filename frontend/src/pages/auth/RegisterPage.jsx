import { useState } from "react";
import { Link } from "react-router-dom";

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className="auth-page">
      <div className="auth-page__layout">
        <div className="auth-page__visual auth-page__visual--signup">
          <div className="auth-page__visual-copy">
            <p className="eyebrow">Create account</p>
            <h1>Join MiniMe for effortless style and checkout.</h1>
            <p>
              Create your account to save favorites, track orders, and get early
              access to new drops.
            </p>
          </div>
        </div>

        <div className="auth-page__panel">
          <div className="auth-card auth-card--auth-panel">
            <p className="eyebrow">New account</p>
            <h1>Create account</h1>
            <p className="auth-page__lead">
              Start your MiniMe experience with a simple and secure signup.
            </p>

            <form className="auth-form" onSubmit={handleSubmit} noValidate>
              <label className="auth-form__field">
                <span>Full name</span>
                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Your name"
                  required
                />
              </label>

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
                  placeholder="Create a password"
                  required
                />
              </label>

              <label className="auth-form__field">
                <span>Confirm password</span>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  placeholder="Confirm your password"
                  required
                />
              </label>

              <button type="submit" className="button button--primary">
                Create account
              </button>
            </form>

            <p className="auth-form__footer">
              Already have an account? <Link to="/login">Sign in</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegisterPage;
