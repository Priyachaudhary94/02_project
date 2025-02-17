import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Profile() {
    const { userId } = useParams()
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
    console.log(user)
    return (
        <div>
            <div className='flex bg-blue-400 py-4 px-10'>
                <div className='bg-blue-400 text-white flex gap-5'>
                    <div className='h-14 w-14 bg-white rounded-full grid place-items-center'>
                        <p className='font-bold text-blue-400 text-2xl'>{user?.name?.charAt(0)}</p>
                    </div>
                    <div className=''>
                        <p className='text-lg font-semibold'>{user?.name}</p>
                        <p>{user?.username}</p>

                    </div>
                </div>
            </div>
            <div className='py-4 px-10 space-y-3    '>
                <div className='flex'>
                    <div className='w-1/2 flex flex-col'>
                        <label className='text-blue-400 text-base font-semibold'>Full Name</label>
                        <input type="text" className='text-lg font-semibold text-zinc-700' value={user?.name} />
                    </div>
                    <div className='w-1/2 flex flex-col'>
                        <label className='text-blue-400 text-base font-semibold'>Username</label>
                        <input type="text" className='text-lg font-semibold text-zinc-700' value={user?.username} />
                    </div>
                </div>
                <div className='flex'>
                    <div className='w-1/2 flex flex-col'>
                        <label className='text-blue-400 text-base font-semibold'>Email</label>
                        <input type="text" className='text-lg font-semibold text-zinc-700' value={user?.email} />
                    </div>
                    <div className='w-1/2 flex flex-col'>
                        <label className='text-blue-400 text-base font-semibold'>Phone</label>
                        <input type="text" className='text-lg font-semibold text-zinc-700' value={user?.phone} />
                    </div>
                </div>
                <div className='flex'>
                    <div className='w-1/2 flex flex-col'>
                        <label className='text-blue-400 text-base font-semibold'>Address</label>
                        <p className='text-lg font-semibold text-zinc-700'>{user?.address?.suite}, {user?.address?.street}, {user?.address?.city}</p>
                    </div>
                    <div className='w-1/2 flex flex-col'>
                        <label className='text-blue-400 text-base font-semibold'>Zip Code</label>
                        <input type="text" className='text-lg font-semibold text-zinc-700' value={user?.address?.zipcode} />
                    </div>
                </div>
                <div className='flex'>
                    <div className='w-1/2 flex flex-col'>
                        <label className='text-blue-400 text-base font-semibold'>Website</label>
                        <input type="text" className='text-lg font-semibold text-zinc-700' value={user?.website} />
                    </div>
                    <div className='w-1/2 flex flex-col'>
                        <label className='text-blue-400 text-base font-semibold'>Company</label>
                        <input type="text" className='text-lg font-semibold text-zinc-700' value={user?.company?.name} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile