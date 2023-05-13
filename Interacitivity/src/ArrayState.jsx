import { useState } from "react";

export function ArrayState() {
  const [name, setName] = useState(" ");
  const [artists, setArtists] = useState([]);

  const addArtist = () => {
    setArtists([...artists, { id: crypto.randomUUID(), name: name }]);
  };

  return (
    <>
      <h1>Inspiring Sculptors</h1>
      <input
        type="text"
        name="name"
        id=""
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={addArtist}>Add</button>
      <ul>
        {artists.map((artist) => (
              <li
                key={artist.id}
                style={{ display: "flex", flexDirection: "row" }}
              >
                {artist.name} {artist.id}
                <button
                  onClick={() =>
                    setArtists(artists.filter((a) => a.id !== artist.id))
                  }
                >
                  delete
                </button>
              </li>
        ))}
      </ul>
    </>
  );
}
