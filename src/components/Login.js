import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function Login(props) {
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    const navigate = useNavigate();

    const hanleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password }),
        });
        const json = await response.json();
        if (json.success) {
            //save the auth token and redirect
            localStorage.setItem("token", json.authToken)
            navigate("/")
            props.showAlert("Logged In Successfully", "green")
        } else {
            // alert("Invalid credentials")
            props.showAlert("Invalid Credentials", "red")
        }
    }

    const onchange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }


    return (
        <div className='flex items-center justify-center h-screen bg-gray-700'>
            <div className='w-6/12'>
                <form className='border-black border-2 rounded-3xl p-10' onSubmit={hanleSubmit}>
                    <div className="flex items-center justify-center underline">
                        <h1 className='text-3xl font-bold'>Login Form</h1>
                    </div>
                    <div className="mb-6 ">
                        <label htmlFor="email" className="block mb-2 text-2xl font-bold text-black">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name='email'
                            value={credentials.email}
                            onChange={onchange}
                            className="bg-gray-700 border border-black text-black text-xl rounded-lg outline-none block w-full p-2.5"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-2xl font-bold text-black">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name='password'
                            value={credentials.password}
                            onChange={onchange}
                            className="bg-gray-700 border border-black text-black text-xl rounded-lg outline-none block w-full p-2.5"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login