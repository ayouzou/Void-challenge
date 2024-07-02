import React from 'react'
const infoInput = [
    {
        id: 1,
        placeholder: 'Prénom *'
    },
    {
        id: 2,
        placeholder: 'Nom *'
    }, {
        id: 3,
        placeholder: 'Email *'
    }, {
        id: 4,
        placeholder: 'Confirmer Email *'
    }, {
        id: 5,
        placeholder: 'Téléphone *'
    },
    {
        id: 6,
        placeholder: 'Titre de fonction *'
    }
]

const LabelInfo = [
    {
        id: 1,
        label: 'Chine'
    },
    {
        id: 2,
        label: 'Médecines'
    },
    {
        id: 3,
        label: 'Immunologie'
    },
    {
        id: 4,
        label: ' Technologiques'
    },
    {
        id: 5,
        label: 'Neurosciences'
    },
    {
        id: 6,
        label: 'Oncologie'
    },
    {
        id: 7,
        label: 'Maladie Rare'
    },
    {
        id: 8,
        label: 'Vaccins'
    }

]
const MainForm = () => {
    return (
        <div className='md:mx-[160px]  md:mt-14 mt-8 mx-[5px] md:pt-[60px] pt-[10px]  h-full bg-[#FFFFFF] '>
            <p className='font-normal text-[14.5px] leading-[24px] text-[#0D0D0D]'>
                (*) champs obligatoires
            </p>
            <div>
                <h1 className='font-bold text-[22.69px] leading-[36px] text-[#000000] pt-8' >
                    A propos de vous
                </h1>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-8 pt-5' >
                    {
                        infoInput.map((input) => (
                            <div key={input.id} className=''>
                                <label className='font-normal text-[14.38px] leading-[24px] text-[#0D0D0D]'>
                                    {input.placeholder}
                                </label>
                                <input type="text" className='md:w-[576px] w-full h-[48px] mt-2 rounded-[4px] bg-[#F5F5F5]' />
                            </div>
                        ))
                    }
                </div>
            </div>
            <div>
                <h1 className='font-bold text-[22.69px] leading-[36px] text-[#000000] pt-8' >
                    Votre entreprise
                </h1>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-8 pt-5' >
                    <div className=''>
                        <label className='font-normal text-[14.38px] leading-[24px] text-[#0D0D0D]'>
                            Nom d'organisation *
                        </label>
                        <input type="text" className='md:w-[576px] w-full h-[48px] mt-2 rounded-[4px] bg-[#F5F5F5]' />
                    </div>
                    <div className='relative'>
                        <label className='font-normal text-[14.38px] leading-[24px] text-[#0D0D0D]'>
                            Type d'organisation *
                        </label>
                        <input type="text" placeholder='--Aucune--' className='md:w-[576px] w-full h-[48px] mt-2 rounded-[4px] bg-[#F5F5F5]' />
                        <svg className='absolute top-9 right-0' width="48" height="41" viewBox="0 0 48 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.8805 32.2656C23.0523 33.2422 24.9555 33.2422 26.1273 32.2656L44.1273 17.2656C45.2992 16.2891 45.2992 14.7031 44.1273 13.7266C42.9555 12.75 41.0523 12.75 39.8805 13.7266L23.9992 26.9609L8.11797 13.7344C6.94609 12.7578 5.04297 12.7578 3.87109 13.7344C2.69922 14.7109 2.69922 16.2969 3.87109 17.2734L21.8711 32.2734L21.8805 32.2656Z" fill="#5D5D5D" />
                        </svg>
                    </div>
                </div>
                <div className='mt-6'>
                    <label className='font-normal text-[14.38px] leading-[24px] text-[#0D0D0D]'>
                        Adresse *
                    </label>
                    <input type="text" placeholder="" className='w-full h-[48px] mt-2 rounded-[4px] bg-[#F5F5F5]' />
                </div>
                <div className='grid grid-cols-2 gap-8 pt-5' >
                    <div>
                        <label className='font-normal text-[14.38px] leading-[24px] text-[#0D0D0D]'>
                            Ville *
                        </label>
                        <input type="text" placeholder="" className='w-full h-[48px] mt-2 rounded-[4px] bg-[#F5F5F5]' />
                    </div>
                    <div>
                        <label className='font-normal text-[14.38px] leading-[24px] text-[#0D0D0D]'>
                            Code postal *
                        </label>
                        <input type="text" placeholder="" className='w-full h-[48px] mt-2 rounded-[4px] bg-[#F5F5F5]' />
                    </div>
                    <div>
                        <label className='font-normal text-[14.38px] leading-[24px] text-[#0D0D0D]'>
                            Etat/Province *
                        </label>
                        <input type="text" placeholder="" className='w-full h-[48px] mt-2 rounded-[4px] bg-[#F5F5F5]' />
                    </div>
                    <div className='relative'>
                        <label className='font-normal text-[14.38px] leading-[24px] text-[#0D0D0D]'>
                            Pays *
                        </label>
                        <input type="text" placeholder="--Aucun--" className='w-full h-[48px] mt-2 rounded-[4px] bg-[#F5F5F5]' />
                        <svg className='absolute top-9 right-0' width="48" height="41" viewBox="0 0 48 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.8805 32.2656C23.0523 33.2422 24.9555 33.2422 26.1273 32.2656L44.1273 17.2656C45.2992 16.2891 45.2992 14.7031 44.1273 13.7266C42.9555 12.75 41.0523 12.75 39.8805 13.7266L23.9992 26.9609L8.11797 13.7344C6.94609 12.7578 5.04297 12.7578 3.87109 13.7344C2.69922 14.7109 2.69922 16.2969 3.87109 17.2734L21.8711 32.2734L21.8805 32.2656Z" fill="#5D5D5D" />
                        </svg>
                    </div>
                </div>
                <div className='mt-6'>
                    <label className='font-normal text-[14.38px] leading-[24px] text-[#0D0D0D]'>
                        Si vous avez déjà interagi ou prévoyez d'interagir avec Sanofi
                    </label>
                    <input type="text" placeholder="Veuillez saisir un événement du département Partenariat ou une conférence" className='w-full h-[48px] mt-2 rounded-[4px] bg-[#F5F5F5]' />
                </div>
                <div className='mt-6'>
                    <h1 className='font-bold text-[21.94px] leading-[36px] text-[#000000]'>
                        Focus Area *
                    </h1>
                    <div className='grid md:grid-cols-7 grid-cols-2  gap-4 mt-3'>
                        {
                            LabelInfo.map((item) => (
                                <div key={item.id} className='flex gap-3 items-center'>
                                    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="1" width="17" height="17" rx="8.5" stroke="#7A00E6" />
                                    </svg>
                                    <label className=' text-[14.88px] leading-[24px] text-[#0D0D0D]' >
                                        {item.label}
                                    </label>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='mt-6'>
                    <label className='font-bold text-[22.5px] leading-[24px] text-[#0D0D0D]'>
                        Opportunités *
                    </label>
                    <textarea placeholder="Veuillez fournir un aperçu de votre opportunité" className='w-full h-[178px] mt-6 rounded-[4px] bg-[#F5F5F5] resize-none ' />
                </div>
                <div className='relative mt-6  md:w-[576px] w-full'>
                    <label className='font-bold text-[22.5px] leading-[24px] text-[#0D0D0D]'>
                        Phase de développement *
                    </label>
                    <input type="text" placeholder="--Aucun--" className='md:w-[576px] w-full h-[48px] mt-6 rounded-[4px] bg-[#F5F5F5]' />
                    <svg className='absolute top-14 right-0' width="48" height="41" viewBox="0 0 48 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.8805 32.2656C23.0523 33.2422 24.9555 33.2422 26.1273 32.2656L44.1273 17.2656C45.2992 16.2891 45.2992 14.7031 44.1273 13.7266C42.9555 12.75 41.0523 12.75 39.8805 13.7266L23.9992 26.9609L8.11797 13.7344C6.94609 12.7578 5.04297 12.7578 3.87109 13.7344C2.69922 14.7109 2.69922 16.2969 3.87109 17.2734L21.8711 32.2734L21.8805 32.2656Z" fill="#5D5D5D" />
                    </svg>
                </div>
                <div className='mt-8'>
                    <h1 className='font-bold text-[22.88px] leading-[36px] text-[#000000]'>Chargement de documents</h1>
                    <div>
                        <p>(Limite de taille: 25MO - Formats acceptés: docx, doc, pdf, ppt, pptx) - Taille totale des fichiers : 0Taille du/des fichier(s)</p>
                        <button className='w-[312px] flex items-center justify-center gap-3 text-[#FFFFFF] text-[16.3px] uppercase h-[38px] bg-[#7A00E6] rounded-[8px]'>
                            <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.7375 5.70341C17.1142 2.54091 14.3367 0.166748 11 0.166748C8.35083 0.166748 6.05 1.67008 4.90417 3.87008C2.145 4.16341 0 6.50092 0 9.33342C0 12.3676 2.46583 14.8334 5.5 14.8334H17.4167C19.9467 14.8334 22 12.7801 22 10.2501C22 7.83008 20.1208 5.86841 17.7375 5.70341ZM12.8333 8.41675V12.0834H9.16667V8.41675H6.41667L11 3.83341L15.5833 8.41675H12.8333Z" fill="white" />
                            </svg>
                            Télécharger le document
                        </button>
                        <div className='pt-12 text-[14.75px] leading-[24px] text-[#0D0D0D] font-normal'>
                            <p>
                                1. Ce formulaire est uniquement destiné à étudier votre proposition pour un partenariat avec Sanofi dans le cadre d'éventuelles opportunités de Business
                                Development.
                            </p>
                            <p>
                                2. Vos données personnelles sont réservées à l'usage exclusif des équipes de Business Development et sont protégées par notre politique globale de confidentialité
                                que vous pouvez consulter ici Politique Globale de Protection de la Vie Privée et des Données Personnelles de SANOFI - Sanofi.
                            </p>
                            <p>
                                3. Vous déclarez que les informations fournies sur ce site web vous sont propres et que vous n'avez aucune obligation contractuelle ou légale de les garder
                                confidentielles.
                            </p>
                            <p>
                                4. Vous reconnaissez avoir 18 ans ou plus et que vous êtes en mesure de conclure des contrats en vertu de la loi applicable.
                            </p>
                            <p>
                                5. Vous reconnaissez que Sanofi ne reçoit pas vos informations ou suggestions à titre confidentiel et que la réception de vos informations ou suggestions ne crée
                                pas de relation confidentielle entre vous et Sanofi.
                            </p>
                            <p>
                                6. Tous vos droits et recours découlant de votre divulgation à Sanofi sont exclusivement limités aux droits et recours prévus par la législation sur les brevets et le
                                droit d'auteur en vigueur aux États-Unis.
                            </p>
                        </div>
                    </div>
                    <div className='flex gap-3 pt-3'>
                        <input type="checkbox" name="" className=' ' id="" />
                        <p>
                            Je reconnais avoir lu et accepté la politique de soumission électronique.
                        </p>
                    </div>
                    <div className='bg-[#F9F9F9] border mt-4 border-[#D3D3D3] rounded-[3px] w-[302px] h-[76px] flex items-center justify-center gap-3 '>
                        <input type="checkbox" name="" className='w-[28px] h-[28px]' id="" />
                        <label className='font-normal text-[14px] leading-[17px] text-[#000000]'>
                            Je ne suis pas un robot
                        </label>
                        <svg width="59" height="48" viewBox="0 0 59 48" fill="none" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink">
                            <rect x="0.699219" y="0.5" width="58" height="32" fill="url(#pattern0_1_9993)" />
                            <path d="M4.27441 41.0469V45.5H3.37109V40.2168H4.25L4.27441 41.0469ZM5.9248 40.1875L5.91992 41.0273C5.84505 41.0111 5.77344 41.0013 5.70508 40.998C5.63997 40.9915 5.5651 40.9883 5.48047 40.9883C5.27214 40.9883 5.08822 41.0208 4.92871 41.0859C4.76921 41.151 4.63411 41.2422 4.52344 41.3594C4.41276 41.4766 4.32487 41.6165 4.25977 41.7793C4.19792 41.9388 4.15723 42.1146 4.1377 42.3066L3.88379 42.4531C3.88379 42.1341 3.91471 41.8346 3.97656 41.5547C4.04167 41.2747 4.14095 41.0273 4.27441 40.8125C4.40788 40.5944 4.57715 40.4251 4.78223 40.3047C4.99056 40.181 5.23796 40.1191 5.52441 40.1191C5.58952 40.1191 5.66439 40.1273 5.74902 40.1436C5.83366 40.1566 5.89225 40.1712 5.9248 40.1875ZM8.85449 45.5977C8.48665 45.5977 8.15299 45.5358 7.85352 45.4121C7.55729 45.2852 7.30176 45.1077 7.08691 44.8799C6.87533 44.652 6.71257 44.3818 6.59863 44.0693C6.4847 43.7568 6.42773 43.415 6.42773 43.0439V42.8389C6.42773 42.4092 6.49121 42.0267 6.61816 41.6914C6.74512 41.3529 6.91764 41.0664 7.13574 40.832C7.35384 40.5977 7.60124 40.4202 7.87793 40.2998C8.15462 40.1794 8.44108 40.1191 8.7373 40.1191C9.11491 40.1191 9.44043 40.1842 9.71387 40.3145C9.99056 40.4447 10.2168 40.627 10.3926 40.8613C10.5684 41.0924 10.6986 41.3659 10.7832 41.6816C10.8678 41.9941 10.9102 42.3359 10.9102 42.707V43.1123H6.96484V42.375H10.0068V42.3066C9.99382 42.0723 9.94499 41.8444 9.86035 41.623C9.77897 41.4017 9.64876 41.2194 9.46973 41.0762C9.29069 40.9329 9.04655 40.8613 8.7373 40.8613C8.53223 40.8613 8.34342 40.9053 8.1709 40.9932C7.99837 41.0778 7.85026 41.2048 7.72656 41.374C7.60286 41.5433 7.50684 41.75 7.43848 41.9941C7.37012 42.2383 7.33594 42.5199 7.33594 42.8389V43.0439C7.33594 43.2946 7.37012 43.5306 7.43848 43.752C7.51009 43.9701 7.61263 44.1621 7.74609 44.3281C7.88281 44.4941 8.0472 44.6243 8.23926 44.7188C8.43457 44.8132 8.65592 44.8604 8.90332 44.8604C9.22233 44.8604 9.49251 44.7952 9.71387 44.665C9.93522 44.5348 10.1289 44.3607 10.2949 44.1426L10.8418 44.5771C10.7279 44.7497 10.583 44.9141 10.4072 45.0703C10.2314 45.2266 10.015 45.3535 9.75781 45.4512C9.50391 45.5488 9.2028 45.5977 8.85449 45.5977ZM16.3936 43.2393H17.3311C17.2822 43.6885 17.1536 44.0905 16.9453 44.4453C16.737 44.8001 16.4424 45.0817 16.0615 45.29C15.6807 45.4951 15.2054 45.5977 14.6357 45.5977C14.2191 45.5977 13.8398 45.5195 13.498 45.3633C13.1595 45.207 12.8682 44.9857 12.624 44.6992C12.3799 44.4095 12.1911 44.0628 12.0576 43.6592C11.9274 43.2523 11.8623 42.7998 11.8623 42.3018V41.5938C11.8623 41.0957 11.9274 40.6449 12.0576 40.2412C12.1911 39.8343 12.3815 39.486 12.6289 39.1963C12.8796 38.9066 13.1807 38.6836 13.5322 38.5273C13.8838 38.3711 14.2793 38.293 14.7188 38.293C15.2559 38.293 15.71 38.3939 16.0811 38.5957C16.4521 38.7975 16.7402 39.0775 16.9453 39.4355C17.1536 39.7904 17.2822 40.2021 17.3311 40.6709H16.3936C16.348 40.3389 16.2633 40.054 16.1396 39.8164C16.016 39.5755 15.8402 39.39 15.6123 39.2598C15.3844 39.1296 15.0866 39.0645 14.7188 39.0645C14.403 39.0645 14.1247 39.1247 13.8838 39.2451C13.6462 39.3656 13.446 39.5365 13.2832 39.7578C13.1237 39.9792 13.0033 40.2445 12.9219 40.5537C12.8405 40.863 12.7998 41.2064 12.7998 41.584V42.3018C12.7998 42.6501 12.8356 42.9772 12.9072 43.2832C12.9821 43.5892 13.0944 43.8577 13.2441 44.0889C13.3939 44.32 13.5843 44.5023 13.8154 44.6357C14.0465 44.766 14.32 44.8311 14.6357 44.8311C15.0361 44.8311 15.3551 44.7676 15.5928 44.6406C15.8304 44.5137 16.0094 44.3314 16.1299 44.0938C16.2536 43.8561 16.3415 43.5713 16.3936 43.2393ZM21.2471 39.0205L18.8936 45.5H17.9316L20.6416 38.3906H21.2617L21.2471 39.0205ZM23.2197 45.5L20.8613 39.0205L20.8467 38.3906H21.4668L24.1865 45.5H23.2197ZM23.0977 42.8682V43.6396H19.1035V42.8682H23.0977ZM27.7607 42.7119H25.8613V41.9453H27.7607C28.1286 41.9453 28.4264 41.8867 28.6543 41.7695C28.8822 41.6523 29.0482 41.4896 29.1523 41.2812C29.2598 41.0729 29.3135 40.8353 29.3135 40.5684C29.3135 40.3242 29.2598 40.0947 29.1523 39.8799C29.0482 39.665 28.8822 39.4925 28.6543 39.3623C28.4264 39.2288 28.1286 39.1621 27.7607 39.1621H26.0811V45.5H25.1387V38.3906H27.7607C28.2979 38.3906 28.752 38.4834 29.123 38.6689C29.4941 38.8545 29.7757 39.1117 29.9678 39.4404C30.1598 39.766 30.2559 40.1387 30.2559 40.5586C30.2559 41.0143 30.1598 41.4033 29.9678 41.7256C29.7757 42.0479 29.4941 42.2936 29.123 42.4629C28.752 42.6289 28.2979 42.7119 27.7607 42.7119ZM34.0742 38.3906V45.5H33.1465V38.3906H34.0742ZM36.3594 38.3906V39.1621H30.8662V38.3906H36.3594ZM41.5693 43.2393H42.5068C42.458 43.6885 42.3294 44.0905 42.1211 44.4453C41.9128 44.8001 41.6182 45.0817 41.2373 45.29C40.8564 45.4951 40.3812 45.5977 39.8115 45.5977C39.3949 45.5977 39.0156 45.5195 38.6738 45.3633C38.3353 45.207 38.0439 44.9857 37.7998 44.6992C37.5557 44.4095 37.3669 44.0628 37.2334 43.6592C37.1032 43.2523 37.0381 42.7998 37.0381 42.3018V41.5938C37.0381 41.0957 37.1032 40.6449 37.2334 40.2412C37.3669 39.8343 37.5573 39.486 37.8047 39.1963C38.0553 38.9066 38.3564 38.6836 38.708 38.5273C39.0596 38.3711 39.4551 38.293 39.8945 38.293C40.4316 38.293 40.8857 38.3939 41.2568 38.5957C41.6279 38.7975 41.916 39.0775 42.1211 39.4355C42.3294 39.7904 42.458 40.2021 42.5068 40.6709H41.5693C41.5238 40.3389 41.4391 40.054 41.3154 39.8164C41.1917 39.5755 41.016 39.39 40.7881 39.2598C40.5602 39.1296 40.2624 39.0645 39.8945 39.0645C39.5788 39.0645 39.3005 39.1247 39.0596 39.2451C38.8219 39.3656 38.6217 39.5365 38.459 39.7578C38.2995 39.9792 38.179 40.2445 38.0977 40.5537C38.0163 40.863 37.9756 41.2064 37.9756 41.584V42.3018C37.9756 42.6501 38.0114 42.9772 38.083 43.2832C38.1579 43.5892 38.2702 43.8577 38.4199 44.0889C38.5697 44.32 38.7601 44.5023 38.9912 44.6357C39.2223 44.766 39.4958 44.8311 39.8115 44.8311C40.2119 44.8311 40.5309 44.7676 40.7686 44.6406C41.0062 44.5137 41.1852 44.3314 41.3057 44.0938C41.4294 43.8561 41.5173 43.5713 41.5693 43.2393ZM48.4346 41.4473V42.2139H44.5869V41.4473H48.4346ZM44.7334 38.3906V45.5H43.791V38.3906H44.7334ZM49.2549 38.3906V45.5H48.3174V38.3906H49.2549ZM53.6494 39.0205L51.2959 45.5H50.334L53.0439 38.3906H53.6641L53.6494 39.0205ZM55.6221 45.5L53.2637 39.0205L53.249 38.3906H53.8691L56.5889 45.5H55.6221ZM55.5 42.8682V43.6396H51.5059V42.8682H55.5Z" fill="#555555" />
                            <defs>
                                <pattern id="pattern0_1_9993" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_1_9993" transform="scale(0.0208333)" />
                                </pattern>
                                <image id="image0_1_9993" width="48" height="48" xlinkHref="data:image/png;base64,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" />
                            </defs>
                        </svg>
                    </div>
                    <div className='mt-6 pb-6'>
                        <button className='w-[125px] h-[44px] font-normal text-[15px] leading-[24px] text-[#FFFFFF] rounded-[4px] bg-[#7A00E6]'>
                            Soumettre
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainForm