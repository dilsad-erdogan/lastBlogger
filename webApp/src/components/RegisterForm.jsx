import { useState } from "react";

const RegisterForm = () => {
    const [name, setName] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 
  
    return (
        <div className="p-5">
            <h1 className="font-bold text-4xl text-blue-500 dark:text-blue-300" style={{ fontFamily: "'Lucida Handwriting', cursive" }}>Register</h1>

            {/* Form */}
            <form className="flex flex-col gap-5 w-full mb-5 mt-5">
                <input type="text" className="bg-blue-100 dark:bg-blue-900 border border-black dark:border-white text-lg rounded-lg block w-full p-2.5" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input type="email" className="bg-blue-100 dark:bg-blue-900 border border-black dark:border-white text-lg rounded-lg block w-full p-2.5" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" className="bg-blue-100 dark:bg-blue-900 border border-black dark:border-white text-lg rounded-lg block w-full p-2.5" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button disabled={!email || !password} type="submit" className="text-white bg-blue-500 hover:bg-blue-800 disabled:bg-blue-300 font-medium rounded-lg w-full text-sm px-5 py-2.5 me-2 mb-2">Log in</button>
            </form>
        </div>
    )
}

export default RegisterForm