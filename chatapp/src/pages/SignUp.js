import React from "react";

const SignUp = () => {

    return (
        <>
            <h1>Sign Up</h1>
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
            <button type="submit">Sign Up</button>
        </>
    )
};

export default SignUp;