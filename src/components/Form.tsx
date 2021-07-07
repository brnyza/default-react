const Form:React.FC<any> = (props) => {
    return (
        <form {...props}></form>
    )
}

type serializeReturn = {
    fields: any
    emptyFields: string[]
    form: FormData
}

const serialize = (event: any): serializeReturn => {
    event.preventDefault()
    const form = new FormData(event.target)

    let fields:any = Object.fromEntries(form.entries())
    const emptyFields: string[] = []
    for (var prop in fields) {
        let value 
        if(typeof fields[prop] === 'string'){
            value = fields[prop].replace(/[&/\\#,+()$~%.'"*?<>{}]/g, '')
            fields[prop] = value
        }
        if(typeof fields[prop] === 'object') {
            if(fields[prop].name === "") {
                emptyFields.push(prop)
            }                
        }

        if(prop === 'cpf' || prop === 'cep') {
            fields[prop] = value.replace('-', '')
        }

        if (!value && typeof fields[prop] !== 'object') emptyFields.push(prop)
        if (value === '-' && typeof fields[prop] !== 'object') emptyFields.push(prop)
    }
    return { fields, emptyFields, form }
}

export { Form, serialize }