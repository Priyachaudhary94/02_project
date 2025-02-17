import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Comments({ postId }) {
    const [comments, setComments] = useState([])
    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
                setComments(response.data);
            } catch (err) {
                console.log('Failed to fetch comments');
            }
        };

        fetchComments();
    }, [postId]);

    console.log(comments)
    return (
        <div className='px-10 py-4 w-full h-60 bg-gray-200 overflow-y-scroll'>
        <p className='font-semibold text-lg mb-5'>Comments</p>
        {postId === null ? (<p>No comments</p>) : (
            <div className='space-y-3'>
                {
                    comments?.map((comment) => (
                        <div className='w-full p-4 bg-white' key={comment.id}>
                            <p className='text-blue-400'>{comment.email}</p>
                            <p className='text-sm'>{comment.name}</p>
                            <p className='text-sm text-zinc-700'>{comment.body}</p>
                        </div>
                    ))
                }
            </div>
        )}

    </div>
    )
}

export default Comments