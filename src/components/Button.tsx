import React from 'react'

const Button: React.FC<any> = ({children, className, ...props}) => {
  return (
    <div 
      className={`
        w-24 h-11 rounded-xl 
        bg-red-500 text-white flex 
        justify-center items-center 
        cursor-pointer ${className}`} 
      {...props}
      >
        {children}
    </div>
)
}

export default Button