function Login() {
  return (
     <div style={{textAlign:"center"}}>
      <h2>Login</h2>

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" />

      <br /><br />

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" />
    </div>
  );
}

export function Name(){

    return(
        <h1>login succesfully</h1>


    );
}

export default Login;