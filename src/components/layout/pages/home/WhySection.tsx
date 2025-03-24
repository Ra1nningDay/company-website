import Image from "next/image";
import AboutImage from "../../../../../public/logo.png";
import { Card } from "@/components/ui/card";
import Ai from "../../../../../public/icons/generative.png";
// import Development from "../../../../../public/icons/web-development.png";

const whySection = [
    {
        img: Ai,
        title: "AI-Driven Innovation",
        desc: "AI-driven innovation, tailored to your goals",
    },
    {
        img: Ai,
        title: "Full-Stack Expertise",
        desc: "Transparent and agile work process",
    },
    {
        img: Ai,
        title: "Agile & Transparent Process",
        desc: "Focused on business outcomes — not just code",
    },
];

export default function WhySection() {
    return (
        <section className="py-20 px-6 mb-20 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-6xl mx-auto">
                {/* Image Section */}
                <div className="">
                    <Image
                        src={AboutImage}
                        alt="About OCTOTECH"
                        className="rounded-lg shadow-lg"
                        width={600}
                    />
                </div>

                {/* Text Section */}
                <div>
                    <h2 className="text-4xl font-bold mb-3 text-[#094067]">
                        Why <span className="text-[#4fc4cf]">Choose</span>{" "}
                        OCTOTECH
                    </h2>
                    <p className="mb-4 text-lg text-[#5f6c7b] leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <div className="group">
                        {whySection.map((item, index) => (
                            <Card
                                key={index}
                                className={`px-6 mb-5 transition-all duration-300 ${
                                    index === 0
                                        ? "shadow-lg bg-[#fffffe] rounded-sm border-2 border-[#094067] group-hover:bg-transparent group-hover:shadow-none group-hover:border-transparent group-hover:hover:bg-[#fffffe] group-hover:hover:shadow-lg group-hover:hover:border-[#094067]"
                                        : "hover:bg-[#fffffe] hover:shadow-lg rounded-sm border-2 border-transparent shadow-none hover:border-[#094067]"
                                }`}
                            >
                                <div className="flex gap-5">
                                    <Image
                                        src={item.img}
                                        alt={item.title}
                                        width={60}
                                    />
                                    <div className="flex flex-col">
                                        <h2 className="text-[20px] font-semibold text-[#094067]">
                                            {item.title}
                                        </h2>
                                        <p className="text-lg text-[#5f6c7b] leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
