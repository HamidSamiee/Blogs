import React from 'react'

const RHF_TextField = ({
    type="text",
    label,
    name,
    dir="rtl",
    isRequired,
    register,
    errors,
    validationSchima={},
    className,
    ...rest
}) => {

    const errorMessages = errors?.[name];
    const hasError = !!(errors && errorMessages);

  return (
    <div className={`textField relative ${hasError ? "textField--invalid" : ""}`}>
       <label htmlFor="name" className={`mb-2 block text-secondary-700`}>
            {label}
            {isRequired && <span className='text-error'>*</span>}
       </label>
       <input 
            autoComplete='off'
            type={type}
            name={name}
            id={name}
            dir={dir}
            {...register(name,validationSchima)}
            {...rest}
            className={`
                textField__input ${
                    dir === "ltr" ? "text-left" : "text-right"
                }
            ${className}`} 
        />
        {
            errors && errors[name] && (
                <span className="mt-2 text-red-600 block text-xs">
                    {errors[name]?.message}
                </span>
            )
        }
    </div>
  )
}

export default RHF_TextField
