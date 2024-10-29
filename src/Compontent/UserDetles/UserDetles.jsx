import { useLoaderData } from "react-router-dom";

const UserDetles = () => {
    const user =useLoaderData();
    const {name} =user;
    console.log(user)
    
    return (
        <div>
            <h1>Detles About Users: {name}</h1>
        </div>
    );
};

export default UserDetles;