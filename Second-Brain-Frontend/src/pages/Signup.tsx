import { useRef } from "react";
import { Button } from "../components/buton";
import { Input } from "../components/Inputbox";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Signup(){
    const usernameref=useRef<HTMLInputElement>(null);
    const passwordref=useRef<HTMLInputElement>(null);
    const navigate=useNavigate();

    async function signup(){
        const username=usernameref.current?.value;
        const password=passwordref.current?.value;

        await axios.post("http://localhost:3000/api/v1/signup",{
                username,
                password
        })
        navigate("/signin")
        alert("You have signed up"); 

    }

    return <div className="h-screen w-screen bg-gray-300 flex justify-center items-center">
        <div className="bg-white rounded-xl min-w-48 p-8">
            <Input ref={usernameref} placeholder="Username"/>
            <Input ref={passwordref} placeholder="Password"/>
            <div className="flex justify-center pt-3">
            <Button text="Signup" size="md" variant="primary" fullwidith={true} onClick={signup}/>
        </div>
        </div>
    </div>
}