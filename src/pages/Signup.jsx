import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { postOne } from "../../helpers/CRUD";
import { useState } from "react";
import "./signup.css";
import sitelogo from "/assets/logo.svg"
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

      const user = await postOne(`users`, { ...values, isLoggedIn: true });

      setUser(user);

      // sessionStorage.setItem("user", JSON.stringify(user));

      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <header>
        <img src={sitelogo} alt="Site logo" />
      </header>
      <main>
        <h1>Sign up</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              type="email"
              placeholder="Email address"
              id="EmailSignup"
              {...register("email", { required: "Can't be empty" })}
            />
            {errors.email && <span>{errors.email.message}</span>}
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              id="PasswdSignup"
              {...register("password", { required: "Can't be empty" })}
            />
            {errors.password && <span>{errors.password.message}</span>}
          </div>
          <div>
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
            />
            {errors["password-repeat"] && (
              <p>{errors["password-repeat"].message}</p>
            )}
          </div>
          <button type="submit" id="SignupButton">
            Create an account
          </button>
        </form>
        {error && <p>{error}</p>}
      </main>
      <footer id="SignupFooter">
        <span>Already have an account?</span> <a href="/login">Login</a>
      </footer>
    </>
  );
}
export default Signup;
