import { useId } from "react"

const Input = ({label,type="text",className="",ref,...props}:any) => {
    const id = useId
  return (
    <div className="w-full">
        {label && <label htmlFor={String(id)} className="inline-block mb-1 pl-1" />}
        <input type={type} className={`w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 placeholder-gray-400 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 ${className}`} ref={ref} id={id} {...props}  />
    </div>
  )
}

export default Input