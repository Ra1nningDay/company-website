import { Button } from "@/components/ui/button";

export default function HeroSection() {
    return (
        <section className="w-full py-32 px-6 text-center #fffffe text-[#094067] pb-60  relative">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Empower Your Business with <br /> Generative AI
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-[#5f6c7b]">
                OCTOTECH builds intelligent AI-powered solutions to accelerate
                business growth — from custom software to strategic consulting.
            </p>
            <div className="flex justify-center items-center gap-4">
                <Button
                    variant="default"
                    className="text-[#fffffe] text-[18px] bg-[#3da9fc]  py-7 px-6 hover:cursor-pointer"
                >
                    Explore Our Services
                </Button>
                <Button
                    variant="outline"
                    className="bg-[#fffffe] text-[black] text-[18px] py-6 px-6 cursor-pointer shadow-lg"
                >
                    Free Consultation
                </Button>
            </div>
        </section>
    );
}
