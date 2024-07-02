import React from 'react'
import Card from './Card'
const image1 = 'https://s3-alpha-sig.figma.com/img/36b6/7efe/3596120bc5d52f206e5672290949f40e?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ikmXJI8APLdc4yOOF-dv5AApN18oVUYKxPHpkGtZ4Wwjutw16tqBcNGKNg3AerM3gOdMtHYGf1tnWN5PDqTkfMG7rfSp6L9YLoU8EE1KMd1a7Y4-jKkUD3QEeUknfoYVa0DPJEp7o~wkw5dAKLHxme9oWove0-7tBICcXmmZNwoFjpo8TSvqRg~EhbJZpqMNHEWU5ow9aozXbfsmGdZOEJOM71iUOTZ9iEmTeSi-LjC0qH8TFXIbOs2TzPZHnF7lCLHm3gXirSaOeQcgnLJTDf-GVNknMQAYdQEdvRHMDcxFfDlGypCJ1pmHUQtuymsaSy4SQhWtHKuxeFwjEsYnqQ__'
const image2 = 'https://s3-alpha-sig.figma.com/img/64d3/7922/15e29c8c1ff79d6e3f5d388b3d6c5c3e?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HZg0eRR9VoPVK~odgA8P1pl74BF1o6hCnNmMJdw9-FrGhOKVC8pMMBf6A5qxvI76Ro0AzMYB25GsyeOybxPvyNrpdh3DKwEXABxDci~21QEMtf9ymW5cXOH9Ggw6CuN4swXq1Nnx9Nhm7ekynGdYRl2OnWEoIvvx9eedDeH-ygbmZenqk5b6tZAqc2Qlukci4KOwIsdj3rFvO08hhb4UZVj5HOLHec54xw4AKroCopKFYd7x3lGv-6D0N~8bhcwAOelnDJ5r2ZrdjByejSPXVntLfSfEnPp7L6e4LMRq~iIW1Dg6B39N1vdKw~E9xciRhJfWXSw-bGgZomQsV7mlkg__'
const image3 = 'https://s3-alpha-sig.figma.com/img/b04a/2610/98a7102f8ee41eb53cea34d4dfa49d7b?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D8URBmAJAyGr6LBloXo8AGG-A-Gs6YlEyf0ZMB7lbFg8tcO4QZ3URYXd6Y10gd8Otc8d4q7x0WxS3SWHGDu29Z6B8khJvpsyHUO19Q9b8rAmGoDpXIhxxaq~fnAoGbdu00V7uvZR07bZLlRdDw6WiYiG~N91Z2BafMWNYCNxIIUyDGmXCcqoGP1iAWyxIp21SOjllTBlu0JEf0FYip~a40ftUXXdGWvpZau-5-GPvysiDTmDtqGfnMOaX2viaU7QENcD6Qc1ddIYv34v4GlPnSB3CIgIbbe0fteq7BuY37mdZlRl2ahiJfypmiAunfRZA5j-z1cdXq3-7IvNdqtyZA__'
const image4 = 'https://s3-alpha-sig.figma.com/img/ae31/5d31/0493c68241add7598f6b4447c9fd236c?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lwSxsjESa0Si9N-OR00PxbaIie-sQf1x~ISnKveLqHNRaof6tj8Rf8G95uiEt-B3nYSb3lgpDEkDWzpAs9QKbsDAA3eBgAFCH5GY3Qt5Km9MEYtdEIeixIyFUL3mhyfVQ~HWBxP91wxe37I2MrUrXpdw~PFdCCDMk68kBYFbWrjUpUm2gY~VwokcknOLZmqpScDMM6FEnvwZuY2z0ad3lx5Jy6HbwqpO8a3IhLZPJE06KBI-GS9R~zLTSa2EN3WPaVK73dM-mvhu8psw6IEYNERx9rF-PfP7omc20FF2inaGNuiL3gMcKWprlwzzuB2pb6zG6CL0pkkfP~z-F5y85w__'

const Card_info = [
    {
        id: 1,
        name: 'Frédéric Oudéa',
        post: 'Président du Conseil d’Administration',
        motif: 'Fin du mandat en cours 2027',
        link: "En savoir plus",
        image: image1
    },
    {
        id: 2,
        name: 'Paul Hudson',
        post: 'Directeur Général',
        motif: 'Fin du mandat en cours 2026',
        link: "En savoir plus",
        image: image2
    },
    {
        id: 3,
        name: 'Frédéric Oudéa',
        post: 'Président du Conseil d’Administration',
        motif: 'Fin du mandat en cours 2027',
        link: "En savoir plus",
        image: image3
    },
    {
        id: 4,
        name: 'Frédéric Oudéa',
        post: 'Président du Conseil d’Administration',
        motif: 'Fin du mandat en cours 2027',
        link: "En savoir plus",
        image: image4
    },
    {
        id: 5,
        name: 'Frédéric Oudéa',
        post: 'Président du Conseil d’Administration',
        motif: 'Fin du mandat en cours 2027',
        link: "En savoir plus",
        image: image3
    },
    {
        id: 6,
        name: 'Frédéric Oudéa',
        post: 'Président du Conseil d’Administration',
        motif: 'Fin du mandat en cours 2027',
        link: "En savoir plus",
        image: image4
    },
    {
        id: 7,
        name: 'Frédéric Oudéa',
        post: 'Président du Conseil d’Administration',
        motif: 'Fin du mandat en cours 2027',
        link: "En savoir plus",
        image: image1
    },
    {
        id: 8,
        name: 'Frédéric Oudéa',
        post: 'Président du Conseil d’Administration',
        motif: 'Fin du mandat en cours 2027',
        link: "En savoir plus",
        image: image3
    },
    {
        id: 9,
        name: 'Frédéric Oudéa',
        post: 'Président du Conseil d’Administration',
        motif: 'Fin du mandat en cours 2027',
        link: "En savoir plus",
        image: image2
    },
    {
        id: 10,
        name: 'Frédéric Oudéa',
        post: 'Président du Conseil d’Administration',
        motif: 'Fin du mandat en cours 2027',
        link: "En savoir plus",
        image: image4
    }

]
const CardsConseil = () => {
    return (
        <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-4 gap-3 md:py-0 p-3 '>
            {
                Card_info.map((item) => (
                    <Card key={item.id} name={item.name} post={item.post} motif={item.motif} image={item.image}  />
                ))
            }
        </div>
    )
}

export default CardsConseil

