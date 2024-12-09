import Link from "next/link";
import Layout from "@/components/layout";

export default function Home() {
  return (
    <>
      <Layout pageTitle="about">
        <h2>About</h2>
        <Link href={"/"}>
          home
        </Link>
      </Layout>
    </>
  )
}