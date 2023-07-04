import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Detail = ({ match }) => {
  const { id } = match.params;
  const { posts } = useSelector(state => state.posts);
  const post = posts.find(post => post.id === parseInt(id));

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Detail Page For Post With ID ${id}</h1>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRy-IvOgZ7oUgvTNA9xMxS4tqBSwg3SyvR8Q&usqp=CAU" alt="Post Image" />

      <h4>User ID : {post.id}</h4>
      <h4>Title: {post.title}</h4>
      <p>Body: {post.body}</p>
    </div>
  );
};

export default Detail;
