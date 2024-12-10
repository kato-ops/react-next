import Link from "next/link";
import Layout from "@/components/layout";

import { getPosts } from "../../lib/posts";

import styles from "./Page.module.css";

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
        <h1 className={styles.title}>Home</h1>
        <Link href={"/about"} className={styles.navigation}>
          About
        </Link>
        <ul className={styles.list}>
          {posts.map(({ id, title }) => {
            return (
              <li key={id} className={styles.listItem}>
                <Link href={`/posts/${id}`}>
                  {title}
                </Link>
              </li>
            )
          })}
        </ul>
      </Layout>
    </>
  );
};
