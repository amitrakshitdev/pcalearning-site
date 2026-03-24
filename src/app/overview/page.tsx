import Footer from "@/components/Footer/Footer";
import overviewData from "./overview-data.json";

export const metadata = {
    title: "Overview",
    description: "Discover why students choose Pakrashi Computer Academy.",
};

export default function OverviewPage() {
    return (
        <>
            <main className="w-full min-h-screen py-16 px-4 md:px-8 bg-background text-textColor">
                <div className="max-w-5xl mx-auto space-y-12">
                    {/* Header */}
                    <div className="text-center space-y-4">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-primary underline decoration-primary-50 decoration-[4px] underline-offset-[8px] mb-6">
                            {overviewData.title}
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-semibold text-textColor">
                            {overviewData.subtitle}
                        </h2>
                        <p className="text-lg leading-relaxed text-textColor mt-4 max-w-3xl mx-auto opacity-90">
                            {overviewData.description}
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {overviewData.features.map((feature) => (
                            <section
                                key={feature.id}
                                className="bg-primary-50 p-8 rounded-xl shadow-lg border-t-4 border-[1px] border-primary hover:shadow-md transition-shadow flex flex-col h-full"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                                        <span className="text-textSecondaryColor font-bold text-lg">
                                            {feature.id}
                                        </span>
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-primary">
                                        {feature.title}
                                    </h3>
                                </div>
                                <p className="text-textColor leading-relaxed opacity-90 mb-4">
                                    {feature.description}
                                </p>

                                {feature.points &&
                                    feature.points.length > 0 && (
                                        <ul className="mb-4 space-y-2 flex-grow">
                                            {feature.points.map(
                                                (point, index) => (
                                                    <li
                                                        key={index}
                                                        className="flex gap-3 items-start"
                                                    >
                                                        <div className="mt-1.5 w-2 h-2 bg-primary rounded-full shrink-0" />
                                                        <p className="text-textColor opacity-90">
                                                            {point}
                                                        </p>
                                                    </li>
                                                ),
                                            )}
                                        </ul>
                                    )}

                                {feature.conclusion && (
                                    <div className="mt-auto p-3 bg-primary-50 rounded border-l-4 border-primary">
                                        <p className="text-textColor opacity-95 text-sm italic font-medium">
                                            {feature.conclusion}
                                        </p>
                                    </div>
                                )}
                            </section>
                        ))}
                    </div>

                    {/* Mission Section */}
                    <section className="bg-primary text-textSecondaryColor p-8 sm:p-12 rounded-2xl shadow-lg relative overflow-hidden mt-12 text-center">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary rounded-full blur-3xl opacity-20 -mr-20 -mt-20"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary rounded-full blur-3xl opacity-20 -ml-20 -mb-20"></div>

                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h3 className="text-3xl font-bold mb-6 text-textSecondaryColor">
                                {overviewData.mission.title}
                            </h3>
                            <p className="text-textSecondaryColor text-lg leading-relaxed opacity-[0.95]">
                                {overviewData.mission.description}
                            </p>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
}
