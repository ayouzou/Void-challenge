import Image from "next/image";

import Main from "@/components/main/Main";

import { Work_Sans } from '@next/font/google'
import Head from "next/head";

const sansWork = Work_Sans({
  subsets: ['latin'],
  weight: ['700', '100', '200', '500', '600', '900', '400']
})
export default function Home() {
  return (
    <>
      <Head>
        <title>Home - My Awesome Website</title>
        <meta name="description" content="Learn more about us on this page of my awesome website" />
      </Head>
      <main className={sansWork.className}>
        <Main />
      </main>
    </>

  );
}
