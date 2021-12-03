import Image from 'next/image'
import Link from 'next/link'

export function Header(){
    return(
        <header className="flex justify-center md:justify-between py-2 md:py-4 items-center">
            <Image src="/img/logo.svg" alt="Logo DoWhile" width={150} height={33} />

            <nav className="hidden md:block space-x-8">
                <Link href="/nextjs">
                    <a className="tracking-wide hover:text-gray-600 bold">Next JS</a>
                </Link>
                <Link href="/tailwind">
                    <a className="tracking-wide hover:text-gray-600 bold">Tailwind CSS</a>
                </Link>
                <Link href="/framermotion">
                    <a className="tracking-wide hover:text-gray-600 bold">Framer Motion</a>
                </Link>
            </nav>
        </header>
    )
}