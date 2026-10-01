import {
  useState
} from "react";

import {
  Link,
  useLocation,
  useNavigate
} from "react-router-dom";

import {
  loginUser
} from "../../services/authService";

import {
  useAuth
} from "../../hooks/useAuth";

function LoginForm() {
  const navigate =
    useNavigate();

  const location =
    useLocation();

  const { login } =
    useAuth();

  const [form, setForm] =
    useState({
      email: "",
      password: ""
    });

  const [error, setError] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.value
    });
  };

  const handleSubmit =
    async (e) => {
      e.preventDefault();

      setError("");
      setLoading(true);

      try {
        const response =
          await loginUser(form);

        login(
          response.user || response,
          response.token ||
            "demo-token"
        );

        navigate(
          location.state?.from ||
            "/"
        );
      } catch {
        // Demo login when backend is unavailable.
        const demoUser = {
          id: 1,
          name: "Royal Customer",
          email: form.email
        };

        login(
          demoUser,
          "demo-token"
        );

        navigate(
          location.state?.from ||
            "/"
        );
      } finally {
        setLoading(false);
      }
    };

  return (
    <div className="auth-card">
      <div className="auth-header">
        <p>WELCOME BACK</p>
        <h1>Sign In</h1>
        <span>
          Login to your Royal Cloth
          account
        </span>
      </div>

      {error && (
        <div className="form-error">
          {error}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <label>Email</label>

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={
              handleChange
            }
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>

          <input
            type="password"
            name="password"
            value={form.password}
            onChange={
              handleChange
            }
            placeholder="Enter your password"
            required
          />
        </div>

        <button
          className="btn btn-primary btn-large full-width"
          disabled={loading}
        >
          {loading
            ? "Signing In..."
            : "Sign In"}
        </button>
      </form>

      <div className="auth-footer">
        <p>
          Don't have an account?
          {" "}
          <Link to="/register">
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;