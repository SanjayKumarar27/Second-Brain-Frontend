import axios from "axios";
import { useEffect, useState } from "react";

export function useContents(){

    const [contents,Setcontents]=useState([]);

    useEffect(()=>{
        const interval=setInterval(()=>{
            refresh()
        },10*10000);

        return ()=>{
            clearInterval(interval);
        }
        
    },[])
    
    async function refresh(){
        const response=await axios.get("http://localhost:3000/api/v1/content",{
        headers:{
            "Authorization":localStorage.getItem("token")
        }
        });
        Setcontents(response.data.content);
    }
    return {contents,refresh};

}