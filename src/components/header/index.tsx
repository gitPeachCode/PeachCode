'use client'

import { PopoverMenu } from './popover-menu'

import { useHeaderLinks } from '@/hooks/useHeaderLinks'
import { AlumniSans } from '@app/fonts'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export const Header = () => {
    const router = usePathname()
    const headerLinks = useHeaderLinks

    const handleSearchBar = () => {
        const formContainer = document.getElementById('search-container') as HTMLFormElement
        const searchBar = document.getElementById('search-bar') as HTMLInputElement
        const openCloseSearch = document.getElementById('open-close-search') as HTMLButtonElement
        const searchButton = document.getElementById('search-button') as HTMLButtonElement

        const addStretchAnimate = () => {
            formContainer.classList.add('stretch-box-animate')
            setTimeout(() => {
                formContainer.classList.remove('w-10')
                formContainer.classList.add('w-[calc(10rem_+_1.5rem_+_2.25rem)]')

                formContainer.classList.remove('stretch-box-animate')
            }, 500)
        }
        const removeStretchAnimate = () => {
            formContainer.classList.add('tighten-box-animate')
            setTimeout(() => {
                formContainer.classList.remove('w-[calc(10rem_+_1.5rem_+_2.25rem)]')
                formContainer.classList.add('w-10')

                formContainer.classList.remove('tighten-box-animate')
            }, 500)
        }

        if (searchBar.classList.contains('hidden')) {
            formContainer.classList.remove('rounded-full')
            formContainer.classList.add('rounded-md')

            searchBar.classList.remove('hidden')
            searchBar.classList.add('inline-block')
            searchButton.classList.remove('hidden')
            searchButton.classList.add('inline-block')

            formContainer.classList.remove('bg-transparent')
            formContainer.classList.add('bg-dark-night')

            openCloseSearch.classList.remove('w-9')
            openCloseSearch.classList.add('w-6')
            openCloseSearch.classList.remove('bg-zinnia')
            openCloseSearch.classList.add('bg-azure')
            openCloseSearch.classList.remove('bg-[url("/assets/icons/search.svg")]')
            openCloseSearch.classList.add('rotate-180')
            openCloseSearch.classList.add('bg-[url("/assets/icons/chevron.svg")]')

            addStretchAnimate()
            searchBar.focus() // Add focus on input
        } else {
            removeStretchAnimate()

            setTimeout(() => {
                formContainer.classList.remove('rounded-md')
                formContainer.classList.add('rounded-full')

                searchBar.classList.remove('inline-block')
                searchBar.classList.add('hidden')
                searchButton.classList.remove('inline-block')
                searchButton.classList.add('hidden')

                openCloseSearch.classList.remove('w-6')
                openCloseSearch.classList.add('w-9')
                openCloseSearch.classList.remove('bg-azure')
                openCloseSearch.classList.add('bg-zinnia')
                openCloseSearch.classList.remove('bg-[url("/assets/icons/chevron.svg")]')
                openCloseSearch.classList.remove('rotate-180')
                openCloseSearch.classList.add('bg-[url("/assets/icons/search.svg")]')
                openCloseSearch.blur() // Remove focus on button

                formContainer.classList.remove('bg-dark-night')
                formContainer.classList.add('bg-transparent')
            }, 500)
        }
    }

    return (
        <header className='w-full p-4 md:px-[7.5rem]'>
            <div className='w-full flex flex-col items-center mb-8'>
                <span className='w-12 h-12 bg-[url("/favicon.svg")] bg-no-repeat bg-center bg-cover' />

                <p className={`${AlumniSans.className} font-black tracking-[1px] text-6xl`}>
                    <span className='text-dark-cyan [text-shadow:_-1px_-1px_0_rgb(253_119_82),_-1px_1px_0_rgb(253_119_82),_1px_1px_0_rgb(253_119_82),_1px_-1px_0_rgb(253_119_82)] selection:text-[#125b32]'>PEACH</span>
                    <span>CODE</span>
                </p>
            </div>

            <div className='w-full flex items-center justify-between gap-4'>
                <span className='w-[1px] hidden sm:flex md:hidden lg:flex' />

                <PopoverMenu routerPath={router} headerLinks={headerLinks} />

                <nav className='hidden sm:inline-flex md:hidden lg:inline-flex'>
                    <ul className='flex gap-4 xl:gap-8 2xl:gap-10'>
                        { headerLinks.map((menuRouter, index) => {
                            const activeRouter = menuRouter.href === router ? 'text-zinnia underline' : 'glacier-white hover:underline'
                            return (
                                <li key={index}>
                                    <Link href={menuRouter.href} className={`${activeRouter} text-lg lg:text-xl text-nowrap underline-offset-4`}>
                                        {menuRouter.name}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>

                <form id='search-container' className='w-10 h-10 min-w-10 max-w-[calc(10rem_+_1.5rem_+_2.25rem)] bg-transparent border-2 border-zinnia hidden sm:flex md:hidden lg:flex justify-end rounded-full overflow-hidden'>
                    <input
                        id='search-bar'
                        name='search'
                        type='search'
                        className='w-40 h-9 bg-dark-night text-white/50 placeholder:text-white/20 px-2 hidden'
                        placeholder='Pesquisar'
                        pattern='.*\S.*'
                        required
                    />

                    <button
                        id='open-close-search'
                        onClick={handleSearchBar}
                        title='Botão abrir/fechar barra de pesquisa'
                        type='button'
                        className='w-9 h-9 bg-[url("/assets/icons/search.svg")] bg-no-repeat bg-center bg-auto bg-zinnia hover:bg-transparent focus:bg-transparent hover:filter-zinnia focus:filter-zinnia'
                    />
                    <button
                        id='search-button'
                        title='Pesquisar'
                        type='submit'
                        className='w-9 h-w-9 bg-[url("/assets/icons/search.svg")] bg-no-repeat bg-center bg-auto bg-zinnia hover:brightness-125 hidden'
                    />
                </form>
            </div>
        </header>
    )
}