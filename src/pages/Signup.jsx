import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { postOne } from "../../helpers/CRUD";
import { useState } from "react";
import "./signup.css";
import { ErrorBoundary } from "react-error-boundary";
import FallbackComponent from "../components/errorHandling/FallbackComponent";
import bcrypt from "bcryptjs";

function Signup({ setUser, users }) {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // If all good user gets navigated to home page (if this function in Home.jsx is enabled )
  const onSubmit = async (values) => {
    try {
      if (users) {
        users.forEach((user) => {
          if (user.email === values.email)
            throw new Error("User already exists");
        });
      }

      const hashedPwd = await bcrypt.hash(values.password, 8);

      // console.log(hashedPwd);

      const user = await postOne(`users`, {
        email: values.email,
        password: hashedPwd,
        isLoggedIn: true,
        isAdmin: false,
      });

      setUser({ id: user.id, isLoggedIn: user.isLoggedIn });

      sessionStorage.setItem(
        "user",
        JSON.stringify({ id: user.id, isLoggedIn: user.isLoggedIn })
      );

      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <ErrorBoundary FallbackComponent={FallbackComponent}>
      <section className="signup">
        <header>
          <img src="/assets/logo.svg" alt="Site logo" />
        </header>
        <main>
          <h1>Sign Up</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-div">
              <input
                type="email"
                placeholder="Email address"
                id="EmailSignup"
                {...register("email", { required: "Can't be empty" })}
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
                id="PasswdSignup"
                {...register("password", { required: "Can't be empty" })}
                className={errors.password && "error"}
              />
              {errors.password && (
                <span className="error-span small-font">
                  {errors.password.message}
                </span>
              )}
            </div>
            <div className="input-div">
              <input
                type="password"
                placeholder="Repeat Password"
                id="RepeatSignup"
                {...register("password-repeat", {
                  required: "Can't be empty",
                  validate: (val) => {
                    if (watch("password") != val) {
                      return "Your passwords do no match";
                    }
                  },
                })}
                className={errors["password-repeat"] && "error"}
              />
              {errors["password-repeat"] && (
                <span className="error-span small-font">
                  {errors["password-repeat"].message}
                </span>
              )}
            </div>
            <button type="submit" id="SignupButton">
              Create an account
            </button>
          </form>
          {error && <p>{error}</p>}
          <p id="SignupFooter">
            <span>Already have an account?</span> <a href="/login">Login</a>
          </p>
        </main>
      </section>
    </ErrorBoundary>
  );
}
export default Signup;
