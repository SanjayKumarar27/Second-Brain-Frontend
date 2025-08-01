interface inputprops{
    ref?:any
    placeholder:string
}

export function Input({ref,placeholder}:inputprops){
    return <div>
        <input ref={ref} type="text" placeholder={placeholder} className="px-4 py-2  border-2   border-slate-300 rounded m-2 cursor-pointer" id="" />
    </div>
}