import type { ReactElement } from "react"

interface ButtonProps{
    variant:"primary"|"secondary"
    size: "sm"|"md"|"lg"
    text:string
    startIcon?:ReactElement
    endIcon?:ReactElement
    onClick:()=>void;
}

const variantStyles={
    "primary":"bg-[#3e38a7] text-white",
    "secondary":"bg-[#e0e7fe] text-[#3e38a7]"
}

const sizeSrtyle={
    "sm":"py-1 px-2",
    "md":"py-2 px-4",
    "lg":"py-4 px-8"
}
const defaultStyles="rounded-md flex items-center";

export const Button=(props:ButtonProps)=>{

    return <button className={`${variantStyles[props.variant]} ${defaultStyles} ${sizeSrtyle[props.size]}`}>
        {props.startIcon ? <div className="pr-2">{props.startIcon}</div>:null}{props.text}{props.endIcon}
        </button>


}