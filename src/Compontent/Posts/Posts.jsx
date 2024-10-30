import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
    const posts =useLoaderData();
    return (
        <div className="w-11/12 mx-auto">
            <h1>All post{posts.length}</h1>
            <div className="grid grid-cols-3 gap-8">
                {
                    posts.map((post,idx) =><Post key={idx} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;