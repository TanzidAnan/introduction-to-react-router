import { Link } from "react-router-dom";

const User = ({user}) => {
    const {id,email,username} =user;
    console.log(user)
    return (
        <div className="bg-slate-200 py-5 text-center rounded-xl text-red-950 ">
            <div className="mb-4">
                <h1 className="text-2xl font-bold">{username}</h1>
                <p className="font-semibold mt-2">Email: {email}</p>
            </div>
            <div className="flex justify-between mx-7">
                <div >
                    <Link to={`/user/${id}`}><button className="btn bg-red-400 border-none text-black">Data Add</button></Link>
                </div>
                <div>
                    <button className="btn bg-slate-100">Click Add</button>
                </div>
            </div>
        </div>
    );
};

export default User;