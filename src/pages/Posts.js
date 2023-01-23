import { useEffect, useState } from "react";
import FetchHooks from "../hooks/FetchHooks";
import Skeleton from '../skeletons/Skeleton';
import { ThemeContext } from "../App";
import { useContext } from "react";

export default function Posts() {

    const theme = useContext(ThemeContext);


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
        }, 1000 );
        
    },[] )

    return (
        <>
            <div className="p-3 border-2 border-red-500 rounded-md text-red-500">
                Custom hook fetch api with skeleton implementation.
            </div>
            <div className="grid md:grid-cols-2 px-4 py-2 gap-4">
                <div>
                {post && post.map( post => { return (
                    <div key={post.id} className={"p-4 mb-3 pb-4 border-2 border-gray-200 rounded-md posts-"+theme.themeMode}>
                        <b>{post.title}</b><br/>
                        <p className={"body-"+theme.themeMode}>{post.body}</p>
                    </div>
                ) })  }
                {!post && [...Array(5)].map( (n) => <Skeleton key={n} template="posts"/> )}
                </div>

                <div>
                {users && users.map( user => { return (
                    <div key={user.id} className={"p-4 mb-3 pb-4 border-2 border-gray-200 rounded-md users-"+theme.themeMode}>
                        <b>{user.name}</b> ({user.email})<br/>
                        <p className={"body-"+theme.themeMode}>Address: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
                    </div>
                ) })  }
                {!users && [...Array(5)].map( (n) => <Skeleton key={n} template="users"/> )}
                </div>

            </div>
        </>);
};