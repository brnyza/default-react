function formatToMoney(value:number, symbolBeforeDot?: string, symbolAfterDot?: string): string{
    if(!symbolBeforeDot) 
        symbolBeforeDot =  '.'
    if(!symbolAfterDot) 
        symbolAfterDot =  ','
        
    let toString = `${value}`
    let [valueBeforeDot, valueAfterDot]: any = toString.split('.')
    valueBeforeDot = valueBeforeDot.split('')
    valueBeforeDot.forEach( (element:any, index: number) => {
        if(index%3 === 0 && index !== valueBeforeDot.length - 1 && valueBeforeDot.length > 3 ) {
            valueBeforeDot[index] = `${element}${symbolBeforeDot}`
        } 
    })

    valueBeforeDot = valueBeforeDot.join('')
    if (valueAfterDot && valueAfterDot.length < 2 ) 
        valueAfterDot = `${valueAfterDot}0`
    return `${valueBeforeDot}${symbolAfterDot}${valueAfterDot || '00'}`
}

export {formatToMoney}