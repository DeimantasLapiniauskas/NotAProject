import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { postOne } from "../../helpers/CRUD";
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
  const onSubmit = async (values) => {
    console.log(values);
    try {
      if (users) {
        users.forEach((user) => {
          if (user.email === values.email)
            throw new Error("User already exists");
        });
      }

      const user = await postOne(`users`, { ...values, isLoggedIn: true });

      setUser(user);

      sessionStorage.setItem("user", JSON.stringify(user));

      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
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
        {error && <p>{error}</p>}
      </main>
      <footer id="SignupFooter">
        <span>Already have an account?</span> <a href="/login">Login</a>
      </footer>
    </>
  );
}
export default Signup;
