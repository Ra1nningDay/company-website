import { Button } from "@/components/ui/button";

export default function HeroSection() {
    return (
        <section className="w-full py-24 px-6 text-center  text-black">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Empower Your Business with Generative AI
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                OCTOTECH builds intelligent AI-powered solutions to accelerate
                business growth — from custom software to strategic consulting.
            </p>
            <div className="flex justify-center gap-4">
                <Button className="text-white text-[18px] bg-black  py-6 px-6 hover:cursor-pointer">
                    Explore Our Services
                </Button>
                <Button
                    variant="outline"
                    className="bg-white text-black text-[18px] py-6 px-6 cursor-pointer"
                >
                    Free Consultation
                </Button>
            </div>
        </section>
    );
}
