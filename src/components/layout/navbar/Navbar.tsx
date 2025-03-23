import Link from "next/link";
import Image from "next/image";
import uk from "../../../../public/icons/uk.png";
import { Button } from "@/components/ui/button";

const links = [
    { name: "Why Choose Us?", link: "" },
    {
        name: "Our Services",
        link: "",
    },
    {
        name: "Our Works",
        link: "",
    },
    // {
    //     name: "Contact Us",
    //     link: "",
    // },
];

interface HeaderProps {
    link: string;
    header: string;
}

export default function Navbar({ link, header }: HeaderProps) {
    return (
        <nav className="bg-white my-2 max-w-screen-xl mt-4 border-2 px-4 rounded-xs mx-auto w-full shadow-sm">
            <div className="flex justify-between items-center px-4 py-3 max-w-screen-xl mx-auto">
                {/* Logo */}
                <span className="text-4xl font-bold text-black ">
                    <Link href={link}>{header}</Link>
                </span>

                <ul className="flex space-x-6">
                    {links.map((item, index) => (
                        <li key={index}>
                            <a
                                href={item.link}
                                className=" hover:text-blue-600 text-black"
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Select Languages */}
                <div className="flex gap-2">
                    <div className="flex items-center me-2">
                        <button className="flex items-center">
                            <Image
                                className=""
                                src={uk}
                                alt="UK Flag"
                                width={25}
                                height={15}
                            />
                        </button>
                    </div>
                    <Button className="bg-black text-white text-[16px] py-6 px-4 cursor-pointer">
                        Contact Us
                    </Button>
                </div>
            </div>
        </nav>
    );
}
