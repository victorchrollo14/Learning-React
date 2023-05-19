import {useState} from "react"

export function EditProfile() {
  const [firstName, setFirstName] = useState("Jane")
  const [lastName, setLastName] = useState("Jacobs")
  const [fnameIsSeen, setFnameIsSeen] = useState(true)
  const [lnameIsSeen, setLnameIsSeen] = useState(true)
  const [editMode, setEditMode] = useState(false)

  let fullName = `${firstName} ${lastName}`
  function handleSubmit(e) {
    e.preventDefault();
    let string = e.target.innerText

    if(string.includes("Edit Profile")){
        setFnameIsSeen(false)
        setLnameIsSeen(false)
        setEditMode(true)
    }
    else {
        setFnameIsSeen(true)
        setLnameIsSeen(true)
        setEditMode(false)
    }
    
    
  }
  function handleFname(e){
      setFirstName(e.target.value)
  }

  function handleLname(e) {
    setLastName(e.target.value)
  }
  
  return (
    <form onSubmit={handleSubmit} className="flex">
      <label >
        First name:{' '}
        {fnameIsSeen?<b>{firstName}</b>:null}
        {fnameIsSeen? null: <input value={firstName} onChange={handleFname}/>}
      </label>
      <label>
        Last name:{' '}
        {lnameIsSeen?<b>{lastName}</b>:null}
        {lnameIsSeen? null: <input value={lastName} onChange={handleLname}/>}
      </label>
      <button type="submit" >
        {editMode? "Save Profile": "Edit Profile"}
      </button>
      <p><i>Hello, {fullName}!</i></p>
    </form>
  );
}