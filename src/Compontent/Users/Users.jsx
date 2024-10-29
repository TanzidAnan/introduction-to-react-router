import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
    const users =useLoaderData()
    return (
        <div>
            <h1 className="text-2xl font-semibold">Users {users.length}</h1>
            <h1></h1>
            <div>
                {
                    users.map((user,idx) =><User key={idx} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;