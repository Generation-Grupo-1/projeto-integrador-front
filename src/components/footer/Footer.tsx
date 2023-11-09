import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {

    const data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-black text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                            Apostilas Educa | Copyright: {data}
                        </p>
                    <p className='text-lg'>Acesse nossas redes sociais</p>
                    <div className='flex gap-2'>
                        <LinkedinLogo className='hover:text-cyan-300' size={48} weight='bold' />
                        <InstagramLogo className='hover:text-red-700' size={48} weight='bold' />
                        <FacebookLogo className='hover:text-blue-900' size={48} weight='bold' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer