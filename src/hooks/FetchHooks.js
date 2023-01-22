import { useState } from "react";

export default function FetchHooks(url, {method, headers, body}) {
    const [post, setPost] = useState();
    const [users, setUsers] = useState();

    function fetchPosts(){
        fetch(url, {
            method: method,
            headers: headers,
            body: body,
        })
        .then(response => response.json())
        .then(data => {
            setPost(data)
            //console.log(data)
        })
    }

    function fetchUsers(){
        fetch(url, {
            method: method,
            headers: headers,
            body: body,
        })
        .then(response => response.json())
        .then(data => {
            setUsers(data)
            //console.log(data)
        })
    }

    return { fetchPosts, fetchUsers, post, users }
};
