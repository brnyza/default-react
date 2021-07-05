import React, { InputHTMLAttributes, useState } from "react"
import { MdAttachFile } from 'react-icons/md'
import { useEffect } from "react"
import { useRef } from "react"
import InputMask from "react-input-mask"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string
    type: string
    label?: string
    url?: string
    defaultValue?: string
    mask?: string
}

const Input: React.FC<InputProps> = ({ name, type, label, url, defaultValue, mask, ...props }) => {
    const [focused, setFocused] = useState(false)
    const [value, setValue] = useState('')
    let refValue = useRef<any>()

    function handleChange(target: any) {
        setValue(target.value)
    }

    useEffect(() => {
       if(url) {
       }
    }, [props, url])
    
    useEffect(() => {
        if(refValue.current.type === 'file' || refValue.current.type === 'date') return setValue(`${defaultValue}`)
        if(defaultValue) {
            refValue.current.value = defaultValue 
        }
    }, [defaultValue])

    useEffect(() => {
        if(!refValue) return
        if(refValue.current.value) {
            setFocused(true)
        }
    },[refValue?.current?.value])
   
    return(
        <div 
            className={`
                relative
                my-6 w-full
            `}>
            <div
                className={`
                    absolute
                    bottom-0
                    w-full
                    border-b-2
                    border-gray-300
                    transition-all 
                    ${ (type === 'hidden') && 'hidden'}
                `}
            />
            <div 
                className={`
                    absolute
                    bottom-0
                    left-20
                    w-0
                    border-b-2
                    z-100
                    border-blue-500
                    transition-all
                    ${ (type === 'hidden') && 'hidden'}
                    ${ (focused || url ) && 'w-full -left-px'}
                    ${ (defaultValue && refValue?.current?.type === 'file') && 'w-full -left-px'}
                `}
            />
            <p 
                className={`
                    ${ (type === 'hidden') && 'hidden'}
                    ${ (focused || type === 'file' || type === 'date') ? 'bottom-11 text-sm' : 'bottom-3 text-lg'}
                    absolute capitalize transition-all z-0
                `}
            >{ (label) ? label : name}</p>
            <label htmlFor={name}>
                { (type === 'file') 
                &&
                    <>
                        <div className="py-2 flex items-center">
                            <div 
                                className="
                                    cursor-pointer
                                    mr-2
                                    rounded-lg
                                    font-bold
                                    text-gray-800
                                    text-xs
                            "> <MdAttachFile className="text-xl" /> </div>
                            <p className="truncate cursor-pointer ">
                                { (url) && `${url}`}
                                { (!url) && (
                                    <>{(value !== 'undefined') ? `${value}` : 'Nenhuma imagem selecionada' }</>
                                )}
                            </p>
                        </div>
                        <input
                            className="hidden"
                            id={name}
                            type={type}
                            ref={refValue}
                            onChange={ ({ target}) =>  handleChange(target)}
                            name={name}
                        />
                    </>
                }
                { 
                    (!mask && type !== 'file') &&   
                    <input 
                        ref={refValue}
                        onFocus={
                            () => setFocused(true)
                        } 
                        onBlur={
                            () => {
                                if(refValue.current.value === '') {
                                    setFocused(false)
                                }
                            }
                        }
                        className="
                            outline-none 
                            relative 
                            bg-transparent	
                            w-full 
                            border-0
                            text-md
                            py-2
                            pl-2
                            z-1
                        " 
                        type={type} 
                        name={name}
                        />
                }

                {
                    mask &&
                    <>
                        <InputMask className="
                                outline-none 
                                relative 
                                bg-transparent	
                                w-full 
                                border-0
                                text-md
                                py-2
                                pl-2
                            "   
                            mask={mask} 
                            onFocus={
                                () => setFocused(true)
                            } 
                            onBlur={
                                () => {
                                    if(refValue.current.value === '') {
                                        setFocused(false)
                                    }
                                }
                            }
                            name={name} 
                            ref={refValue}
                           />
                    </>
                }
            </label>
        </div>
    )
}

export default Input