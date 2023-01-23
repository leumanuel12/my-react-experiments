import { useEffect, useReducer, useState } from "react";
import FetchHooks from "../hooks/FetchHooks";
import Skeleton from "../skeletons/Skeleton";
import { ThemeContext } from "../App";
import { useContext } from "react";
import axios from "axios";

const initialState = {
  loading: true,
  post: {},
  error: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        post: action.payload,
        error: "",
      };
    case "FETCH_FAILED":
      return {
        loading: false,
        post: {},
        error: action.message,
      };
  }
};

export default function Posts2() {
  const theme = useContext(ThemeContext);

  const [state, dispatch] = useReducer(reducer, initialState);

  async function getPost() {
    try {
      const posts = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/"
      );
      //console.log(posts.data);
      dispatch({ type: "FETCH_SUCCESS", payload: posts.data });
    } catch (error) {
      //console.log(error.message)
      dispatch({ type: "FETCH_FAILED", message: error.message });
    }
  }

  useEffect(() => {
    //added timeout to see the skeleton in action...
    setTimeout(() => {
      getPost();
    }, 2000);
  }, []);

  return (
    <>
      <div className="p-3 border-2 border-red-500 rounded-md text-red-500">
          useReducer with axios async and skeleton implementation.
      </div>
      <div className="grid md:grid-cols-2 px-4 py-2 gap-4">
        {state.error ? state.error : null}
        <div>
          {state.loading
            ? [...Array(5)].map((n) => <Skeleton key={n} template="posts" />)
            : state.post.map((posts) => {
                return (
                  <div
                    key={posts.id}
                    className={
                      "p-4 mb-3 pb-4 border-2 border-gray-200 rounded-md posts-" +
                      theme.themeMode
                    }
                  >
                    <b>{posts.title}</b>
                    <br />
                    <p className={"body-" + theme.themeMode}>{posts.body}</p>
                  </div>
                );
              })}
        </div>
      </div>
    </>
  );
}

/*
return (
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
    );
*/
