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
import { MaxWidthWrapper } from './MaxWidthWrapper';
import { MenuMobile } from './menu-mobile';
import Image from 'next/image';
import logo from "/public/assets/logo.svg"

export const Nav = () => {
    return (
        <motion.nav initial='hidden' animate='visible' id='home' className='bg-[#ffff] flex justify-around md:justify-center md:text-[18px] gap-20 md:gap-48 m-6 md:m-6 '>

                <motion.div
                    variants={slideInFromTop(0.1)}
                    className='text-[24px] font-semibold md:mx-44'>
                    <Image src={logo} alt='logo' width={159} height={40} />
                </motion.div>



                <motion.ul
                    variants={slideInFromTop(0.1)}
                    className='md:flex justify-center items-center gap-8 md:mr-10 hidden'>
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
                    className='md:flex md:justify-center md:items-center md:gap-5 hidden'>
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


                <MenuMobile />

        </motion.nav >
    );
}
