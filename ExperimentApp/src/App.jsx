import "./style.css";
import { useState } from "react";

import { UserProfile } from "./UserProfile";
import { Button, ButtonCounter, CountHeader, ResetButton } from "./Button";
import { ListItems } from "./ListItems"
import { Header } from "./Headers";


function App() {

  const [counter, setCounter] = useState(0)
  

  return (
    <>
      <Header heading={"Hi, React devs"}/>
      <Button />
      <UserProfile />
      <Header heading={"Book Library"}/>
      <ListItems />
      <Header heading={"Counters that update"}/>
      <ButtonCounter counter={counter} setCounter = {setCounter}/>
      <ButtonCounter counter={counter} setCounter = {setCounter}/>
      <ResetButton counter = {counter} setCounter = {setCounter}/>
      <Header />
    </>
  );
}

export default App;
