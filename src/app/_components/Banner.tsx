import Link from "next/link";
import { Button } from "./Button";
import banner from "/public/assets/bannerimg.png"
import Image from 'next/image';
import { motion } from "framer-motion"
import {
    fadeIn,
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop
} from '@/lib/Motion';
import {MaxWidthWrapper} from "./MaxWidthWrapper";

export const Banner = () => {
    return (
        <motion.section
            initial='hidden'
            animate='visible'
            id='banner'
            className="flex items-center justify-center bg-[#F9F9F9]">
                
            <MaxWidthWrapper className="">
                <div className="flex items-center gap-10 m-6 md:m-0">
                    <div className="md:w-1/2">
                        <motion.h1
                            variants={slideInFromTop(0)}
                            className="md:text-[40px] text-[24px] text-[#272727] font-medium">
                            Ajudar você a encontrar
                            o melhor conforto,
                            é nossa prioridade.
                        </motion.h1>
                        <motion.p
                            variants={slideInFromTop(0.1)}
                            className="md:text-[18px] text-[14px] text-[#797979]">
                            Encontre uma variedade de propriedades que combinam com você. Esqueça todas as dificuldades em encontrar uma residência
                        </motion.p>

                        <motion.div
                            variants={slideInFromTop(0.2)}
                            className="flex items-center gap-5 mt-8">
                            <Button />
                            <Link href={"/"} className="underline text-[12px] md:text-[18px]">
                                Mais sobre nós
                            </Link>
                        </motion.div>

                    </div>

                    <motion.div
                        variants={slideInFromRight(0.2)}
                        className="md:max-w-[100vw] md:block hidden">
                        <Image src={banner} alt='banner' priority />
                    </motion.div>
                </div>
            </MaxWidthWrapper>
        </motion.section>
    );
}