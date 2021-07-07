import React, { InputHTMLAttributes, useState } from 'react'
import { useEffect } from 'react'

interface Iitem {
    id: number | string
    display: string
    slug: string
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    items: Iitem[]
    label: string
    returnId?: boolean
    defaultValue?: string
}


const Select:React.FC<InputProps> = ({ label, items, name, defaultValue, returnId }) => {

    const [selected, setSelected] = useState(false)

    useEffect(() => {
        if(defaultValue) setSelected(true)
    },[defaultValue])

    function getIdByValue():string {
        let findedId: string = ''
        items.map( item => {
           return Object.entries(item).forEach( ([props, value]) => {
                if(props === defaultValue || value === defaultValue) {
                    return findedId = `${item.id}`
                }
            })
        })
        return findedId
    }

    return (
        <div className="relative my-6 w-full h-10">
            <div
                className="
                    absolute
                    bottom-0
                    w-full
                    border-b-2
                    border-gray-300
                    transition-all 
                "
            />
             <div 
                className={`
                    absolute
                    bottom-0
                    left-20
                    w-0
                    border-b-2
                    border-yellow-500
                    transition-all
                    ${ (selected) && 'w-full -left-px'}
                `}
            />
            <p 
                className={`
                    bottom-11 text-sm
                    absolute capitalize transition-all z-0
                `}
            >{ (label) && label}</p>
            <select 
                name={name}
                onChange={({target}) => (target.value !== '-') ? setSelected(true) : setSelected(false) }
                className="
                    absolute bg-transparent 
                    bottom-0 w-full h-full cursor-pointer"
                defaultValue={returnId ? getIdByValue() : defaultValue}    
                >
                <option>
                    -
                </option>
                {items.map( item => {
                    if(item.display === defaultValue || item.slug === defaultValue) return (
                        <option key={item.slug} value={ returnId ? item.id: item.slug}>
                            {item.display}
                        </option>
                    )
                    return (
                        <option key={item.slug} value={ returnId ? item.id: item.slug}>
                            {item.display}
                        </option>
                    )
                } ) }
            </select>
        </div>
        
    )
}
export { Select }