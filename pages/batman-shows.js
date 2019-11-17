import Layout from "../components/Layout/Layout";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

const BatmanShows = ({ shows }) => {
  console.log(shows);
  return (
    <Layout>
      <h1>Batman Shows</h1>
      <ul>
        {shows.map(show => {
          return (
            <li key={show.id}>
              <Link href="/dynamic-post/[id]" as={`/dynamic-post/${show.id}`}>
                <a>{show.name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

BatmanShows.getInitialProps = async () => {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  const data = await res.json();
  console.log("Batman Show", data.length);
  return {
    shows: data.map(entry => entry.show)
  };
};

export default BatmanShows;
