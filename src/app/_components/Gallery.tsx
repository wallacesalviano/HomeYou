import Image from "next/image";
import img1 from "/public/assets/img1.png"
import img2 from "/public/assets/img2.png"
import img3 from "/public/assets/img3.png"
import { motion } from "framer-motion"
import {
    slideInFromTop
} from '@/lib/Motion';

export const Gallery = () => {
    return (
        <motion.section
            initial='hidden'
            animate='visible'
            id='gallery'
            className="bg-[#F9F9F9] p-10 text-center md:m-6">
        
            <motion.h2
                variants={slideInFromTop(0)}
                className="md:text-[32px] font-medium mb-2">
                Galeria
            </motion.h2>

            <motion.p
                variants={slideInFromTop(0.1)}
                className="text-[14px] md:text-[18px] text-[#797979] font-light mb-10">
                Se você está entediado com a aparência da decoração de interiores da casa comuns,<br></br>
                trabalhamos com designs diferentes e inovadores.
            </motion.p>

            <motion.div
                variants={slideInFromTop(0.2)}
                className="flex flex-col md:flex md:flex-row gap-5 justify-center items-center">
                <Image width={330} height={550} className="hover:-translate-y-2 transition-all duration-300" src={img1} alt='img1' priority />
                <Image className="hover:-translate-y-2 transition-all duration-300" src={img2} alt='img2' priority />
                <Image width={330} height={550} className="hover:-translate-y-2 transition-all duration-300" src={img3} alt='img3' priority />
            </motion.div>
        </motion.section>
    );
}