import Link from "next/link";
import Layout from "../components/Layout/Layout";

const getPosts = () => {
  return [
    { id: "hello-next", title: "Hello Next.js" },
    { id: "learn-next-js", title: "Learn Next.js is awesome" },
    { id: "deploy-next-js", title: "Deploy apps with ZEIT" }
  ];
};

const PostLink = ({ post }) => (
  <li>
    <Link href={"/p/[id]"} as={`/p/${post.id}`}>
      <a>{post.title}</a>
    </Link>
    <style jsx>
      {`
        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: blue;
        }

        a:hover {
          opacity: 0.6;
        }
      `}
    </style>
  </li>
);

const DynamicBlog = () => {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        {getPosts().map(post => (
          <PostLink key={post.id} post={post} />
          // <li>
          //   <Link href={"/p/[id]"} as={`/p/${post.id}`}>
          //     <a>{post.title}</a>
          //   </Link>
          // </li>
        ))}
      </ul>
      <style jsx>
        {`
          h1,
          a {
            font-family: "Arial";
          }

          ul {
            padding: 0;
          }

          li {
            list-style: none;
            margin: 5px 0;
          }

          a {
            text-decoration: none;
            color: blue;
          }

          a:hover {
            opacity: 0.6;
          }
        `}
      </style>
    </Layout>
  );
};

export default DynamicBlog;
