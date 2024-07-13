import {
    address,
    email,
    phone,
    instagramUrl,
    linkedinUrl,
    whatsappUrl
} from '@PeachCodeData'

import { useHeaderLinks } from '@hooks/useHeaderLinks'
import { AlumniSans } from '@app/fonts'

import Link from 'next/link'

export const Footer = () => {
    const headerLinks = useHeaderLinks

    return (
        <footer className='w-full bg-white/[0.01] border-t border-white/5 flex justify-center pb-12 sm:pb-4'>
            <div className='w-full p-4 md:px-32 grid grid-cols-1 gap-y-16 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3'>
                <div className='w-fit mx-auto flex flex-col gap-8'>
                    <p className={`${AlumniSans.className} text-center sm:text-start md:text-center lg:text-start font-black tracking-[1px] text-3xl`}>
                        <span className='text-dark-cyan [text-shadow:_-1px_-1px_0_rgb(253_119_82),_-1px_1px_0_rgb(253_119_82),_1px_1px_0_rgb(253_119_82),_1px_-1px_0_rgb(253_119_82)] selection:text-[#125b32]'>PEACH</span>
                        <span>CODE</span>
                    </p>

                    <div className='flex flex-col gap-2 lg:gap-4'>
                        <div className='flex items-center gap-4'>
                            <span className='w-12 h-12 bg-[url("/assets/icons/phone.svg")] bg-no-repeat bg-center bg-white/5 rounded-full' />

                            <div>
                                <p className='text-glacier-white/80 text-sm'>Telefone</p>
                                <p>{phone}</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-4'>
                            <span className='w-12 h-12 bg-[url("/assets/icons/email.svg")] bg-no-repeat bg-center bg-white/5 rounded-full' />

                            <div>
                                <p className='text-glacier-white/80 text-sm'>Email</p>
                                <p>{email}</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-4'>
                            <span className='w-12 h-12 bg-[url("/assets/icons/map-pointer.svg")] bg-no-repeat bg-center bg-white/5 rounded-full' />

                            <div>
                                <p className='text-glacier-white/80 text-sm'>Endereço</p>
                                <p>{address}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-fit h-fit mx-auto flex flex-col gap-8'>
                    <p className='w-full text-center sm:text-start md:text-center lg:text-start text-lg lg:text-xl'>Links</p>

                    <nav className='w-full'>
                        <ul className='flex flex-col items-center sm:items-start md:items-center lg:items-start gap-2'>
                            { headerLinks.map((menuRouter, index) =>
                                <li key={index}>
                                    <Link href={menuRouter.href} className='text-glacier-white/80 text-sm text-nowrap hover:underline underline-offset-4'>
                                        {menuRouter.name}
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </nav>
                </div>

                <div className='h-fit my-auto flex-center flex-col gap-4 sm:col-span-2 md:col-span-1'>
                    <div className='flex gap-2'>
                        <Link href={whatsappUrl} title='Entrar em contato via Whatsapp' className='bg-[url("/assets/icons/social/whatsapp.svg")] social-link-button' />
                        <Link href={linkedinUrl} title='Ir para Linkedin da PeachCode' className='bg-[url("/assets/icons/social/linkedin.svg")] social-link-button' />
                        <Link href={instagramUrl} title='Ir para Instagram da PeachCode' className='bg-[url("/assets/icons/social/instagram.svg")] social-link-button' />
                    </div>

                    <small className='w-full text-center text-wrap text-sm'>© Copyright Peach Code | Todos os direitos reservados.</small>
                </div>
            </div>
        </footer>
    )
}