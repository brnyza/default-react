import React from 'react'
import { useState } from 'react'

const Button: React.FC<any> = ({children, className, noStyle, hint, ...props}) => {

  const [showHint, setShowHint] = useState(false)

  return (
    <div 
      className={` 
        ${ !noStyle ? 'bg-red-500 text-white w-24 h-10 rounded-full' : ' ' } flex 
        justify-center items-center 
        cursor-pointer relative ${className}`} 
      {...props}
      onMouseOver={() => setShowHint(true)}
      onMouseLeave={() => setShowHint(false)}
      >
        {
          (showHint && hint) &&
          <div className="pointer-events-none absolute -top-10 bg-black text-white px-2 py-1 flex justify-center bg-opacity-50 rounded animate-arrive">
            <div className="absolute -bottom-5 w-5 h-5 overflow-hidden">
              <div className="absolute bg-black bg-opacity-50 w-5 h-5 -top-4  transform rotate-45"  /> 
            </div>
            { hint }
          </div>
        }
          {children}
    </div>
)
}

export {Button}