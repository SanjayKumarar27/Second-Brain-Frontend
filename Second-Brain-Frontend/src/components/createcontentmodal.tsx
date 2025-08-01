
import { Crossicon } from "../icons/cross";
import { Button } from "./buton";
import { Input } from "./Inputbox";

//controlled content 
interface Modalprops{
    open:boolean,
    onClose:()=>void;
}
export function CreateContentModal({open ,onClose}:Modalprops){
   

    return<div>
     { open &&<div className="w-screen h-screen bg-slate-400/60  fixed top-0 left-0  flex justify-center">
        <div className="flex flex-col justify-center">
        <div className="bg-white  p-4 rounded">
            <div className="flex justify-end">
                <div onClick={onClose} className="cursor-pointer">
                <Crossicon/>
                </div>
            </div>
            <div>
                <Input placeholder={"Title"} />
                <Input placeholder={"Link"} />
            </div>
            <div className="flex justify-center pt-2">
                
                <Button text="Submit" variant="primary"  size='md' />
            </div>
        </div>
        </div>
        </div>}
    </div>

}

