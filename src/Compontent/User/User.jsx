
const User = ({user}) => {
    const {id,email,username} =user;
    console.log(user)
    return (
        <div className="bg-slate-200 py-5 text-center rounded-xl text-red-950">
            <div>
                <h1 className="text-2xl font-bold">{username}</h1>
                <p className="font-semibold mt-2">Email: {email}</p>
            </div>
        </div>
    );
};

export default User;