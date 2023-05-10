import { NextButton, MoreButton } from "./Buttons";
import { Description } from "./Description";
import { sculptureList } from "./data";

import { useState } from "react";


export function Gallery() {

    const [Index, setIndex] = useState(0);
    const [ShowMore, setShowMore] = useState(false);

    const totalImages = sculptureList.length - 1;
    const sculptor = sculptureList[Index];    

    return (
        <>
        <NextButton  Index={Index} setIndex={setIndex} totalImages={totalImages}/>
        <h3> {sculptor.name} by {sculptor.artist} </h3>
        <p>({Index + 1} of {totalImages + 1})</p>
        <MoreButton ShowMore={ShowMore} setShowMore={setShowMore} />
        <br />
        <Description description={sculptor.description} ShowMore={ShowMore}/>
        <img 
        src={sculptor.url} alt={sculptor.alt} />
        </>

        
    )
}