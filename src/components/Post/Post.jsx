import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AiFillLike, AiFillTags } from "react-icons/ai";
import { RiArrowGoBackFill } from "react-icons/ri";
import "./Post.scss";

export default function Post() {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [error, setError] = useState(false);
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/posts/${id}`)
      .then((response) => setPost(response.data))
      .catch((err) => setError(true));
  }, []);
  if (error) {
    return (
      <div className="post">
        <Link to="/posts">
          <RiArrowGoBackFill />
        </Link>
        <h2>Sorry Post N {id} not found</h2>
      </div>
    );
  }
  return (
    <div className="post">
      <Link to="/posts">
        <RiArrowGoBackFill />
      </Link>
      <p className="tags">
        <AiFillTags />
        {post?.tags?.join(" | ")}
      </p>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p>
        <FaUserCircle />
        {post.userId}
      </p>
      <p>
        <AiFillLike />
        {post.reactions}
      </p>
    </div>
  );
}
