import { use, useRef } from "react";
import { Button } from "../components/buton";
import { Input } from "../components/Inputbox";

export function Signup(){
    const usernameref=useRef<any>("");
    const passwordref=useRef<any>("");

    async function signup(){
        const username=usernameref.current?.value;
        const password=passwordref.current?.value;

        await axios.post("http://localhost:3000/api/v1/signup",{
            data:{
                username,
                password
            }
        })

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