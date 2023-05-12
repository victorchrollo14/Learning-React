
// passing event handlers to the child
export function Button({onClick, children}){
    return (
        <button onClick={onClick}>{children}</button>
    )
}

export function NextButton({Index, setIndex, totalImages}){

    function Next() {
        Index !== totalImages? setIndex(Index + 1): setIndex(0)
    }

    return (
       <Button onClick={Next}>Next</Button>
    )
}

export function MoreButton({ShowMore, setShowMore}){
    function changeShow(e) {
        let crnt = e.currentTarget.innerText;
        crnt === "Show Details" ? setShowMore(true): setShowMore(false)
    }

    return (
      <button onClick={changeShow}>{ShowMore ? "Hide Details": "Show Details"}</button>
    )
}

