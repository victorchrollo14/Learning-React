export function Description({description, ShowMore}) {
    return (
        <p>{ShowMore && description}</p>
    )
}