export function CustomField({input,label,type,placeholder}) {
    return (
        <div>
            <label>{label}</label>
            <input {...input} type={type} placeholder={placeholder}/>
        </div>
    )
}
