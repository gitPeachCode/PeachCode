const address = 'Brasil, São Paulo | SP'
const email = 'contato@peachcode.com.br'
const phone = '+55 (11) 9 1234-1234'

const rootUrl = 'https://peach-code.dev'
const linkedinUrl = 'https://www.linkedin.com/company/peach-code'
const instagramUrl = 'https://www.instagram.com/peach-code'
const whatsappUrl = 'https://wa.me/+' + phone.replace(/\D/g, '')

const appRoutesAbsolutePath = [
    '/',
    '/services',
    '/projects',
    '/about-us'
]

export {
    rootUrl,
    linkedinUrl,
    instagramUrl,
    whatsappUrl,
    address,
    email,
    phone,
    appRoutesAbsolutePath
}