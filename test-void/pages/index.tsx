import Image from "next/image";

import Main from "@/components/main/Main";

import { Work_Sans } from '@next/font/google'

const sansWork = Work_Sans({
  subsets: ['latin'],
  weight: ['700', '100', '200', '500','600','900' ,'400']
})
export default function Home() {
  return (
    <main className={sansWork.className}>
      <Main />
    </main>
  );
}
