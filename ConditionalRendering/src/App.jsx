import { Item, Item2, NewItem } from "./Item";
import { BadCup, GoodCup } from "./Pure";

function App() {
  return (
    <>
     <section className="list-section" style={{margin:"10px"}}>
     <h1>Sally's Ride Packaging List</h1>
      <ul>
        <Item name={"space Suit"} isPacked={true} />
        <Item name={"spider monkey"} isPacked={true}/>
        <Item name={"Tom Ham "} isPacked={false}/>
        <NewItem name={"Bottle Cap"} isPacked={true} />
        <NewItem name={"ben 10"} isPacked={ false} />
        <Item2 name={"monkey D Luffy"} isPacked={false} />
        <Item2 name={"roronoa Zoro"} isPacked={true} />
        <br />
      </ul>
     </section>
     <section className="cup-section">
         <BadCup />
         <BadCup />
         <GoodCup guest={0}/>
         <GoodCup guest={1}/>
     </section>
    </>
  );
}

export default App;
