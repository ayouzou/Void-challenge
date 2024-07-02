import Link from 'next/link'
import React from 'react'
const image1='https://s3-alpha-sig.figma.com/img/36b6/7efe/3596120bc5d52f206e5672290949f40e?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ikmXJI8APLdc4yOOF-dv5AApN18oVUYKxPHpkGtZ4Wwjutw16tqBcNGKNg3AerM3gOdMtHYGf1tnWN5PDqTkfMG7rfSp6L9YLoU8EE1KMd1a7Y4-jKkUD3QEeUknfoYVa0DPJEp7o~wkw5dAKLHxme9oWove0-7tBICcXmmZNwoFjpo8TSvqRg~EhbJZpqMNHEWU5ow9aozXbfsmGdZOEJOM71iUOTZ9iEmTeSi-LjC0qH8TFXIbOs2TzPZHnF7lCLHm3gXirSaOeQcgnLJTDf-GVNknMQAYdQEdvRHMDcxFfDlGypCJ1pmHUQtuymsaSy4SQhWtHKuxeFwjEsYnqQ__'
const Card = ({name,post,motif,image}:{name:string,post:string,motif:string,image:string}) => {
    return (
        <div className='md:w-[282px] md:h-[354.63px] h-[368.25px] rounded-[8px] bg-[#FFFFFF] border-[1px] border-[#C9C9C9]'>
            <div className=' h-[158.63px]'>
                <img src={image} alt="" className='w-full md:h-[158.63px] h-[200.25px] rounded-[8px]' />
            </div>
            <div className='md:w-[282px] md:h-[196px] h-[166px] p-[24px] md:mt-0 mt-5'>
                <div className='md:mt-0 mt-4'>
                    <h1 className='font-bold md:text-[22.69px] text-[18.91px] md:leading-[36px] leading-[30px] text-[#000000]'>
                        {name}
                    </h1>
                    <p className='font-normal  w-full text-[14.75px] leading-[24px] text-[#0D0D0D]'>
                      {post}
                    </p>
                    <p className='text-[14.63px] font-normal leading-[24px] text-[#0D0D0D]'>
                        {motif}
                    </p>
                </div>
                <div className='flex items-center gap-3 mt-5 '>
                    <Link href={''}  className='font-bold leading-[20px] text-[14.75px] text-[#000000]'>
                        En savoir plus
                    </Link>
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.7063 8.83628C15.0969 8.44565 15.0969 7.81128 14.7063 7.42065L9.70625 2.42065C9.31563 2.03003 8.68125 2.03003 8.29063 2.42065C7.9 2.81128 7.9 3.44565 8.29063 3.83628L11.5875 7.13003H2C1.44687 7.13003 1 7.5769 1 8.13003C1 8.68315 1.44687 9.13003 2 9.13003H11.5844L8.29375 12.4238C7.90312 12.8144 7.90312 13.4488 8.29375 13.8394C8.68437 14.23 9.31875 14.23 9.70938 13.8394L14.7094 8.8394L14.7063 8.83628Z" fill="#7A00E6" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Card