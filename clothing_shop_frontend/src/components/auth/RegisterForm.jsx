import {
  useState
} from "react";

import {
  Link,
  useNavigate
} from "react-router-dom";

import {
  registerUser
} from "../../services/authService";

import {
  useAuth
} from "../../hooks/useAuth";

import {
  validateRegisterForm
} from "../../utils/validation";

function RegisterForm() {
  const navigate =
    useNavigate();

  const { login } =
    useAuth();

  const [form, setForm] =
    useState({
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    });

  const [errors, setErrors] =
    useState({});

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

      const validation =
        validateRegisterForm(
          form
        );

      setErrors(validation);

      if (
        Object.keys(validation)
          .length
      ) {
        return;
      }

      try {
        setLoading(true);

        const response =
          await registerUser(
            form
          );

        login(
          response.user || {
            name: form.name,
            email: form.email
          },
          response.token ||
            "demo-token"
        );

        navigate("/");
      } catch {
        login(
          {
            id: Date.now(),
            name: form.name,
            email: form.email
          },
          "demo-token"
        );

        navigate("/");
      } finally {
        setLoading(false);
      }
    };

  return (
    <div className="auth-card">
      <div className="auth-header">
        <p>JOIN ROYAL CLOTH</p>

        <h1>Create Account</h1>

        <span>
          Create your account and
          start shopping.
        </span>
      </div>

      <form
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <label>Full Name</label>

          <input
            name="name"
            value={form.name}
            onChange={
              handleChange
            }
            placeholder="Enter your name"
          />

          {errors.name && (
            <small className="field-error">
              {errors.name}
            </small>
          )}
        </div>

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
          />

          {errors.email && (
            <small className="field-error">
              {errors.email}
            </small>
          )}
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
            placeholder="Create password"
          />

          {errors.password && (
            <small className="field-error">
              {errors.password}
            </small>
          )}
        </div>

        <div className="form-group">
          <label>
            Confirm Password
          </label>

          <input
            type="password"
            name="confirmPassword"
            value={
              form.confirmPassword
            }
            onChange={
              handleChange
            }
            placeholder="Confirm password"
          />

          {errors.confirmPassword && (
            <small className="field-error">
              {errors.confirmPassword}
            </small>
          )}
        </div>

        <button
          className="btn btn-primary btn-large full-width"
          disabled={loading}
        >
          {loading
            ? "Creating..."
            : "Create Account"}
        </button>
      </form>

      <div className="auth-footer">
        <p>
          Already have an account?
          {" "}
          <Link to="/login">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterForm;