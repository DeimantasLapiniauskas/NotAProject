function Signup () {
    return <>
    <h1>Sign up</h1>
    <input type="email" placeholder="email address" id="EmailSignup"/>
    <input type="text" placeholder="Password" id="PasswdSignup"/>
    <input type="text" placeholder="Repeat Password" id="RepeatSignup"/>
    <button id="SignupButton">Create an account</button>
    <footer id="SignupFooter"><span>Already have an account?</span> <a href="localhost:5173/login">Login</a></footer>
    </>
}
export default Signup