import Link from "next/link"

export const Button = () => {
    return (
        <div>
            <Link className="p-2.5 bg-[#272727] text-white md:text-[18px] text-[12px] hover:bg-[#FFCE52] rounded hover:text-[#272727]" href={"/"}>
                Entre em contato
            </Link>
        </div>
    )
}