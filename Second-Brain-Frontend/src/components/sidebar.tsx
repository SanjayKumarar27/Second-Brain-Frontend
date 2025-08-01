import { BrainIcon } from "../icons/brain";
import { TwitterIcon } from "../icons/xicon";
import { YoutubeIcon } from "../icons/youtub";
import { SideBarItem } from "./sidebaritem";

export function Sidebar(){
    return <div className="h-screen bg-white w-68 fixed top-0 left-0 pl-4">
        <h1 className="flex text-2xl items-center pt-8">
            <div className="pr-1 text-[#5046e4]">{<BrainIcon/>}</div>
            Second Brain</h1>
        <div className="pt-8 pl-4"> 
        <SideBarItem text="Tweets" icon={<TwitterIcon/>}/>
        <SideBarItem text="Vedios" icon={<YoutubeIcon/>}/>
        </div>
    </div>
}