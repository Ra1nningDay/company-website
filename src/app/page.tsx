import { Button } from "@/components/ui/button";
import HeroSection from "@/components/layout/pages/home/HeroSection";
import ServiceSection from "@/components/layout/pages/home/ServiceSection";

export default function Home() {
    return (
        <div className="">
            <div className="min-h-screen bg-white text-gray-900 font-sans">
                {/* Hero Section */}
                <HeroSection />

                {/* Services Section */}
                <ServiceSection />

                {/* About Section */}
                <section className="py-20 px-6 bg-white text-center">
                    <h2 className="text-3xl font-semibold mb-6">
                        About OCTOTECH
                    </h2>
                    <p className="max-w-3xl mx-auto text-lg">
                        We&apos;re a passionate team of developers and
                        consultants helping businesses embrace the future
                        through smart, ethical, and effective AI-driven
                        technology.
                    </p>
                </section>

                {/* Call to Action */}
                <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center">
                    <h2 className="text-3xl font-semibold mb-4">
                        Let’s Build the Future Together
                    </h2>
                    <p className="mb-6">
                        Ready to scale your business with AI? Contact our team
                        today.
                    </p>
                    <Button className="bg-white text-blue-700 hover:bg-gray-100">
                        Get in Touch
                    </Button>
                </section>
            </div>
        </div>
    );
}
