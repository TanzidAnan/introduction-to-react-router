import { useLoaderData } from "react-router-dom";

const Users = () => {
    const users =useLoaderData()
    return (
        <div>
            <h1>Users {users.length}</h1>
        </div>
    );
};

export default Users;