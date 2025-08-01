import type { ReactElement } from "react"


interface itemprop{
    text:string,
    icon:ReactElement
}
export function SideBarItem({text,icon}:itemprop){
    return <div className="flex items-center text-gray-500 py-2 cursor-pointer ">
        <div className="pr-2 ">
            
        {icon}
        </div>
        <div className="">
        {text}
        </div>
    </div>
}