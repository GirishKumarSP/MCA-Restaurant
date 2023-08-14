import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Signin(props) {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })
    const navigate = useNavigate();

    const onchange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const hanleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password } = credentials;
        const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, password }),
        });
        const json = await response.json();
        if (json.success) {
            //save the auth token and redirect
            localStorage.setItem("token", json.authToken)
            navigate("/")
            props.showAlert("Account Created Successfully", "green")
        } else {
            props.showAlert("Invalid Credentials", "red")
        }
    }

    return (
        <div className='bg-gray-700 h-screen flex items-center justify-center'>
            <div className='bg-gray-700 w-6/12'>
                <form className='border-black border-2 rounded-3xl p-10' onSubmit={hanleSubmit}>
                    <div className="flex items-center justify-center underline">
                        <h1 className='text-3xl font-bold'>Signin Form</h1>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="name" className="block mb-2 text-2xl font-bold text-black">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name='name'
                            value={credentials.Name}
                            onChange={onchange}
                            className="bg-gray-700 border border-black text-black text-xl rounded-lg outline-none block w-full p-2.5"
                            required
                        />
                    </div>
                    <div className="mb-6">
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
                            minLength={5}
                            value={credentials.password}
                            onChange={onchange}
                            className="bg-gray-700 border border-black text-black text-xl rounded-lg outline-none block w-full p-2.5"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="cpassword" className="block mb-2 text-2xl font-bold text-black">
                            Confirm password
                        </label>
                        <input
                            type="password"
                            id="cpassword"
                            name='cpassword'
                            minLength={5}
                            value={credentials.cpassword}
                            onChange={onchange}
                            className="bg-gray-700 border border-black text-black text-xl rounded-lg outline-none block w-full p-2.5"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Signin