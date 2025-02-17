import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function ProfileIcon({ userId }) {
    const [user, setUser] = useState({})

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
                setUser(response.data);
            } catch (err) {
                console.log('Failed to fetch posts');
            }
        };

        fetchUser();
    }, [userId]);

    return (
        <div className='flex bg-blue-400 py-4 px-10'>
            <Link to={`/profile/${userId}`} className='bg-blue-400 text-white flex gap-5'>
                <div className='h-14 w-14 bg-white rounded-full grid place-items-center'>
                    <p className='font-bold text-blue-400 text-2xl'>{user?.name?.charAt(0)}</p>
                </div>
                <div className=''>
                    <p className='text-lg font-semibold'>{user?.name}</p>
                    <p>{user?.username}</p>

                </div>
            </Link>
        </div>
    )
}

export default ProfileIcon