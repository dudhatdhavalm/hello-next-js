import { useRouter } from "next/router";
import Layout from "../../components/Layout/Layout";
import fetch from "isomorphic-unfetch";

const DynamicPost = ({ show }) => {
  const router = useRouter();

  return (
    <Layout>
      <h1>{show.name}</h1>
      <p>{show.summary.replace(/<[/]?[pb]>/g, "")}</p>
      <img src={show.image.medium} />
    </Layout>
  );
};

DynamicPost.getInitialProps = async context => {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log(`Fetch show ${show}`);
  return { show };
};

export default DynamicPost;
