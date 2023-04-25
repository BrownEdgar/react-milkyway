import React, { useReducer, useState } from "react";
import { initialState, reducer } from "./reducer";
import { useFormik } from "formik";

import {
  ADD_DEVELOPER,
  CHANGE_ID,
  POSTS,
  SORT,
} from "./actionTypes";

export default function App() {
  const formik = useFormik({
    initialValues: {
      name: "",
    },
    onSubmit: (values) => {
    dispatch({ type: ADD_DEVELOPER, payload: { values } });

    },
  });
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleClick = (type) => {
    dispatch({ type: type });
  };
  
  const handleClick2 = () => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((response) => response.json())
      .then((data) => dispatch({ type: POSTS, payload: { data } }));
  };

  return (
    <div>
      <h3>Actions</h3>
      <p>{state?.actions}</p>
      <h3>Developers</h3>
      {state?.developers?.map((e) => {
        return <p>{e}</p>;
      })}
       
      <form className="register-form" onSubmit={formik.handleSubmit}>
            
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Your Name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        <input type="submit" value="Submit" />
      </form>
      {state.posts.map((e) => {
        return (
          <div>
            <p>{e.id}</p>
            <p>{e.title}</p>
            <p>{e.body}</p>
          </div>
        );
      })}
      <h1>State:{JSON.stringify(state.arr, null, 1)}</h1>
      <button
        onClick={() => {
          handleClick(CHANGE_ID);
        }}
        disabled={state.posts.length<1}
      >
        change Id
      </button>
      
      <button
        onClick={() => {
          handleClick(SORT);
        }}
      >
        Sort arr
      </button>
      <button onClick={handleClick2}>get Posts</button>
    </div>
  );
}
