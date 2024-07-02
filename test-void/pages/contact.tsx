import MainContact from '@/components/contact/MainContact'
import React from 'react'

import { Work_Sans } from '@next/font/google'
import Head from 'next/head'

const sansWork = Work_Sans({
  subsets: ['latin'],
  weight: ['700', '100', '200', '500', '600', '900', '400']
})
const index = () => {
  return (
    <>
      <Head>
        <title>Contact Us - My Awesome Website</title>
        <meta name="description" content="Learn more about us on this page of my awesome website" />
      </Head>
      <div className={sansWork.className}>
        <MainContact />
      </div>
    </>

  )
}

export default index
