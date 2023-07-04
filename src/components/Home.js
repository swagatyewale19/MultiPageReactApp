// components/Home.js

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../redux/actions';
import { Link } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector(state => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Social Media App</h1>
      <div className="post-list">
        {posts.map(post => (
          <div key={post.id} className="post-container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRy-IvOgZ7oUgvTNA9xMxS4tqBSwg3SyvR8Q&usqp=CAU" alt="Post Image" />
            <h4>Title: {post.title}</h4>
            <p>Body: {post.body}</p>
            <Link to={`/item/${post.id}`}>Read more</Link><br /><br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

