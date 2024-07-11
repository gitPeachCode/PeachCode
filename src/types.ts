
/* -------------------------------------------------- */

/**
 * APP_ROUTES_NAME - Title of the Header links.
 **/
export enum APP_ROUTES_NAME {
    HOME      = 'HOME',
    SERVICES  = 'SERVIÇOS',
    PROJECTS  = 'PROJETOS',
    ABOUT     = 'SOBRE NÓS'
}

/* -------------------------------------------------- */

/**
 * MenuItensType - Type of Header items, link and name of each.
 * @param {string} href
 * @param {string[]} name
 **/
export type MenuItensType = {
    href: string
    name: APP_ROUTES_NAME
}