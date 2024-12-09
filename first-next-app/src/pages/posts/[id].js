import Link from "next/link";
import Layout from "@/components/layout";
import { getIds, getPostById } from "../../../lib/posts";

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
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <Link href={"/"}>
                home
            </Link>
        </Layout>
    );
};