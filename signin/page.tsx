'use client'

import axios from "axios";
import { useState } from "react"

export default function Signin() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function handleSignin(event: { preventDefault: () => void; }){
        event.preventDefault();
        try {
            await axios.post("http://localhost:4000/signin", {
                email,
                password
            }, {withCredentials : true})
            alert("User is loged in");
        } catch (error) {
            console.log(error + "Somthing went wrong during signup")
        }
    }

    return(
        <div>
            <form onSubmit={handleSignin} className="flex flex-col w-[300px] h-[650px] border rounded-xl">
                <h1>Sign in</h1>
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
                <button>Signin</button>
            </form>
        </div>
    )
}