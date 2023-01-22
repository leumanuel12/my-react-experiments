import { useEffect, useState } from "react";
import FetchHooks from "../hooks/FetchHooks";
import Skeleton from '../skeletons/Skeleton';

export default function Posts() {


const { fetchPosts, post } = FetchHooks('https://jsonplaceholder.typicode.com/posts/', {
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json'
        },
    });

const { fetchUsers, users } = FetchHooks('https://jsonplaceholder.typicode.com/users/', {
    method: 'GET',
    headers: {
        'Content-Type' : 'application/json'
    },
});

useEffect( () => {
    //we only added timeout so we can see the loading animation in action...
    //must remove timeout in live
    setTimeout( () => {
        fetchPosts();
        fetchUsers();
    }, 2000 );
    
},[] )

    return (
        <div className="grid md:grid-cols-2 px-4 py-2 gap-4">
            <div>
            {post && post.map( post => { return (
                <div key={post.id} className="p-4 mb-3 pb-4 border-2 border-gray-200 rounded-md">
                    <b>{post.title}</b><br/>
                    {post.body}
                </div>
            ) })  }
            {!post && [...Array(5)].map( (n) => <Skeleton key={n} template="posts"/> )}
            </div>

            <div>
            {users && users.map( user => { return (
                <div key={user.id} className="p-4 mb-3 pb-4 border-2 border-gray-200 rounded-md">
                    <b>{user.name}</b> ({user.email})<br/>
                    Address: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
                </div>
            ) })  }
            {!users && [...Array(5)].map( (n) => <Skeleton key={n} template="users"/> )}
            </div>

        </div>
    );
};