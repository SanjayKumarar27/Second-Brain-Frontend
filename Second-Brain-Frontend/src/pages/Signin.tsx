import { Button } from "../components/buton";
import { Input } from "../components/Inputbox";

export function Signin(){
    return <div className="h-screen w-screen bg-gray-300 flex justify-center items-center">
        <div className="bg-white rounded-xl min-w-48 p-8">
            <Input placeholder="Username"/>
            <Input placeholder="Password"/>
            <div className="flex justify-center pt-3">
            <Button text="Signin" size="md" variant="primary" fullwidith={true}/>
        </div>
        </div>
    </div>
}