import Link from "next/link";
import Layout from "@/components/layout";

import styles from "./Page.module.css";

export default function Home() {
  return (
    <>
      <Layout pageTitle="about">
        <h2 className={styles.title}>About</h2>
        <p>これはブログをnext.jsを用いて実装したものです。</p>
        <Link href={"/"} className={styles.navigation}>home</Link>
      </Layout>
    </>
  )
}