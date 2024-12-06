import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";

import { postOne } from "../helpers/CRUD";
import { useState } from "react";
import "./signup.css";

function Signup({ setUser, users }) {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // onSubmit function is left as is but without the server interaction.
  // If all good user go to login page
  const onSubmit = (values) => {
    console.log(values);
    navigate("/login");
  };

  return (
    <>
      <header>
        <h1>Sign up</h1>
      </header>
      <main>
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
              type="text"
              placeholder="Password"
              id="PasswdSignup"
              {...register("password", { required: "Can't be empty" })}
            />
            {errors.password && <span>{errors.password.message}</span>}
          </div>
          <div>
            <input
              type="text"
              placeholder="Repeat Password"
              id="RepeatSignup"
              {...register("password", { required: "Can't be empty" })}
            />
            {errors.password && <span>{errors.password.message}</span>}
          </div>
          <button type="submit" id="SignupButton">
            Create an account
          </button>
        </form>
      </main>
      <footer id="SignupFooter">
        <span>Already have an account?</span> <a href="/login">Login</a>
      </footer>
    </>
  );
}
export default Signup;
