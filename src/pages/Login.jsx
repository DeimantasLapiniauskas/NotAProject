function Login() {
  return (
    <>
      <h1>Login</h1>
      <div>
        <input type="text" placeholder="Email address" id="EmailLogin" />
        <input type="text" placeholder="Password" id="PasswdLogin" />
      </div>
      <button id="LoginButton">Login to your account</button>
      <footer id="LoginFooter">
        <span>Don&apos;t have an account?</span>
        <a href="/signup" id="SignUpLink">
          {" "}
          Sign Up
        </a>
      </footer>
    </>
  );
}
export default Login;
