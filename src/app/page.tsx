import GenericImage1 from '@../public/assets/images/generic-image-1.png'
import GenericImage2 from '@../public/assets/images/generic-image-2.png'
import GenericImage3 from '@../public/assets/images/generic-image-3.png'

import Image from 'next/image'

export default function Home() {
    return (
        <main className='flex-center'>
            <section className='w-full grid grid-cols-1 gap-16 sm:gap-8 md:gap-y-16 xl:gap-8 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'>
                <div className='w-full max-w-80 h-fit md:max-w-[22rem] lg:max-w-96 m-auto bg-[url("/assets/icons/logo/peach-pattern.svg")] bg-dark-night bg-[top_left_35%] border-2 border-azure rounded-2xl overflow-hidden'>
                    <Image
                        className='w-full h-auto'
                        src={GenericImage1}
                        width={333}
                        height={222}
                        placeholder='blur'
                        priority={false}
                        alt='Image ilustrativa para descrever nossa Missão como empresa.'
                    />

                    <div className='-mt-6 xl:-mt-8 px-4 pb-2 flex flex-col items-center justify-end gap-2'>
                        <span className='w-12 h-12 lg:w-[52px] lg:h-[52px] xl:w-14 xl:h-14 bg-[url("/assets/icons/book-reader.svg")] bg-no-repeat bg-center bg-[length:60%] border-[3px] bg-zinnia border-white flex-center rounded-full' />

                        <h3 className='text-xl xl:text-2xl'>Missão</h3>
                        <p className='w-full text-glacier-white/80 lg:text-lg xl:text-xl text-center sm:text-start md:text-center lg:text-start text-wrap'>Capacitar nossos clientes a prosperar em um mundo cada vez mais digital. Buscamos constantemente inovar, explorar as últimas tendências tecnológicas e entregar resultados excepcionais que impulsionem o crescimento e a eficiência. Acreditamos que o sucesso de nossos clientes é o nosso sucesso.</p>
                    </div>
                </div>

                <div className='w-full max-w-80 h-fit md:max-w-[22rem] lg:max-w-96 m-auto bg-[url("/assets/icons/logo/peach-pattern.svg")] bg-dark-night bg-[top_left_35%] border-2 border-azure rounded-2xl overflow-hidden'>
                    <Image
                        className='w-full h-auto'
                        src={GenericImage2}
                        width={333}
                        height={222}
                        placeholder='blur'
                        priority={false}
                        alt='Image ilustrativa para descrever nossa Visão como empresa.'
                    />

                    <div className='-mt-6 xl:-mt-8 px-4 pb-2 flex flex-col items-center justify-end gap-2'>
                        <span className='w-12 h-12 lg:w-[52px] lg:h-[52px] xl:w-14 xl:h-14 bg-[url("/assets/icons/bullseye.svg")] bg-no-repeat bg-center bg-[length:60%] border-[3px] bg-zinnia border-white flex-center rounded-full' />

                        <h3 className='text-xl xl:text-2xl'>Visão</h3>
                        <p className='w-full text-glacier-white/80 lg:text-lg xl:text-xl text-center sm:text-end md:text-center lg:text-end xl:text-center text-wrap'>Estamos comprometidos em ser mais do que apenas uma consultoria em tecnologia; somos parceiros que conduzem o sucesso de nossos clientes por meio da excelência tecnológica.</p>
                    </div>
                </div>

                <div className='w-full max-w-80 h-fit md:max-w-[22rem] lg:max-w-96 sm:col-span-2 md:col-span-1 lg:col-span-2 xl:col-span-1 m-auto bg-[url("/assets/icons/logo/peach-pattern.svg")] bg-dark-night bg-[top_left_35%] border-2 border-azure rounded-2xl overflow-hidden'>
                    <Image
                        className='w-full h-auto'
                        src={GenericImage3}
                        width={333}
                        height={222}
                        placeholder='blur'
                        priority={false}
                        alt='Image ilustrativa para descrever nossa Valores como empresa.'
                    />

                    <div className='-mt-6 xl:-mt-8 px-4 pb-2 flex flex-col items-center justify-end gap-2'>
                        <span className='w-12 h-12 lg:w-[52px] lg:h-[52px] xl:w-14 xl:h-14 bg-[url("/assets/icons/landscape.svg")] bg-no-repeat bg-center bg-[length:60%] border-[3px] bg-zinnia border-white flex-center rounded-full' />

                        <h3 className='text-xl xl:text-2xl'>Valores</h3>
                        <p className='w-full text-glacier-white/80 lg:text-lg xl:text-xl text-center xl:text-end text-wrap'>Buscamos inovação e colaboração para impulsionar soluções sólidas, comprometendo-nos a superar expectativas e alcançar a excelência em todos os aspectos, proporcionando resultados de qualidade superior aos nossos clientes.</p>
                    </div>
                </div>
            </section>
        </main>
    )
}
