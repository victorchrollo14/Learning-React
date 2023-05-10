import "./App.css";
import { useState } from "react";


import { Gallery } from "./Gallery";
import { sculptureList } from "./Utils/data";
import img1 from "./assets/img1.jpg"

function App() {
  const [Index, setIndex] = useState(0);
  const [ShowMore, setShowMore] = useState(false);
  
  const totalImages = sculptureList.length;
  const sculptor = sculptureList[Index];

  return (
    <>
      <Gallery
        id={Index + 1}
        name={sculptor.name}
        artist={sculptor.artist}
        description={sculptor.description}
        url={img1}
        alt={sculptor.alt}
        totalImages={totalImages}
      />
    </>
  );
}

export default App;
