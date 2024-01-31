import Image from "next/image";
import design from "/public/assets/design.png"
import Link from "next/link";
import { motion } from "framer-motion"
import {
    fadeIn,
    slideInFromBottom,
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop
} from '@/lib/Motion';

export const Design = () => {
    return (
        <motion.section
            initial='hidden'
            animate='visible'
            id='design'
            className="bg-[#ffffff]">

            <div className="flex items-center justify-center gap-10 md:m-6 m-10">
                <motion.div
                    variants={slideInFromTop(0.1)}
                    className="bg-[#272727] absolute">
                </motion.div>

                <motion.div
                    variants={slideInFromTop(0.1)}
                    className="z-10 hidden md:block" >
                    <Image className="border-l-2 border-[#272727]" src={design} width={487} height={457} alt="imagem principal da área de design" />
                </motion.div>

                <motion.div 
                variants={slideInFromTop(0.2)}
                className="flex flex-col">
                    <div className="bg-[#272727] p-5 md:w-[580px] mb-3 text-white">
                        <h2 className="text-[28px] mb-5 font-semibold">
                            Design Minimalista
                        </h2>
                        <p className="text-[16px] font-extralight">
                            Móveis apenas essenciais e com design moderno,
                            além de revestimentos bonitos e em cores neutras para manter a casa sempre com um estilo clean e suave.
                        </p>
                    </div>
                    <Link className="underline md:text-left text-center" href={"/"}>
                        Quero saber mais sobre os designs
                    </Link>
                </motion.div> 
            </div>
            
        </motion.section>
    );
}