/* eslint-disable react/prop-types */

import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const {body,title,id} =post;
    const naveget =useNavigate()
    // console.log(post)
    const handleDetails =() =>{
        naveget(`/posts/${id}`)
    }
    return (
        <div className='bg-stone-400 gap-8 text-black text-center px-3 rounded-lg shadow-lg py-4'>
            <div className='flex flex-col'>
                <h1 className='text-2xl font-bold text-gray-800'>{title}</h1>
                <p>{body}</p>
            </div>
            <div className='flex-wrap'>
                <Link className='flex-wrap' to={`/posts/${id}`}><button className='btn'>Click Me</button></Link>
            </div>
        </div>
    );
};

export default Post;