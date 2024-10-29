import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
    const users =useLoaderData()
    return (
        <div>
            <h1 className="text-2xl font-semibold">Users {users.length}</h1>
            <h1></h1>
            <div className="grid grid-cols-3 gap-9 mt-5">
                {
                    users.map((user,idx) =><User key={idx} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;