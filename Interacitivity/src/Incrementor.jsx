import { Button } from "./Buttons";
import { useState } from "react";


export function Incrementor() {
  const [number, setNumber] = useState(0);

  function handleClick() {
    // updating the same state multiple times
    setNumber((n) => {
      return n + 1;
    });

    setNumber((n) => {
      return n + 1;
    });

    setNumber((n) => {
      return n + 1;
    });
  }

  return (
    <>
      <h1>{number}</h1>
      <Button onClick={handleClick}>+3</Button>
    </>
  );
}
