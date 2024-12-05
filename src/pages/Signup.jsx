function Signup () {
    return <>
    <h1>Sign up</h1>
    <input type="email" placeholder="email address" id="EmailSignup"/>
    <input type="text" placeholder="Password" id="PasswdSignup"/>
    <input type="text" placeholder="Repeat Password" id="RepeatSignup"/>
    <button id="SignupButton">Create an account</button>
    <footer id="SignupFooter">Already have an account? <a href="localhost:5174/login">Login</a></footer>
    </>
}
export default Signup