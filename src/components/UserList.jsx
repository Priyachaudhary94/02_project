import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
function UserList() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                setUsers(response.data);
            } catch (err) {
                console.log('Failed to fetch users');
            } 
        };

        fetchUsers();
    }, []);

    return (
        <div className='p-10'>
            <h1>Userlist</h1>
            {
                users?.map((user) => (
                    <div key={user.id} className='flex justify-between mb-3'>
                        <div className='flex item-center gap-3'>
                            <div className='w-5'>
                                <p>{user.id}</p>
                            </div>
                            <div>
                                <p>{user.name}</p>
                            </div>

                        </div>
                        <div>
                            <Link to={`/posts/${user.id}`} className='bg-blue-500 rounded-sm px-3 py-1 text-white'>View Post</Link>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default UserList