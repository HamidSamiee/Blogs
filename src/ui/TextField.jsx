import React from 'react'

const TextField = ({
    type="text",
    label,
    name,
    value,
    dir="rtl",
    onChange,
    isRequired,
    className
}) => {
  return (
    <div className='textField'>
       <label htmlFor="name" className="text-secondary-600 text-sm">
            {label}
            {isRequired && <span className='text-error'>*</span>}
       </label>
       <input 
            type={type}
            name={name}
            id={name}
            dir={dir}
            value={value}
            onChange={onChange}
            className={`
                textField__input ${
                    dir === "ltr" ? "text-left" : "text-right"
                } ${className}
            `} 
        />
    </div>
  )
}

export default TextField