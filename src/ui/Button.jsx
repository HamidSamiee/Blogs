
const btnType={
    primary:"btn--primary",
    secondary:"btn--secondary",
    outline:"btn--outline",
    danger:"btn--danger",
}

const Button = (Props) => {
    const { children , variant="primary" , onClick , className , ...rest }=Props;
  return (
    <button 
        onClick={onClick}
        className={`btn ${btnType[variant]} ${className} `}
        {...rest}
    >
       {children} 
    </button>
  )
}

export default Button