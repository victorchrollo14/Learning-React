import { useState } from "react";

export function EditProfile() {
  const [firstName, setFirstName] = useState("Jane");
  const [lastName, setLastName] = useState("Jacobs");
  const [editMode, setEditMode] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    let string = e.target.innerText;

    string.includes("Edit Profile") ? setEditMode(true) : setEditMode(false);
  }

  function handleFname(e) {
    setFirstName(e.target.value);
  }

  function handleLname(e) {
    setLastName(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit} className="flex">
      <label>
        First name: {editMode ? null : <b>{firstName}</b>}
        {editMode ? <input value={firstName} onChange={handleFname} /> : null}
      </label>
      <label>
        Last name: {editMode ? null : <b>{lastName}</b>}
        {editMode ? <input value={lastName} onChange={handleLname} /> : null}
      </label>
      <button type="submit">{editMode ? "Save " : "Edit "} Profile</button>
      <p>
        <i>
          Hello, {firstName} {lastName}!
        </i>
      </p>
    </form>
  );
}
