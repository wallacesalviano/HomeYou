import { MenuIcon } from "lucide-react"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image";
import logo from "/public/assets/logo.svg"
import Link from "next/link";

export const MenuMobile = () => {
    return (
        <div>
            <Sheet>
                <SheetTrigger className="md:hidden border-2 p-1 rounded">
                    <MenuIcon />
                </SheetTrigger>
                <SheetContent className="w-[400px] sm:w-[540px]">
                    <SheetHeader>
                        <SheetTitle>
                            <Image className=" mb-5" src={logo} alt={"logohome"} />
                        </SheetTitle>
                        <SheetDescription>
                            <ul className="text-[18px]">
                                <Link href="#banner">
                                    <li className="mb-5 hover:text-[#FFCE52]">Home</li>
                                </Link>
                                <Link href="#gallery">
                                    <li className="mb-5 hover:text-[#FFCE52]">Galeria</li>
                                </Link>
                                <Link href="#">
                                    <li className="hover:text-[#FFCE52]">Contatos</li>
                                </Link>
                            </ul>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    );
}