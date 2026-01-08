import React from "react";

const posts = [
  {
    id: 1,
    title: "First Post",
    content: "This is the content of the first post.",
  },
  {
    id: 2,
    title: "Second Post",
    content: "This is the content of the second post.",
  },
  {
    id: 3,
    title: "Third Post",
    content: "This is the content of the third post.",
  },
];

const LastPosts = () => {
  return (
    <div>
      <h2>Last Posts</h2>
      <ul>
        {posts.map((post, index) => {
          return (
            <Post key={index} title={post.title} content={post.content} />
          );
        })}
      </ul>
    </div>
  );
};

interface PostProps {
  title: string;
  content: string;
}

const Post = ({ title, content }: PostProps) => {
  return (
    <li>
      <h3>{title}</h3>
      <p>{content}</p>
    </li>
  );
};

export default LastPosts;
