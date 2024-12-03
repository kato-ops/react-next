import React from "react";

const Login = () => {

    return (
        <>
            <h1>Login</h1>
            <form>
                <div>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" name="email" placeholder="Email"></input>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="password"></input>
                </div>
            </form>
            <button type="submit">Login</button>
        </>
    )
};

export default Login;