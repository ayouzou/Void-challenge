// import { cn } from '@/pages/lib/utils'
import Link from 'next/link'
import React from 'react'
const NavInfo = [
    { id: 1, label: "Contact" },
    { id: 2, label: "Mentions légales" },
    { id: 3, label: "Vie Privée et Données Personnelles" },
    { id: 4, label: "Politique des cookies" },
    { id: 5, label: "Entreprise Today" },
    { id: 7, label: "Nos publications" },
    { id: 8, label: "Plan du site" },
    { id: 9, label: "Annuaire" },
    { id: 10, label: "Accessibilité : conformité partielle" },
    { id: 11, label: "Code de Conduite" }
]
const Footer1boijxs = () => {
    return (
        <div className=' pl-5 pt-5   bg-[#FFFFFF] '>
            <nav className='h-[88px] grid xl:grid-cols-8 grid-cols-1 gap-[23px] '>
                {
                    NavInfo.map((_) => (
                        <Link key={_.id} href={'#'} className={('h-[24px] font-normal text-[15.38px] leading-[24px] text-[#0D0D0D]')}  >
                            {_.label}
                        </Link>
                    ))
                }
            </nav>
            <div className=' xl:mt-10 mt-[370px] '>
                    <span className=' font-normal text-[14.75px] leading-[24px] text-[#0D0D0D]'>
                        © Entreprise 2004-2024 - Tous droits <br /> réservés
                    </span>
                </div>

        </div>
    )
}

export default Footer1boijxs