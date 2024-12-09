import Link from "next/link";
import Layout from "@/components/layout";

import { getPosts } from "../../lib/posts";

export const getStaticProps = async () => {
  return {
    props: {
      posts: getPosts()
    }
  };
};

export default function Home({ posts }) {
  return (
    <>
      <Layout pageTitle="Home">
        <Link href={"/about"}>
          About
        </Link>
        {
          posts.map(({ id, title }) => {
            return (
              <li>
                <Link href={`/posts/${id}`}>
                  {title}
                </Link>
              </li>
            )
          })
        }
      </Layout>
    </>
  );
}
