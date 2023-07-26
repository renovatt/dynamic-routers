import Link from 'next/link'
import Image from 'next/image'
import error from '../../assets/error.png'

export const NotFoundPage = () => {
    return (
        <section className='flex items-center justify-center flex-col h-[90vh] w-full py-0 px-24 bg-transparent'>
            <figure className='flex items-center justify-center w-52 h-52'>
                <Image
                    className='h-full w-full'
                    src={error}
                    alt={'error-image'}
                    width={1000}
                    height={1000}
                    priority
                />
            </figure>
            <p className='text-center text-white text-5xl mt-8'>Página não encontrada!</p>

            <Link href='/' className='flex-1 rounded shadow-sm px-3 py-2 outline-none transition-all ease-in cursor-pointer bg-white text-textPrimary hover:font-bold hover:bg-backgroundPrimary hover:text-white text-center w-40 h-20 max-h-10 mt-8'>Voltar</Link>
        </section>
    )
}