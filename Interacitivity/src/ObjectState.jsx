import { useState } from "react";
// make use of Immer to easy up the syntax for nested Objects

export function ObjectState() {
  const data = {
    firstname: "victor",
    lastname: "Immanuel",
    email: "chrollolucilfer1402",
    artwork: {
      title: "black dog",
      city: "bangalore",
      state: "Karnataka",
    },
  };
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [UserData, setUserData] = useState(data);

  function handleFirstChange(e) {
    setUserData({
      // copying all the contents
      ...UserData,
      firstname: e.target.value,
    });
  }

  function handleSecondChange(e) {
    setUserData({
      ...UserData,
      lastname: e.target.value,
    });
  }

  function handleEmailChange(e) {
    // single level object destructuring
    setUserData({
      ...UserData,
      email: e.target.value,
    });
  }

  function handleCityChange(e) {
    // destructuring nested objects
    setUserData({
      ...UserData,
      artwork: {
        ...UserData.artwork,
        city: e.target.value,
      },
    });
  }

  function handleTitleChange(e) {
    setUserData({
      ...UserData,
      artwork: {
        ...UserData.artwork,
        title: e.target.value,
      },
    });
  }

  return (
    <>
      <form action="">
        <label htmlFor="firstname">firstname</label>
        <input
          type="text"
          className="name"
          value={UserData.firstname}
          onChange={handleFirstChange}
        />
        <br />
        <label htmlFor="lastname">lastname</label>
        <input
          type="text"
          name="lastname"
          id=""
          value={UserData.lastname}
          onChange={handleSecondChange}
        />
        <br />
        <label htmlFor="email">email</label>
        <input
          type="email"
          name="email"
          id=""
          value={UserData.email}
          onChange={handleEmailChange}
        />
        <br />
        <label htmlFor="title">title</label>
        <input
          type="text"
          name="email"
          id=""
          value={UserData.artwork.title}
          onChange={handleTitleChange}
        />
        <br />
        <label htmlFor="city">city</label>
        <input
          type="text"
          name="email"
          id=""
          value={UserData.artwork.city}
          onChange={handleCityChange}
        />
      </form>
      <p>
        {UserData.firstname} {UserData.lastname} {UserData.email}{" "}
      </p>
    </>
  );
}
