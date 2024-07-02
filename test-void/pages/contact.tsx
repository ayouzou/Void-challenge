import MainContact from '@/components/contact/MainContact'
import React from 'react'

import { Work_Sans } from '@next/font/google'

const sansWork = Work_Sans({
  subsets: ['latin'],
  weight: ['700', '100', '200', '500','600','900' ,'400']
})
const index = () => {
  return (
    <div className={sansWork.className}>
        <MainContact/>
    </div>
  )
}

export default index
