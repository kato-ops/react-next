//react13以降はサーバーサイドレンダリングがデフォルトでJSを送信しないらしい
//なので、JS(イベント関数とか)を使いたい場合は、'use client';を付ける必要がある
'use client';


export default function Home() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <>
      <h1>プログラミング学習に関するアンケート</h1>

      <form
        onSubmit={handleSubmit}
      >
        <input
          type="submit"
          value="アンケートを提出する"
        ></input>
      </form>
    </>
  );
}
