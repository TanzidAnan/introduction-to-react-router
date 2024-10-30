import { useLoaderData } from "react-router-dom";

const UserDetles = () => {
    const user =useLoaderData();
    const {id,name,phone,username,website} =user
    console.log(user)
    return (
        <div className="w-9/12 mx-auto ">
            <div className="flex justify-center items-center flex-col bg-orange-900 py-11 m-10 rounded-xl">
            <h1 className="text-3xl font-bold"> {name}</h1>
            <p className="text-2xl font-bold">Phone: {phone}</p>
            <p>{username}</p>
            <p>{website}</p>
            </div>
        </div>
    );
};

export default UserDetles;