import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
    const posts = useLoaderData()
    return (
        <div>
            <h3>Post: {posts.length}</h3>
            <div className="grid grid-cols-3 gap-6">
            {
                posts.map((post,idx) =><Post key={idx} post={post}></Post>)
            }
            </div>
        </div>
    );
};

export default Posts;