import { useLoaderData } from "react-router-dom";

const PostDetles = () => {
    const postDetles = useLoaderData();
    const { body, title, id } = postDetles
    console.log(postDetles)
    return (
        <div className="w-6/12 mx-auto my-8">
            <div className="flex flex-col justify-center items-center text-center bg-amber-900 p-5 rounded-xl shadow-lg">
                <h1 className="text-5xl font-bold ">{id}</h1>
                <p className="text-2xl font-semibold">{title}</p>
                <p>{body}</p>
            </div>
        </div>
    );
};

export default PostDetles;