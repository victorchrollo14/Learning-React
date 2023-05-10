
export function NextButton({Index, setIndex, totalImages}){

    function Next() {
        Index !== totalImages? setIndex(Index + 1): setIndex(0)
    }

    return (
        <button onClick={Next}>Next</button>
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