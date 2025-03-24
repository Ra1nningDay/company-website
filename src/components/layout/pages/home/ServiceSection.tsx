import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

import Genarative from "../../../../../public/icons/generative.png";
import Development from "../../../../../public/icons/web-development.png";
import Technical from "../../../../../public/icons/tecnical.png";

const cardServices = [
    {
        img: Genarative,
        title: "Innovative Generative AI Solutions",
        desc: "Automate content, analyze data, and enhance operations with tailored AI tools like chatbots and assistants.",
    },
    {
        img: Development,
        title: "Custom Software Development",
        desc: "Build scalable web and mobile apps tailored to your unique business needs with our full-stack development team.",
    },
    {
        img: Technical,
        title: "Business & Tech Consulting",
        desc: "Strategic guidance for digital transformation, AI adoption, and technology optimization with measurable results.",
    },
];

export default function ServiceSection() {
    return (
        <section className="flex justify-center mt-[0rem] mb-180 bg-[#fffffe]">
            <div className="p-6 bg-[rgba(216,238,254,0.6)] shadow-lg rounded-[24px] mt-[-8rem] z-10 absolute max-w-6xl w-full backdrop-blur-md border border-[rgba(176,196,222,0.4)]">
                <div className="py-18 border border-[#b0c4de] bg-white rounded-lg">
                    <h2 className="text-4xl font-bold text-center mb-5 text-[#094067]">
                        Our Services
                    </h2>
                    <p className="text-[20px] text-center text-[#5f6c7b] leading-relaxed max-w-3xl mx-auto mb-16">
                        Discover our range of services designed to help your
                        business <br /> thrive in the digital age.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {cardServices.map((item, index) => (
                            <Card
                                key={index}
                                className="hover:shadow-xl transition-shadow duration-300 rounded-lg bg-[#fffffe] overflow-hidden"
                            >
                                <CardContent className="p-6 flex flex-col items-center text-center">
                                    <Image
                                        src={item.img}
                                        alt={item.title}
                                        className="mb-6"
                                        width={75}
                                        height={75}
                                    />
                                    <h3 className="text-2xl font-semibold mb-4 text-[#094067]">
                                        {item.title}
                                    </h3>
                                    <p className="text-[#5f6c7b]">
                                        {item.desc}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
