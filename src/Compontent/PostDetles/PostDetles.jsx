import { useLoaderData } from "react-router-dom";

const PostDetles = () => {
    const postDetles =useLoaderData();
    const {id,body,title} =postDetles;
    return (
        <div className="w-6/12 mx-auto mt-11">
            <h3>{postDetles.length}</h3>
            <p>Post {id}</p>
            <p>Post {title}</p>
            <p>Post {body}</p>
        </div>
    );
};

export default PostDetles;