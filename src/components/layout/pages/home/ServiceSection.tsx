import { Card, CardContent } from "@/components/ui/card";

export default function ServiceSection() {
    return (
        <section className="flex justify-center mb-65">
            <div className="py-10 px-6 bg-gray-500 rounded-3xl mt-[-8rem] z-10 absolute">
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
                                operations with tailored AI tools like chatbots
                                and assistants.
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-6">
                            <h3 className="text-xl font-bold mb-2">
                                Custom Software Development
                            </h3>
                            <p>
                                Build scalable web and mobile apps tailored to
                                your unique business needs with our full-stack
                                development team.
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-6">
                            <h3 className="text-xl font-bold mb-2">
                                Business & Tech Consulting
                            </h3>
                            <p>
                                Strategic guidance for digital transformation,
                                AI adoption, and technology optimization with
                                measurable results.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
