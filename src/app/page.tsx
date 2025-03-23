import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import HeroSection from "@/components/layout/pages/home/HeroSection";

export default function Home() {
    return (
        <div className="">
            <div className="min-h-screen bg-white text-gray-900 font-sans">
                {/* Hero Section */}
                <HeroSection />

                {/* Services Section */}
                <section className="py-20 px-6 bg-gray-50">
                    <h2 className="text-3xl font-semibold text-center mb-12">
                        Our Services
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <Card>
                            <CardContent className="p-6">
                                <h3 className="text-xl font-bold mb-2">
                                    Generative AI Solutions
                                </h3>
                                <p>
                                    Automate content, analyze data, and enhance
                                    operations with tailored AI tools like
                                    chatbots and assistants.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6">
                                <h3 className="text-xl font-bold mb-2">
                                    Custom Software Development
                                </h3>
                                <p>
                                    Build scalable web and mobile apps tailored
                                    to your unique business needs with our
                                    full-stack development team.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6">
                                <h3 className="text-xl font-bold mb-2">
                                    Business & Tech Consulting
                                </h3>
                                <p>
                                    Strategic guidance for digital
                                    transformation, AI adoption, and technology
                                    optimization with measurable results.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

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
