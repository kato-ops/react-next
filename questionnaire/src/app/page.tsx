import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>It's Home !!!</h1>
      <Link href="/test">[go test page]</Link>
    </div>
  );
}
