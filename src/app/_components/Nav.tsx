import {
    Home,
    User,
    Heart,
    Search,
} from 'lucide-react';
import Link from 'next/link';
import { motion } from "framer-motion"
import {
    fadeIn,
    slideInFromBottom,
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop
} from '@/lib/Motion';
import {MaxWidthWrapper} from './MaxWidthWrapper';
import { MenuMobile } from './menu-mobile';
import Image from 'next/image';
import logo from "/public/assets/logo.svg"

export const Nav = () => {
    return (
        <motion.nav
            initial='hidden'
            animate='visible'
            id='home'
            className='bg-[#ffff] md:flex'>

            <MaxWidthWrapper className='flex justify-between items-center'>
                {/* <Link href="#home"> */}
                <motion.div
                    variants={slideInFromTop(0.1)}
                    className='flex items-center justify-around gap-1 text-[24px] font-semibold m-6 h-[24px] w-[121px]'>
                    <Image src={logo} alt='logo' width={189} height={40} />
                </motion.div>
                {/* </Link> */}

                <div className='md:flex md:text-[18px] md:gap-20 hidden'>
                    <motion.ul
                        variants={slideInFromTop(0.1)}
                        className='flex items-center justify-center gap-10'>
                        <Link className='hover:text-[#FFCE52]' href="#home">
                            <li>
                                Home
                            </li>
                        </Link>
                        <Link className='hover:text-[#FFCE52]' href="#gallery">
                            <li>
                                Galeria
                            </li>
                        </Link>
                        <Link className='hover:text-[#FFCE52]' href={"/"}>
                            <li>
                                Contato
                            </li>
                        </Link>
                    </motion.ul>

                    <motion.div
                        variants={slideInFromTop(0.1)}
                        className='flex items-center gap-8'>
                        <Link href={"/"}>
                            <User width={20} height={20} className='hover:text-[#FFCE52]' />
                        </Link>
                        <Link href={"/"}>
                            <Heart width={20} height={20} className='hover:text-[#FFCE52]' />
                        </Link>
                        <Link href={"/"}>
                            <Search width={20} height={20} className='hover:text-[#FFCE52]' />
                        </Link>
                    </motion.div>
                </div>

                <MenuMobile />
            </MaxWidthWrapper>
        </motion.nav>
    );
}
