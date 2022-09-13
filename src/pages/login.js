import { useState } from "react";
import '../styles/login.css'
import { Link } from 'react-router-dom';

const Login = () => {
 
    // SET STATES
    const [userDetails, setUserDetails] = useState({
        email: '',
        password: ''
    })

    const [err, setError] = useState('')
    const { email, password } = userDetails


    // // HANDLE REQUESTS 
    // const handleSubmit = async (e) => {

    //     e.preventDefault()
    //     try {
           
    //         const data = await login(userDetails);

    //         console.log(data)
    //         if (!data.status) setError(data.error)
    //         else {
                
    //             setUser(data.user);
    //             setRedirect(true)
    //             console.log(user,'from login')
    //         }
    //     }

    //     catch (err) {
    //         console.log(err)
    //         setError(err)
    //     }
    // }

    // FRONTEND CODE
    return (
        <>
           <main className="ls-container">
                <div className="login">
                    <h2 className="login__heading">Login to your account</h2>

                    {/* FORM BEGINS HERE */}
                    <form className="login__form">

                        <div className="login__input">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={email}
                                onChange={(e) =>
                                    setUserDetails({ ...userDetails, email: e.target.value })
                                }
                                required />
                        </div>

                        <div className="login__input">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                value={password}
                                onChange={(e) =>
                                    setUserDetails({ ...userDetails, password: e.target.value })
                                }
                                required />
                        </div>

                        {/* display error */}

                        <button
                            type="submit"
                            className="btn btn_submit">
                            Login
                        </button>
                    </form>

                    <p className="login__error">  {err} </p>

                    <p className="login__text">Do not have an account? &#160;
                        <Link to="/signup" className="login__link">Create One</Link>
                    </p>
                </div>

                <img src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" className="login__image" />
            </main>
        </>
    );
}

export default Login;