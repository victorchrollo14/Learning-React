import { Button } from "./Buttons";


export function Gallery({id, name, artist, description, url, alt, totalImages}) {
    return (
        <>
        <Button name={"Next"}/>
        <h3> {name} by {artist} </h3>
        <p>({id} of {totalImages})</p>
        <Button name = {"show Details"}/>
        <br />
        <img 
        src={url} alt={alt} />
        </>
        
    )
}