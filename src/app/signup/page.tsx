'use client'

import axios from "axios";
import { useState } from "react"

export default function Signup() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function handleSignup(event: { preventDefault: () => void; }){
        event.preventDefault();
        try {
            await axios.post("http://localhost:4000/signup", {
                firstName,
                lastName,
                email,
                password
            })
        } catch (error) {
            console.log(error + "Somthing went wrong during signup")
        }
    }

    return(
        <div>
            <form onSubmit={handleSignup} className="flex flex-col w-[300px] h-[650px] border rounded-xl">
                <h1>Sign up</h1>
                <input 
                    type="text" 
                    className="w-[150px] h-[30px] border"
                    placeholder="First Name"
                    value={firstName}
                    onChange={ev => setFirstName(ev.target.value)}
                    />
                <input 
                    type="text"
                    className="w-[150px] h-[30px] border"  
                    placeholder="Last Name"
                    value={lastName}
                    onChange={ev => setLastName(ev.target.value)}
                    />
                <input 
                    type="text"
                    className="w-[150px] h-[30px] border"  
                    placeholder="Email"
                    value={email}
                    onChange={ev => setEmail(ev.target.value)}
                    />
                <input 
                    type="text"
                    className="w-[150px] h-[30px] border"  
                    placeholder="Password"
                    value={password}
                    onChange={ev => setPassword(ev.target.value)}
                    />
                <button>Signup</button>
            </form>
        </div>
    )
}