import { Link } from "react-router-dom"
import "./style.css"

const Profile = () => {
    return (
        <div>
            <h1>Hello from profile</h1>
            <Link to="/profile" className="links">profile</Link>
            <Link to="/" className="links">Home</Link>
            <Link to="/ToDo" className="links">To Do App</Link>
        </div>
    )
}

export default Profile