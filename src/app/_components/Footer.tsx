import Image from "next/image";
import logohome from "/public/assets/logohome.svg"
import Link from "next/link";
import { motion } from "framer-motion"
import {
    fadeIn,
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop
} from '@/lib/Motion';

export const Footer = () => {
    return (
        <motion.footer
            initial='hidden'
            animate='visible'
            id='banner'
            className="bg-[#F9FAFB] p-10 md:flex md:justify-center md:gap-20">
            <motion.div variants={slideInFromTop(0.1)}>
                <Link href='#home'>
                    <Image className="mb-5" width={40} height={40} src={logohome} alt={"logohome"} />
                </Link>
            </motion.div>

            <div className="text-[12px] grid grid-cols-2 gap-5 md:flex md:gap-20 md:text-[18px] " >
                <motion.ul variants={slideInFromTop(0.1)}>
                    <h3 className="text-[14px] md:text-[18px] font-semibold md:mb-2">Produtos</h3>
                    <li>Mobilia</li>
                    <li>Segurança</li>
                    <li>Design Interior</li>
                </motion.ul>

                <motion.ul variants={slideInFromTop(0.2)}>
                    <h3 className="text-[14px] md:text-[18px] font-semibold md:mb-2">Mais Informações</h3>
                    <li>Contrato</li>
                    <li>Sobre Nós</li>
                    <li>Termo e Condições</li>
                </motion.ul>

                <motion.ul variants={slideInFromTop(0.3)}>
                    <h3 className="text-[14px] md:text-[18px] font-semibold md:mb-2 ">Redes Sociais</h3>
                    <li>Pinteret</li>
                    <li>Facebook</li>
                    <li>Instagram</li>
                </motion.ul>
            </div>
        </motion.footer>
    );
}