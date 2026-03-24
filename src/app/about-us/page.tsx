import Footer from "@/components/Footer/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us",
    description:
        "Learn more about Pakrashi Computer Academy, a dedicated learning center committed to providing high-quality guidance in computer education.",
};

export default function AboutUs() {
    return (
        <>
            <main className="w-full min-h-screen py-16 px-4 md:px-8 bg-background text-textColor">
                <div className="max-w-4xl mx-auto space-y-12">
                    {/* Header */}
                    <div className="text-center space-y-4">
                        <h1 className="text-5xl font-extrabold text-primary underline decoration-primary-50 decoration-[4px] underline-offset-[8px] mb-6">
                            About Us
                        </h1>
                        <h2 className="text-3xl font-semibold text-textColor">
                            Pakrashi Computer Academy
                        </h2>
                        <p className="text-lg leading-relaxed text-textColor mt-4 max-w-3xl mx-auto opacity-90">
                            Pakrashi Computer Academy is a dedicated learning
                            center committed to providing high-quality guidance
                            in computer education for students across school,
                            college, and university levels. Our mission is to
                            build strong conceptual foundations, practical
                            skills, and confidence in every learner, enabling
                            them to excel academically and prepare for a
                            successful future in the field of technology.
                        </p>
                    </div>

                    {/* Who We Are */}
                    <section className="bg-customGreyColor p-8 rounded-xl shadow-md border-t-4 border-primary">
                        <h3 className="text-3xl font-bold text-primary mb-4">
                            Who We Are
                        </h3>
                        <p className="text-textColor leading-relaxed text-lg opacity-90">
                            Founded with a passion for teaching and innovation,
                            Pakrashi Computer Academy serves as a trusted
                            academic partner for students from diverse
                            educational boards and streams. We focus on
                            personalized attention, structured learning paths,
                            and a supportive environment that encourages
                            curiosity, problem-solving, and continuous
                            improvement.
                        </p>
                    </section>

                    {/* Our Students */}
                    <section className="space-y-6">
                        <h3 className="text-3xl font-bold text-primary">
                            Our Students
                        </h3>
                        <p className="text-textColor text-lg opacity-90">
                            We proudly provide guidance and academic support to:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="bg-customGreyColor p-6 rounded-lg shadow-sm border border-primary-50 hover:shadow-md transition-shadow">
                                <h4 className="font-bold text-xl text-primary mb-2">
                                    School Students (Class VI–XII)
                                </h4>
                                <p className="text-textColor opacity-80">
                                    ICSE / ISC / CBSE / WBBSE / WBCHSE
                                </p>
                            </div>
                            <div className="bg-customGreyColor p-6 rounded-lg shadow-sm border border-primary-50 hover:shadow-md transition-shadow">
                                <h4 className="font-bold text-xl text-primary mb-2">
                                    Undergraduate Programs
                                </h4>
                                <p className="text-textColor opacity-80">
                                    B.Tech (All Streams) • BCA • B.Sc. (Computer
                                    Science)
                                </p>
                            </div>
                            <div className="bg-customGreyColor p-6 rounded-lg shadow-sm border border-primary-50 hover:shadow-md transition-shadow">
                                <h4 className="font-bold text-xl text-primary mb-2">
                                    Postgraduate Programs
                                </h4>
                                <p className="text-textColor opacity-80">
                                    MCA • M.Sc. (Computer Science) • M.Tech (CSE
                                    / IT)
                                </p>
                            </div>
                            <div className="bg-customGreyColor p-6 rounded-lg shadow-sm border border-primary-50 hover:shadow-md transition-shadow flex items-center">
                                <h4 className="font-bold text-xl text-primary">
                                    Other College and University-Level Courses
                                </h4>
                            </div>
                        </div>
                    </section>

                    {/* What We Offer */}
                    <section className="bg-primary text-textSecondaryColor p-8 sm:p-12 rounded-2xl shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl opacity-20 -mr-20 -mt-20"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl opacity-20 -ml-20 -mb-20"></div>

                        <div className="relative z-10">
                            <h3 className="text-3xl font-bold mb-8 text-textSecondaryColor text-center">
                                What We Offer
                            </h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4 items-start">
                                    <div className="mt-1.5 w-3 h-3 bg-white rounded-full shrink-0" />
                                    <div>
                                        <strong className="text-xl text-textSecondaryColor">
                                            Concept-Oriented Teaching
                                        </strong>
                                        <p className="text-textSecondaryColor mt-1 opacity-90">
                                            Clear explanations of core concepts
                                            in programming, computer science,
                                            and IT subjects.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <div className="mt-1.5 w-3 h-3 bg-white rounded-full shrink-0" />
                                    <div>
                                        <strong className="text-xl text-textSecondaryColor">
                                            Practical Learning
                                        </strong>
                                        <p className="text-textSecondaryColor mt-1 opacity-90">
                                            Hands-on coding, problem-solving
                                            sessions, and real-world examples.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <div className="mt-1.5 w-3 h-3 bg-white rounded-full shrink-0" />
                                    <div>
                                        <strong className="text-xl text-textSecondaryColor">
                                            Exam-Focused Preparation
                                        </strong>
                                        <p className="text-textSecondaryColor mt-1 opacity-90">
                                            Structured guidance aligned with
                                            school and university syllabi and
                                            examination patterns.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <div className="mt-1.5 w-3 h-3 bg-white rounded-full shrink-0" />
                                    <div>
                                        <strong className="text-xl text-textSecondaryColor">
                                            Personalized Attention
                                        </strong>
                                        <p className="text-textSecondaryColor mt-1 opacity-90">
                                            Small batches and individual
                                            mentoring to address each student’s
                                            strengths and areas for improvement.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <div className="mt-1.5 w-3 h-3 bg-white rounded-full shrink-0" />
                                    <div>
                                        <strong className="text-xl text-textSecondaryColor">
                                            Career Guidance
                                        </strong>
                                        <p className="text-textSecondaryColor mt-1 opacity-90">
                                            Support and advice for higher
                                            studies, projects, and professional
                                            pathways in technology.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Our Teaching Approach */}
                    <section className="bg-customGreyColor p-8 rounded-xl shadow-md border-b-4 border-secondary">
                        <h3 className="text-3xl font-bold text-secondary mb-4">
                            Our Teaching Approach
                        </h3>
                        <p className="text-textColor leading-relaxed text-lg opacity-90">
                            At Pakrashi Computer Academy, we believe that
                            learning should be engaging, interactive, and
                            meaningful. Our teaching approach blends theory with
                            practice, encouraging students to ask questions,
                            explore solutions, and develop logical thinking. We
                            focus on building both academic excellence and
                            real-world technical skills.
                        </p>
                    </section>

                    {/* Vision and Commitment */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Our Vision */}
                        <section className="bg-primary-50 p-8 rounded-xl border border-primary opacity-90 hover:opacity-100 shadow-sm transition-transform hover:-translate-y-1 duration-300">
                            <h3 className="text-2xl font-bold text-primary mb-4">
                                Our Vision
                            </h3>
                            <p className="text-textColor leading-relaxed">
                                To become a center of excellence in computer
                                education by empowering students with knowledge,
                                skills, and confidence to thrive in academics
                                and in the fast-evolving world of technology.
                            </p>
                        </section>

                        {/* Our Commitment */}
                        <section className="bg-primary-50 p-8 rounded-xl border border-primary opacity-90 hover:opacity-100 shadow-sm transition-transform hover:-translate-y-1 duration-300">
                            <h3 className="text-2xl font-bold text-primary mb-4">
                                Our Commitment
                            </h3>
                            <p className="text-textColor leading-relaxed">
                                We are committed to maintaining high standards
                                of education, fostering a positive learning
                                environment, and supporting every student on
                                their academic journey. Whether you are a school
                                student taking your first steps into computers
                                or a postgraduate pursuing advanced studies,
                                Pakrashi Computer Academy is here to guide you
                                every step of the way.
                            </p>
                        </section>
                    </div>

                    {/* Footer Signature */}
                    <div className="pt-12 pb-6 text-center">
                        <p className="text-3xl font-medium text-primary italic drop-shadow-sm font-serif">
                            Pakrashi Computer Academy – Guiding Minds, Building
                            Futures in Technology
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
