import { Link } from "react-router-dom";


const User = ({user}) => {
    const {id,name,email,phone} =user
    console.log(user)
    return (
        <div className="bg-slate-300 p-5 rounded-xl">
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p> 
            <button><Link className="btn bg-gray-600 px-4 py-1" to={`/usre/:${id}`}>Details</Link></button>
        </div>
    );
};

export default User;