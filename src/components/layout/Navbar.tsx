import Link from "next/link";
import Image from "next/image";
import uk from "../../../public/icons/uk.png";

const links = [
    {
        name: "Home",
        link: "",
    },
    { name: "About", link: "" },
    {
        name: "Survey",
        link: "",
    },
    {
        name: "Contact",
        link: "",
    },
];

interface HeaderProps {
    link: string;
    header: string;
}

export default function Navbar({ link, header }: HeaderProps) {
    return (
        <nav className="bg-white  shadow-md">
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
                                className="me-1"
                                src={uk}
                                alt="UK Flag"
                                width={20}
                                height={15}
                            />
                            <span>EN/THB</span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
