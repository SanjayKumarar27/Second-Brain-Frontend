import axios from "axios";
import { Shareicon } from "../icons/share";
import { Binicon } from "../icons/trash";
import { useContents } from "../hooks/usecontent";
import { YoutubeIcon } from "../icons/youtub";
import { TwitterIcon } from "../icons/xicon";

interface Cardprops{
    id:string,
    title:string,
    link:string,
    type:"youtube"|"tweet"
}
export function Card({id,title,link,type}:Cardprops){
    const {refresh}=useContents();
    return <div className="bg-white border-gray-200 border-2 rounded-lg text-black max-w-72 p-3 min-h-48">
       <div className="flex justify-between items-center">
        <div className="flex items-center">
            <div className="p-2 text-gray-600">
         {type==="youtube" ? <YoutubeIcon/> :<TwitterIcon></TwitterIcon>}
            </div>
          {title}
        </div>
        <div className="flex p-2 ">
            <div className="p-2 text-gray-500">
                <a href={link} target="_blank">
            <Shareicon size="md"/>
                </a>
            </div>
            <div className="p-2 text-gray-500 cursor-pointer" onClick={async ()=>{
                await axios.delete("http://localhost:3000/api/v1/content",{
                    headers:{
                        "Authorization":localStorage.getItem("token")
                    },
                    data:{
                        contentid:id
                    }
                }
                
                )
                refresh();
            }}>
            <Binicon size="md" />
            </div>

        </div>
       </div>
       <div className="pt-4">
     { type==="youtube" &&  <div className=""><iframe  className="w-full" src={link.replace("watch","embed").replace("?v=","/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></div>}
       
      {type=== "tweet" && <blockquote className="twitter-tweet ">
  <a href={link.replace("x.com","twitter.com")}></a> 
 
</blockquote>}
       </div>
    </div>
}