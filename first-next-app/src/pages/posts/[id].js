import Link from "next/link";
import ReactMarkdown from "react-markdown";

import Layout from "@/components/layout";
import { getIds, getPostById } from "../../../lib/posts";

import styles from "../Page.module.css";

export const getStaticPaths = async () => {
    return {
        paths: getIds(),
        fallback: false
    };
};
export const getStaticProps = async ({ params }) => {
    return {
        props: {
            post: getPostById(params.id)
        }
    };
};


export default function Post({ post }) {
    return (
        <Layout pageTitle={post.title}>
            <h2 className={styles.title}>{post.title}</h2>
            <p>{post.date}</p>
            <ReactMarkdown>{post.content}</ReactMarkdown>
            <Link href={"/"} className={styles.navigation}>
                home
            </Link>
        </Layout>
    );
};