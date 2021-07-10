import React from 'react'
import { useState } from 'react'
import { MdAdd } from 'react-icons/md'

const Button: React.FC<any> = ({children, className, noStyle, hint, ...props}) => {

  const [showHint, setShowHint] = useState(false)

  return (
    <div 
      className={` 
        ${ !noStyle ? 'bg-red-500 text-white px-4 h-10 rounded' : ' ' } flex 
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

const BtnNovo: React.FC<any> = (props) => {
  return (
    <Button className="bg-green-500 flex gap-2 items-center justify-center" {...props}>
      Novo
      <MdAdd className="text-xl"/>
    </Button>
  )
}

export {Button, BtnNovo}
