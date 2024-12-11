import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { updateOne } from "../../helpers/CRUD";
import "./login.css";
import { ErrorBoundary } from "react-error-boundary";
import FallbackComponent from "../components/errorHandling/FallbackComponent";
function Login({ users, setUser }) {
  let navigate = useNavigate();
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // onSubmit function is left as is but without the server interaction.
  const onSubmit = async (values) => {
    try {
      const user = users.find((user) => user.email === values.email);

      if (!user) throw new Error(`User doesn't exist. Please sign up`);

      if (user.password !== values.password)
        throw new Error("Wrong email or password");

      const updatedUser = await updateOne(`users`, user.id, {
        isLoggedIn: true,
      });

      setUser(updatedUser);

      sessionStorage.setItem("user", JSON.stringify(user));

      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <ErrorBoundary FallbackComponent={FallbackComponent}>
      <section className="login">
        <header>
          <img src="/assets/logo.svg" alt="Site logo" />
        </header>
        <main>
          <h1>Login</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-div">
              <input
                type="email"
                placeholder="Email address"
                id="EmailLogin"
                {...register("email", { required: "Email is required" })}
                className={errors.email && "error"}
              />
              {errors.email && (
                <span className="error-span small-font">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="input-div">
              <input
                type="password"
                placeholder="Password"
                id="PasswdLogin"
                {...register("password", { required: "Password is required" })}
                className={errors.password && "error"}
              />
              {errors.password && (
                <span className="error-span small-font">
                  {errors.password.message}
                </span>
              )}
            </div>
            <button type="submit" id="LoginButton">
              Login to your account
            </button>
          </form>
          {error && <p>{error}</p>}
          <p id="LoginFooter">
            <span>{`Don't have an account?`}</span>
            <a href="/signup" id="SignUpLink">
              Sign Up
            </a>
          </p>
        </main>
      </section>
    </ErrorBoundary>
  );
}

export default Login;
