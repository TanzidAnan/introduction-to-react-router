import { useLoaderData } from "react-router-dom";

const Posts = () => {
    const posts =useLoaderData()
    return (
        <div>
            <h3>Post: {posts.length}</h3>            
        </div>
    );
};

export default Posts;