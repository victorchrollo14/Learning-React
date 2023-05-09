
// creating and nesting components
function Button() {
    const handleClick = (e) => {
        alert("you click me")
        e.currentTarget.classList.add("Red-btn");
    }

    return <button onClick={handleClick} >I'm a button</button>;
}

function CountHeader() {
    return (
        <h1>Counters that update Seperately</h1>
    )
}

// updating the components and updating the screen



function ButtonCounter({counter:count, setCounter:setCount}) {
    const handleClick = () => {
        setCount(count + 1)

    }

    return (
        <button onClick={handleClick}>clicked {count} Times</button> 
    )
}

function ResetButton({setCounter}) {

    function resetClick(){
        setCounter(0);
    }

    return(
        <button className="reset" onClick={resetClick}>Reset</button>
    )
}



export { Button, ButtonCounter, CountHeader, ResetButton }