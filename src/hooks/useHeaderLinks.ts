import { APP_ROUTES_NAME, type MenuItensType } from '@types'
import { appRoutesAbsolutePath } from '../PeachCodeData'

export const useHeaderLinks: Array<MenuItensType> = [
    { href: appRoutesAbsolutePath[0], name: APP_ROUTES_NAME.HOME },
    { href: appRoutesAbsolutePath[1], name: APP_ROUTES_NAME.SERVICES },
    { href: appRoutesAbsolutePath[2], name: APP_ROUTES_NAME.PROJECTS },
    { href: appRoutesAbsolutePath[3], name: APP_ROUTES_NAME.ABOUT }
]