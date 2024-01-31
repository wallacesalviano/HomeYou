import { Button } from "./Button";
import { motion } from "framer-motion"
import {
    fadeIn,
    slideInFromBottom,
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop
} from '@/lib/Motion';

export const Budget = () => {
    return (
        <motion.section
            initial='hidden'
            animate='visible'
            id='budget'
            className="bg-[#ffffff] p-20 text-center flex flex-col justify-center items-center">
            <motion.h2 variants={slideInFromTop(0.1)} className="md:text-[32px] text-[24px] font-semibold mb-5">Orçamento</motion.h2>
            <motion.p variants={slideInFromLeft(0.2)}className="mb-5">Interessado em entrar em contato com um de nossos profissionais?</motion.p>
            <motion.button variants={slideInFromRight(0.2)} className="p-3 bg-none border rounded border-[#272727] hover:bg-[#272727] w-[312px] hover:text-white">Entre em Contato</motion.button>
        </motion.section>
    );
}   