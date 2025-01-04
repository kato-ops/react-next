//react13以降はサーバーサイドレンダリングがデフォルトでJSを送信しないらしい
//なので、JS(イベント関数とか)を使いたい場合は、'use client';を付ける必要がある
'use client';

import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Container, Input } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/config/firebase";
import { useRouter } from "next/navigation";

type Inputs = {
  name: string;
  birth: string;
  isLearning: string;
  wasLearning: string;
  langs: string;
};

export default function Home() {
  const {
    register,
    handleSubmit,
    watch,
    formState: {
      errors,
    },
    control,
  } = useForm<Inputs>();

  const isLearning = watch("isLearning");
  const wasLearning = watch("wasLearning");

  const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = async ({
    name,
    birth,
    isLearning,
    wasLearning,
    langs = "no_learning",
  }) => {
    await addDoc(collection(db, "questionnaire"), {
      name,
      birth,
      isLearning,
      wasLearning,
      langs,
    });
    router.push("/success");
  };

  return (
    <>
      <Container>
        <h1>プログラミング学習に関するアンケート</h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
        >

          <div>
            <label htmlFor="name">Q1. 名前を入力してください（匿名可）。</label>
            <Controller
              name="name"
              defaultValue=""
              control={control}
              render={
                ({ field: { value, onChange } }) => <Input value={value} onChange={onChange} />
              }
            />
          </div>
          <div>
            <label htmlFor="birth">Q2. 生年月日を入力してください。(例： 19900101)</label>
            <Controller
              name="birth"
              defaultValue=""
              control={control}
              rules={{ required: true, pattern: /^[0-9]{8}$/ }}
              render={
                ({ field: { value, onChange } }) => <Input value={value} onChange={onChange} />
              }
            />
            {
              errors.birth && errors.birth.type === "required" ?
                <span>このフィールドは回答必須です。</span> : null
            }
            {
              errors.birth && errors.birth.type === "pattern" ?
                <span>整数8桁で入力してください。</span> : null
            }
          </div>
          <div>
            <span>Q3. 現在、プログラミングを学習していますか？</span>
            <input
              id="isLearning1"
              {...register("isLearning", { required: true })}
              name="isLearning"
              type="radio"
              value="yes"
            />
            <label htmlFor="isLearning1">はい</label>
            <input
              id="isLearning2"
              {...register("isLearning", { required: true })}
              name="isLearning"
              type="radio"
              value="no"
            />
            <label htmlFor="isLearning2">いいえ</label>
            <input
              id="isLearning3"
              {...register("isLearning", { required: true })}
              name="isLearning"
              type="radio"
              value="not_sure"
            />
            <label htmlFor="isLearning3">わからない</label>
            {
              errors.birth &&
              <span>このフィールドは回答必須です。</span>
            }
          </div>
          <div>
            <span>Q4. これまでに、プログラミングを学習したことがありますか？</span>
            <input
              id="wasLearning1"
              {...register("wasLearning", { required: true })}
              name="wasLearning"
              type="radio"
              value="yes"
            />
            <label htmlFor="wasLearning1">はい</label>
            <input
              id="wasLearning2"
              {...register("wasLearning", { required: true })}
              name="wasLearning"
              type="radio"
              value="no"
            />
            <label htmlFor="wasLearning2">いいえ</label>
            <input
              id="wasLearning3"
              {...register("wasLearning", { required: true })}
              name="wasLearning"
              type="radio"
              value="not_sure"
            />
            <label htmlFor="wasLearning3">わからない</label>
            {
              errors.birth &&
              <span>このフィールドは回答必須です。</span>
            }
          </div>
          {
            (isLearning === "yes" || wasLearning === "yes") &&
            <div>
              <label htmlFor="langs">Q5. 今まで学習したことのあるプログラミング言語をすべて教えてください。</label>
              <Controller
                name="langs"
                defaultValue=""
                control={control}
                render={
                  ({ field: { value, onChange } }) => <Input value={value} onChange={onChange} />
                }
              />
            </div>
          }

          <input
            type="submit"
            value="アンケートを提出する"
          ></input>
        </form>
      </Container>
    </>
  );
}
