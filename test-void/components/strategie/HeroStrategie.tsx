import Link from 'next/link'
import React from 'react'
const IMAGE_URL = 'https://s3-alpha-sig.figma.com/img/bd83/03ca/d00af648eec75b269b77e597e1bb0e75?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QC8ODotHERZ-Bhgp41bVbZkyoIRB~KgwJ2JHn2uwpmGQujeXnlP7SdKdU1nTwN2QbSl1sVzOTuESdAgPhL4WWkzqn40xyMDKu~717X3FeVTtD8xpg54laj5f2eN~Jj0CEhmEyD~bKn31APaeFcOU614zPkUAnfdpaJ4IJt4HyBu7LvFm~1yHc6v1dhlYraRLbW4wbCqmeWSqEj5APp-hDySGgrZvhm9ruvgi5YbSECu~cRir5qaoOAP4GNKtrGrB8OsiD~HvFuFdPNpRbFhMWu24Ul9eU1uS8G~Uy9zJuMAX6gcMaUr9535xDAYOodZ37jYy4pied1KLMj~3b3apZQ__'

const HeroStrategie = () => {
    return (
        <div className='xl:min-w-[390px] md:h-[576px] h-[480px] bg-[#FFFFFF]  '>
            <div className='xl:min-w-[1440px] min-w-[390px] md:h-[576px] h-[296px] relative'
                style={{
                    backgroundImage: `url(${IMAGE_URL})`,
                    backgroundSize: 'cover', backgroundPosition: 'center',
                }} >
                <div className='md:w-[590px] h-[240.25px] rounded-[8px] bg-[#FFFFFF] absolute top-[200px] md:left-[140px] mx-5'>
                    <h1 className='md:text-[45.38px] text-[34.03px] font-bold leading-[72px] w-[#0D0D0D] pt-10 px-8'>
                        Notre stratégie
                    </h1>
                    <p className='md:text-[14.63px] text-[14.88px] text-[#0D0D0D] leading-[24px] font-normal pt-3 px-8'>
                        Nous sommes engagés à créer la médecine de demain grâce à la science
                        la plus innovante et à faire une différence positive pour nos employés et
                        les communautés que nous soutenons.
                    </p>
                </div>


                <div className='flex gap-2 items-center absolute bg-[#FFFFFF] w-full pl-10' >
                    <Link href={'#'} className='text-[13.13px] font-normal leading-[24px] text-[#00000099]'>
                        Accueil
                    </Link>
                    <Link href={'#'} className='w-[22.85px] h-[22.85px] text-[#00000099]'>
                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.52075 5.78749L8.17822 7.13002L12.5391 11.5004L8.17822 15.8708L9.52075 17.2133L15.2337 11.5004L9.52075 5.78749Z" fill="black" fillOpacity="0.6" />
                        </svg>
                    </Link>
                    <Link href={'#'} className='text-[12.91px] font-normal leading-[24px] text-[#00000099]'>
                        Notre Entreprise
                    </Link>
                    <Link href={'#'} className='w-[22.85px] h-[22.85px] text-[#00000099]'>
                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.52075 5.78749L8.17822 7.13002L12.5391 11.5004L8.17822 15.8708L9.52075 17.2133L15.2337 11.5004L9.52075 5.78749Z" fill="black" fillOpacity="0.6" />
                        </svg>
                    </Link>
                </div>

            </div>
            <div className='bg-[#FFFFFF] p-3 relative'>
                <h4 className='absolute md:left-[140px] left-[50px] md:top-0 -top-[75px]'>R&D Photos - Marcy, France</h4>
            </div>
        </div>
    )
}

export default HeroStrategie