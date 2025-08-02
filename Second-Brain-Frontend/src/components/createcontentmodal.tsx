
import { useRef, useState } from "react";
import { Crossicon } from "../icons/cross";
import { Button } from "./buton";
import { Input } from "./Inputbox";
import axios from "axios";
import { useContents } from "../hooks/usecontent";

//controlled content 
interface Modalprops{
    open:boolean,
    onClose:()=>void;
}


enum ContentType {
    Youtube="youtube",
    Twitter="tweet"
}
export function CreateContentModal({open ,onClose}:Modalprops){
   const titleref=useRef<HTMLInputElement>(null);
   const linkref=useRef<HTMLInputElement>(null);
   const [type,SetType]=useState(ContentType.Youtube)
   const {refresh}=useContents();

   function addcontent(){
    const title=titleref.current?.value;
    const link=linkref.current?.value;
    axios.post("http://localhost:3000/api/v1/content",{
        title,
        link,
        type
    },{
        headers:{
            "Authorization":localStorage.getItem("token")
        }
    })
    onClose();
    refresh();
   }


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
                <Input ref={titleref} placeholder={"Title"} />
                <Input ref={linkref} placeholder={"Link"} />
            </div>
            <div >
                <h1 className="flex">Type:</h1>
                <div className="flex gap-1 p-4  justify-center">
                <Button text="Youtube" size="sm" onClick={()=>SetType(ContentType.Youtube)} variant={type===ContentType.Youtube ? "primary":"secondary"}/>
                <Button text="Twitter" size="sm" onClick={()=>SetType(ContentType.Twitter)} variant={type===ContentType.Twitter ? "primary":"secondary"}/>
            </div>
            </div>
            <div className="flex justify-center pt-2">
                
                <Button onClick={addcontent} text="Submit" variant="primary"  size='md' />
            </div>
        </div>
        </div>
        </div>}
    </div>

}

