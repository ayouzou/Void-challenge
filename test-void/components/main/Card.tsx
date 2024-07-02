import Link from 'next/link'
import React from 'react'
const Card_image = 'https://s3-alpha-sig.figma.com/img/4b51/6386/9bbcd81815464755aa6d26b936fa8df4?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mAqKyzI6bK65n23ew2YUjKKOiV4Hnf2lyGiPn6WIKQ24LDxMMPSeR7FoAfLNA4a09BPXOacg~JibKLA2~NLleAlsgcqo-qhbhLOHIocI3hEL9TAfsy5zoZq2MX4IhAizZo2qtUC-rm3T2bNhwdaNcX0Bb3tYcotNvxiwOft7xHC-bMJ4aIKLdGAe3XLnXgE-DNK0CVd8X-I9S-YNiDkHuUIqxYqLn7BDZAKtyo61xLCy4k3azwGAxxy-qkEuvwWyEHBxBWZWaCDXToCLtJDi23FrjcdbQlmokKxi49Xei-Wn~qAQ10Dt04fHuZ9g2K-wXAFA2rxgnokxz9KlMweBuQ__'
const Card_Image2 = 'https://s3-alpha-sig.figma.com/img/4df0/7322/bb06c5c217c6c401e82dd9f885d76650?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ffUVaC4ZvBiP60toB4E2UhEe4MyD5ZS8RObLegrCxaD5uxV1w3EO2YiTdWEvqff1F~vW2xOwnoO5R~rJ4dywnN9msRQUYXOkugaLrxM9zIm2sLMiFV6IVgdV9MENin3R6AcqYK7LKaKhFvHVr8IV7uts0I3Hgjgrk-OMPO4sx4s-bDFFhHLZobslp-5z8~ImPvD7iodKf5GphHbu9t0onQAEZ9ARrV97Pu6cqtUzPoLxIPp7H97LkkYdZQJqwty2JodZv5BXXEr5ghLHAp76p1BFcWvMibyFvtSDAcnT4xTD2qVAe8uvNG1dvIAlebdnqQN84~qK7cC3ANx~X~a1kA__'
const Card_Image3 = 'https://s3-alpha-sig.figma.com/img/6f08/d46e/64253ad0b1a21c321412576769c183fe?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lwFg3Z4C51s8duuguaDFsKIU4NUaUKxv0vxLcVn2FkKT24olwQSBj2ixBtDlsBW8NZiZa4kmmIyocgxRp~mulQ5~rgBj4QQrwzLBVB9cLnZM19qL5uobqKoYyOqsU2omcS7iMzxRq~xslxhUfiiyFC-7E~kHUrRT~NtKHEVzP2j1JdGgheADJL1YR0-eP4Q6xWU57gmmoao2YNYILKdu7lHODmzFk4Yb5wf~qZu8QtGYgR4SsuByjpzQuPJo-QagNrPtivHmFQ301V79br9ZYq3e~B7hccIPdLITO81EdAwHK9UO7rKkVkrCMyzFTVvo-R3zoiT6tXLJfJmJZ3kVew__'
const Card = () => {
    return (
        <div className='md:pt-[50px]  '>
            <div className='md:h-[384.75px]  h-[549.38px] bg-[#FFFFFF] flex lg:flex-row flex-col gap-7  ' >
                <div className='w-full md:h-[384.75px] h-[201.38px] lg:order-last	order-first '>
                    <img src={Card_image} className='md:min-w-[684px] w-[358px] md:min-h-[384.75px] h-[201.38px] rounded-[8px] ' alt="" />
                </div>
                <div className='order-last lg:order-first'>
                    <h1 className='md:h-[108px] h-[84px]  font-bold md:text-[33.47px] text-[26.03px] md:leading-[54px] leading-[42px] text-[#000000]   '>
                        Le drapeau de la lutte
                        contre les méningites
                    </h1>
                    <p className='md:w-[451.93px] w-[344.33px] pt-2  md:h-[168px] h-[192px]  font-normal text-[14.98px] leading-[24px] text-[#0D0D0D] '>
                        Créé en collaboration avec trois para-athlètes, Ellie Challis,
                        Théo Curin, Davide Morana et plusieurs membres de la
                        Meningitis Research Foundation / Confederation of Meningitis
                        Organisations, le drapeau de la lutte contre les méningites vise <br />
                        à sensibiliser le public à une maladie qui reste encore, à ce
                        jour, un problème majeur de santé publique à l’échelle
                        mondiale.
                    </p>
                    <h3 className='md:min-w-[138.61px]  pt-9 w-[138.61px] h-[20px] font-bold text-[14.75px] leading-[20px] text-[#000000] md:mt-4 mt-10 flex items-center'>
                        En savoir plus
                        <svg className='w-[16px] h-[16px]  ml-3' width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.41 0.5C9.85691 0.5 9.41003 0.946875 9.41003 1.5C9.41003 2.05313 9.85691 2.5 10.41 2.5H12.9944L6.70378 8.79375C6.31316 9.18437 6.31316 9.81875 6.70378 10.2094C7.09441 10.6 7.72878 10.6 8.11941 10.2094L14.41 3.91563V6.5C14.41 7.05312 14.8569 7.5 15.41 7.5C15.9632 7.5 16.41 7.05312 16.41 6.5V1.5C16.41 0.946875 15.9632 0.5 15.41 0.5H10.41ZM2.91003 1.5C1.52878 1.5 0.410034 2.61875 0.410034 4V14C0.410034 15.3813 1.52878 16.5 2.91003 16.5H12.91C14.2913 16.5 15.41 15.3813 15.41 14V10.5C15.41 9.94687 14.9632 9.5 14.41 9.5C13.8569 9.5 13.41 9.94687 13.41 10.5V14C13.41 14.275 13.185 14.5 12.91 14.5H2.91003C2.63503 14.5 2.41003 14.275 2.41003 14V4C2.41003 3.725 2.63503 3.5 2.91003 3.5H6.41003C6.96316 3.5 7.41003 3.05312 7.41003 2.5C7.41003 1.94687 6.96316 1.5 6.41003 1.5H2.91003Z" fill="#7A00E6" />
                        </svg>
                    </h3>
                </div>
            </div>
            <div className='md:h-[384.75px]  h-[549.38px] bg-[#FFFFFF] flex lg:flex-row flex-col gap-3  mt-20' >
                <div className='w-full md:h-[384.75px] h-[201.38px] '>
                    <img src={Card_Image2} className='md:min-w-[684px] w-[358px] md:min-h-[342px] h-[201.38px] rounded-[8px] ' alt="" />
                </div>
                <div className=''>
                    <h1 className='md:h-[108px] h-[84px]  font-bold md:text-[33.47px] text-[26.03px] md:leading-[54px] leading-[42px] text-[#000000]   '>
                        Les femmes au sein de
                        Entreprise - Cristina
                    </h1>
                    <p className='md:w-[439.1px]  m-5 ml-0 w-[344.33px] pt-2  md:h-[120px] h-[192px]  font-normal text-[15.98px] leading-[24px] text-[#0D0D0D] '>
                        Rencontrez Cristina Zamora, notre cheffe de projet pour les
                        opérations de R&D en Amérique du Nord et l'une des
                        nombreuses scientifiques inspirantes qui contribuent à
                        renforcer la prochaine génération de femmes leaders
                        dans le
                        domaine de la santé et au-delà.
                    </p>
                    <h3 className='md:min-w-[138.61px] md:pt-8 w-[138.61px] h-[20px] font-bold text-[14.75px] leading-[20px] text-[#000000] md:mt-4  flex items-center'>
                        En savoir plus
                        <svg className='w-[16px] h-[16px]  ml-3' width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.41 0.5C9.85691 0.5 9.41003 0.946875 9.41003 1.5C9.41003 2.05313 9.85691 2.5 10.41 2.5H12.9944L6.70378 8.79375C6.31316 9.18437 6.31316 9.81875 6.70378 10.2094C7.09441 10.6 7.72878 10.6 8.11941 10.2094L14.41 3.91563V6.5C14.41 7.05312 14.8569 7.5 15.41 7.5C15.9632 7.5 16.41 7.05312 16.41 6.5V1.5C16.41 0.946875 15.9632 0.5 15.41 0.5H10.41ZM2.91003 1.5C1.52878 1.5 0.410034 2.61875 0.410034 4V14C0.410034 15.3813 1.52878 16.5 2.91003 16.5H12.91C14.2913 16.5 15.41 15.3813 15.41 14V10.5C15.41 9.94687 14.9632 9.5 14.41 9.5C13.8569 9.5 13.41 9.94687 13.41 10.5V14C13.41 14.275 13.185 14.5 12.91 14.5H2.91003C2.63503 14.5 2.41003 14.275 2.41003 14V4C2.41003 3.725 2.63503 3.5 2.91003 3.5H6.41003C6.96316 3.5 7.41003 3.05312 7.41003 2.5C7.41003 1.94687 6.96316 1.5 6.41003 1.5H2.91003Z" fill="#7A00E6" />
                        </svg>
                    </h3>
                </div>
            </div>
            <div className='md:h-[384.75px]  h-[549.38px] bg-[#FFFFFF] flex lg:flex-row flex-col gap-7  mt-14' >
                <div className='w-full md:ml-14 md:h-[342px] h-[201.38px] lg:order-last	order-first '>
                    <img src={Card_Image3} className='md:min-w-[684px] w-[358px] md:min-h-[342px] h-[201.38px] rounded-[8px] ' alt="" />
                </div>
                <div className='order-last lg:order-first'>
                    <h1 className='md:h-[108px] h-[84px] md:w-[400px]  font-bold md:text-[33.47px] text-[26.03px] md:leading-[54px] leading-[42px] text-[#000000]   '>
                        200 jours avant les Jeux
                        Paralympiques
                    </h1>
                    <p className='md:w-[398.78px] w-[344.33px] pt-5  md:h-[72px] h-[96px]  font-normal text-[15px] leading-[24px] text-[#0D0D0D] '>
                        Si vous n'avez pas encore entendu parler du
                        #DrapeauMéningites, regardez la vidéo de Vaskange et
                        découvrez la signification de chaque couleur.
                    </p>
                    <h3 className='md:min-w-[138.61px]  pt-5 w-[138.61px] h-[20px] font-bold text-[14.75px] leading-[20px] text-[#000000] md:mt-4 mt-10 flex items-center'>
                        En savoir plus
                        <svg className='w-[16px] h-[16px]  ml-3' width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.41 0.5C9.85691 0.5 9.41003 0.946875 9.41003 1.5C9.41003 2.05313 9.85691 2.5 10.41 2.5H12.9944L6.70378 8.79375C6.31316 9.18437 6.31316 9.81875 6.70378 10.2094C7.09441 10.6 7.72878 10.6 8.11941 10.2094L14.41 3.91563V6.5C14.41 7.05312 14.8569 7.5 15.41 7.5C15.9632 7.5 16.41 7.05312 16.41 6.5V1.5C16.41 0.946875 15.9632 0.5 15.41 0.5H10.41ZM2.91003 1.5C1.52878 1.5 0.410034 2.61875 0.410034 4V14C0.410034 15.3813 1.52878 16.5 2.91003 16.5H12.91C14.2913 16.5 15.41 15.3813 15.41 14V10.5C15.41 9.94687 14.9632 9.5 14.41 9.5C13.8569 9.5 13.41 9.94687 13.41 10.5V14C13.41 14.275 13.185 14.5 12.91 14.5H2.91003C2.63503 14.5 2.41003 14.275 2.41003 14V4C2.41003 3.725 2.63503 3.5 2.91003 3.5H6.41003C6.96316 3.5 7.41003 3.05312 7.41003 2.5C7.41003 1.94687 6.96316 1.5 6.41003 1.5H2.91003Z" fill="#7A00E6" />
                        </svg>
                    </h3>
                </div>
            </div>
        </div>
    )
}
export default Card