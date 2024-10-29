import { Link } from "react-router-dom";

const Post = ({ post }) => {
    const { body, title, id } = post
    console.log(post)
    return (
        <div className="bg-orange-200 px-4 py-2 rounded-lg flex flex-col">
            <div className="text-center">
                <h3 className="text-2xl text-stone-700">{title}</h3>
                <div className="flex-wrap mb-6">
                    <p className="mb-">{body}</p>
                </div>
                <Link className="btn bg-stone-500 px-4 py-2" to={`/posts/${id}`}>
                    <button className="btn">Details</button>
                </Link>
            </div>
        </div>
    );
};

export default Post;