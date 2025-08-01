import type { ReactElement } from "react"

interface ButtonProps{
    variant:"primary"|"secondary"
    size: "sm"|"md"|"lg"
    text:string
    startIcon?:ReactElement
    endIcon?:ReactElement
    onClick?:()=>void;
    fullwidith?:boolean
    loading?:boolean
}

const variantStyles={
    "primary":"bg-[#3e38a7] text-white",
    "secondary":"bg-[#e0e7fe] text-[#3e38a7]"
}

const sizeSrtyle={
    "sm":"py-1 px-2",
    "md":"py-1 px-4",
    "lg":"py-4 px-8"
}
const defaultStyles="rounded-md flex items-center font-light";
const fullwidithStyles=" w-full flex justify-center "

export const Button=(props:ButtonProps)=>{

    return <button onClick={props.onClick} className={`${variantStyles[props.variant]} ${defaultStyles} ${sizeSrtyle[props.size]} ${props.fullwidith && fullwidithStyles}${props.loading?" opacity-40": ""}`}>
        {props.startIcon ? <div className="pr-2">{props.startIcon}</div>:null}{props.text}{props.endIcon}
        </button>


}