import Image from "./Assets/kaneke-ken.jpg";


// displaying data
const user = {
    name: "Kaneke kun ",
    imageUrl: Image,
    imageSize: 90,
};

export function UserProfile() {
    return (
        <div className="profile">
            <h1>{user.name}</h1>
            <img
                src={user.imageUrl}
                alt={`Image of ${user.name}`}
                style={{
                    width: user.imageSize,
                    height: user.imageSize,
                    borderRadius: "50%",
                }}
            />
        </div>
    );
}