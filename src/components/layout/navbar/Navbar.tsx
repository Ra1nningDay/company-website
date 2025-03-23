import Link from "next/link";
import Image from "next/image";
import uk from "../../../../public/icons/uk.png";
import Logo from "../../../../public/logo.png";
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
}

export default function Navbar({ link }: HeaderProps) {
    return (
        <nav className="bg-white my-2 max-w-screen-xl mt-4 border-2 px-4 rounded-xs mx-auto w-full shadow-sm">
            <div className="flex justify-between items-center px-4 py-3 max-w-screen-xl mx-auto">
                {/* Logo */}
                <Link href={link} className="flex items-center">
                    <Image src={Logo} alt="logo" className="me-1" width={50} />
                    <h1 className="mt-2 text-3xl  font-bold text-black">
                        OCTOTECH
                    </h1>
                </Link>

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
                    <Button
                        variant="default"
                        className="bg-[#3da9fc] text-white text-[16px] py-6 px-4 cursor-pointer"
                    >
                        Contact Us
                    </Button>
                </div>
            </div>
        </nav>
    );
}
