export function Item( {name, isPacked} ) {
    if(isPacked){
        return <li>{name}  ✔</li>
    }
    return (
       <li> { name } </li>
    ) 
}

// short circuiting syntax
export function NewItem({name, isPacked}){
    return <li>{name} {isPacked && '✔'} </li>
}

// ternary operator syntax
export function Item2( {name, isPacked} ) {
    return (
        <li>{isPacked ? (name + "✔"): (name)}</li>
    )
}