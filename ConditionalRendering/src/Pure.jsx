let guest = 0;
export function BadCup(){
    // Bad: Changing a pre-existing value;
    guest++
    return <h2>Tea cup for guest No #{guest}</h2>
}


// pureFunction
// * It minds its own business. It does not change any objects or variables that existed before it was called.
// * Same inputs, same output. Given the same inputs, a pure function should always return the same result.

export function GoodCup({guest}){
    // pass guest value as props
    return <h2>Tea cup of guest No #{guest}</h2>
}