import Image from "next/image";
import AboutImage from "../../../../../public/logo.png";

export default function AboutSection() {
    return (
        <section className="py-20 px-6 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {/* Image Section */}
                <div className="flex justify-center">
                    <Image
                        src={AboutImage}
                        alt="About OCTOTECH"
                        className="rounded-lg shadow-lg"
                        width={400}
                        height={400}
                    />
                </div>

                {/* Text Section */}
                <div>
                    <h2 className="text-4xl font-bold mb-6 text-[#094067]">
                        About OCTOTECH
                    </h2>
                    <p className="text-lg text-[#5f6c7b] leading-relaxed">
                        We&apos;re a passionate team of developers and
                        consultants helping businesses embrace the future
                        through smart, ethical, and effective AI-driven
                        technology. Our mission is to empower organizations with
                        innovative solutions that drive growth and success.
                    </p>
                </div>
            </div>
        </section>
    );
}
