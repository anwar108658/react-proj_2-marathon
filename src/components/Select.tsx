import React, { useId } from 'react'

const Select = ({options=[],label,className,ref,...props}:any) => {
    const id = useId()
    return (
        <div>
            {label && <label htmlFor={id} className=''></label>}
            <select {...props} id={id} ref={ref} className={`w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}>
                {options?.map((item:any) => (
                    <option value={item} key={item}>
                        {item}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Select