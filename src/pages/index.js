import { siteMetadata } from "../constants";

function Home() {
  return <div>{siteMetadata.author}</div>;
}

export default Home;
