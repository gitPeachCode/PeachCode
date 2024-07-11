import type { MenuItensType } from '@types'

import Link from 'next/link'

export const PopoverMenu = ({ routerPath, headerLinks }: { routerPath: string, headerLinks: Array<MenuItensType> }) => {
    const handleMenu = () => {
        const openCloseMenu = document.getElementById('open-close-menu') as HTMLButtonElement
        const overlay = document.getElementById('menu-overlay') as HTMLSpanElement
        const container = document.getElementById('menu-container') as HTMLDivElement
        const content = document.getElementById('menu-content') as HTMLMenuElement

        const clickControl = () => {
            openCloseMenu.disabled = true
            openCloseMenu.classList.remove('cursor-pointer')
            openCloseMenu.classList.add('cursor-not-allowed')
            handleSearchBar('menu')
            setTimeout(() => {
                openCloseMenu.disabled = false
                openCloseMenu.classList.remove('cursor-not-allowed')
                openCloseMenu.classList.add('cursor-pointer')
            }, 500)
        }

        if (content.classList.contains('hidden') && overlay.classList.contains('hidden')) {
            clickControl()

            overlay.classList.remove('hidden')
            overlay.classList.add('flex')

            container.classList.add('rounded-b-none')

            content.classList.remove('hidden')
            content.classList.add('flex')
        } else {
            clickControl()

            overlay.classList.remove('flex')
            overlay.classList.add('hidden')

            container.classList.remove('rounded-b-none')

            content.classList.remove('flex')
            content.classList.add('hidden')

            openCloseMenu.blur() // Remove focus on button
        }
    }

    const handleSearchBar = (origin: 'search' | 'menu') => {
        const formContainer = document.getElementById('search-container-popover') as HTMLFormElement
        const searchBar = document.getElementById('search-bar-popover') as HTMLInputElement
        const openCloseSearch = document.getElementById('open-close-search-popover') as HTMLButtonElement
        const searchButton = document.getElementById('search-button-popover') as HTMLButtonElement

        const addStretchAnimate = (hasBackButton=true) => {
            const openCloseSearch_width = hasBackButton ? '+_1.5rem_' : ''
            formContainer.classList.add('stretch-box-animate')
            setTimeout(() => {
                formContainer.classList.remove('w-12')
                formContainer.classList.add(`w-[calc(10rem_${openCloseSearch_width}+_2.25rem)]`)

                formContainer.classList.remove('stretch-box-animate')
            }, 500)
        }
        const removeStretchAnimate = (hasBackButton=true) => {
            const openCloseSearch_width = hasBackButton ? '+_1.5rem_' : ''
            formContainer.classList.add('tighten-box-animate')
            setTimeout(() => {
                formContainer.classList.remove(`w-[calc(10rem_${openCloseSearch_width}+_2.25rem)]`)
                formContainer.classList.add('w-12')

                formContainer.classList.remove('tighten-box-animate')
            }, 500)
        }

        if(origin === 'search') {
            if (searchBar.classList.contains('hidden')) {
                searchBar.classList.remove('hidden')
                searchBar.classList.add('inline-block')
                searchButton.classList.remove('hidden')
                searchButton.classList.add('inline-block')

                formContainer.classList.remove('bg-transparent')
                formContainer.classList.add('bg-dark-night')

                openCloseSearch.classList.remove('w-12')
                openCloseSearch.classList.add('w-6')
                openCloseSearch.classList.remove('bg-zinnia')
                openCloseSearch.classList.add('bg-azure')
                openCloseSearch.classList.remove('bg-[url("/assets/icons/search.svg")]')
                openCloseSearch.classList.add('bg-[url("/assets/icons/chevron.svg")]')

                addStretchAnimate()
                searchBar.focus() // Add focus on input
            } else {
                removeStretchAnimate()

                setTimeout(() => {
                    searchBar.classList.remove('inline-block')
                    searchBar.classList.add('hidden')
                    searchButton.classList.remove('inline-block')
                    searchButton.classList.add('hidden')

                    openCloseSearch.classList.remove('w-6')
                    openCloseSearch.classList.add('w-12')
                    openCloseSearch.classList.remove('bg-azure')
                    openCloseSearch.classList.add('bg-zinnia')
                    openCloseSearch.classList.remove('bg-[url("/assets/icons/chevron.svg")]')
                    openCloseSearch.classList.add('bg-[url("/assets/icons/search.svg")]')
                    openCloseSearch.blur() // Remove focus on button

                    formContainer.classList.remove('bg-dark-night')
                    formContainer.classList.add('bg-transparent')
                }, 500)
            }
        } else if(origin === 'menu') {
            if (searchBar.classList.contains('hidden')) {
                openCloseSearch.classList.remove('flex')
                openCloseSearch.classList.add('hidden')

                searchBar.classList.remove('hidden')
                searchBar.classList.add('inline-block')
                searchButton.classList.remove('hidden')
                searchButton.classList.add('inline-block')

                addStretchAnimate(false)
            } else {
                if(openCloseSearch.classList.contains('hidden')) {
                    removeStretchAnimate(false)

                    setTimeout(() => {
                        searchBar.classList.remove('inline-block')
                        searchBar.classList.add('hidden')
                        searchButton.classList.remove('inline-block')
                        searchButton.classList.add('hidden')

                        openCloseSearch.classList.remove('hidden')
                        openCloseSearch.classList.add('flex')
                    }, 500)
                } else {
                    openCloseSearch.classList.remove('flex')
                    openCloseSearch.classList.add('hidden')

                    formContainer.classList.remove('w-[calc(10rem_+_1.5rem_+_2.25rem)]')
                    formContainer.classList.add('w-[calc(10rem_+_2.25rem)]')

                    openCloseSearch.classList.remove('w-6')
                    openCloseSearch.classList.add('w-12')
                    openCloseSearch.classList.remove('bg-azure')
                    openCloseSearch.classList.add('bg-zinnia')
                    openCloseSearch.classList.remove('bg-[url("/assets/icons/chevron.svg")]')
                    openCloseSearch.classList.add('bg-[url("/assets/icons/search.svg")]')

                    formContainer.classList.remove('bg-dark-night')
                    formContainer.classList.add('bg-transparent')
                }
            }
        }
    }

    return (
        <>
            <span id='menu-overlay' onClick={handleMenu} className='w-screen h-screen bg-[#0000004d] backdrop-blur-[3px] fixed top-0 left-0 hidden z-40' />

            <div id='menu-container' className='w-fit border-2 border-zinnia flex items-center sm:hidden md:flex lg:hidden rounded-md relative selection:bg-clover-green selection:text-white transition-all z-50'>
                <button id='open-close-menu' onClick={handleMenu} title='Botão abrir/fechar menu de links de navegação' className='w-12 h-[2.33rem] bg-[url("/assets/icons/menu.svg")] bg-no-repeat bg-center bg-auto border-r-2 border-zinnia flex items-center justify-center focus:rounded-tl-[0.063rem] hover:bg-zinnia focus:bg-zinnia filter-zinnia hover:filter-none focus:filter-none transition-all' />

                <nav id='menu-content' className='w-[calc(100%_+_4px)] hidden absolute top-[2.45rem] -left-[2px] overflow-hidden z-[60]'>
                    <ul className='w-full flex flex-col'>
                        { headerLinks.map((menuRouter, index) => {
                            const activeRouter_link = menuRouter.href === routerPath ? 'text-dark-night font-medium' : 'text-glacier-white'
                            const activeRouter_container = menuRouter.href === routerPath ?
                                index === headerLinks.length -1 ?
                                    'bg-zinnia border-zinnia hover:brightness-90 rounded-b-md' // Last active
                                    :
                                    'bg-zinnia border-zinnia hover:brightness-90' // Active
                                :
                                index === headerLinks.length -1 ?
                                    'bg-dark-cyan border-b-2 border-glacier-white hover:bg-dark-night rounded-b-md pb-2' // Last inactive
                                    :
                                    index === 0 ?
                                        'bg-dark-cyan border-glacier-white hover:bg-dark-night pt-2' // First inactive
                                        :
                                        'bg-dark-cyan border-glacier-white hover:bg-dark-night' // Inactive

                            return (
                                <li key={index} className={`border-x-2 ${activeRouter_container} flex`}>
                                    <Link href={menuRouter.href} className={`w-full ${activeRouter_link} text-center text-xl text-nowrap py-1`}>
                                        {menuRouter.name}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>

                <form id='search-container-popover' className='w-12 h-[2.33rem] min-w-12 max-w-[calc(10rem_+_1.5rem_+_3rem)] bg-transparent flex overflow-hidden'>
                    <input
                        id='search-bar-popover'
                        name='search'
                        type='search'
                        className='w-40 h-h-[2.33rem] bg-dark-night text-white/50 placeholder:text-white/20 px-2 hidden'
                        placeholder='Pesquisar'
                        pattern='.*\S.*'
                        required
                    />

                    <button
                        id='open-close-search-popover'
                        onClick={() => handleSearchBar('search')}
                        title='Botão abrir/fechar barra de pesquisa'
                        type='button'
                        className='w-12 h-[2.33rem] bg-[url("/assets/icons/search.svg")] bg-no-repeat bg-center bg-auto bg-zinnia hover:bg-transparent focus:bg-transparent hover:filter-zinnia focus:filter-zinnia'
                    />
                    <button
                        id='search-button-popover'
                        title='Pesquisar'
                        type='submit'
                        className='w-12 h-w-[2.33rem] bg-[url("/assets/icons/search.svg")] bg-no-repeat bg-center bg-auto bg-zinnia hover:brightness-125 hidden'
                    />
                </form>
            </div>
        </>
    )
}