import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ProfileIcon from '../components/ProfileIcon'
import Comments from '../components/Comments'

function Posts() {
    const { userId } = useParams()
    const [posts, setPosts] = useState([])
    const [postId, setPostId] = useState(null)

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
                setPosts(response.data);
            } catch (err) {
                console.log('Failed to fetch posts');
            }
        };

        fetchPosts();
    }, [userId]);

    // console.log(posts)
    return (
        <>
            <ProfileIcon userId={userId} />
            <div className='p-10'>
                <h1 className='mb-5 font-semibold text-lg'>All Posts</h1>
                <div className='space-y-3 h-[40vh] overflow-y-scroll'>
                    {
                        posts?.map((post) => (
                            <div className='w-full p-4 bg-zinc-200 cursor-pointer' key={post.id} onClick={() => setPostId(post.id)}>
                                <p className='font-semibold'>{post.title}</p>
                                <p>{post.body}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <Comments postId={postId} />
        </>
    )
}

export default Posts