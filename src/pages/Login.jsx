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

      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <ErrorBoundary FallbackComponent={FallbackComponent}>
      <header>
        <img src="/assets/logo.svg" alt="Site logo" />
      </header>
      <main>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              type="email"
              placeholder="Email address"
              id="EmailLogin"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <span>{errors.email.message}</span>}
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              id="PasswdLogin"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && <span>{errors.password.message}</span>}
          </div>
          <button type="submit" id="LoginButton">
            Login to your account
          </button>
        </form>
        {error && <p>{error}</p>}
      </main>
      <footer id="LoginFooter">
        <span>{`Don't have an account?`}</span>
        <a href="/signup" id="SignUpLink">
          Sign Up
        </a>
      </footer>
    </ErrorBoundary>
  );
}

export default Login;
