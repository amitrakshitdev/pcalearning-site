import Footer from "@/components/Footer/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Admissions",
    description:
        "Learn about the offline admission process and details at Pakrashi Computer Academy.",
};

export default function Admissions() {
    return (
        <>
            <main className="w-full min-h-screen py-16 px-4 md:px-8 bg-background text-textColor">
                <div className="max-w-4xl mx-auto space-y-12">
                    {/* Header */}
                    <div className="text-center space-y-4">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-primary underline decoration-primary-50 decoration-[4px] underline-offset-[8px] mb-6">
                            Offline Admission Process
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-semibold text-textColor">
                            Pakrashi Computer Academy
                        </h2>
                        <h3 className="text-xl font-medium text-secondary">
                            (For School & College Students)
                        </h3>
                        <p className="text-lg leading-relaxed text-textColor mt-4 max-w-3xl mx-auto opacity-90">
                            Pakrashi Computer Academy offers computer education
                            for both school students and college students.
                            Interested students can take admission through a
                            simple offline admission process.
                        </p>
                    </div>

                    {/* Section 1 & 2: Mode & Fee */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <section className="bg-primary-50 p-8 rounded-xl shadow-md border-t-4 border-primary">
                            <h3 className="text-2xl font-bold text-primary mb-4">
                                Admission Mode
                            </h3>
                            <p className="text-textColor leading-relaxed opacity-90">
                                Admission is conducted offline at the academy
                                office. Students must visit the institute and
                                complete the admission procedure in person.
                            </p>
                        </section>

                        <section className="bg-primary-50 p-8 rounded-xl shadow-md border-t-4 border-primary transition-transform duration-300">
                            <h3 className="text-2xl font-bold text-primary mb-4">
                                Admission Fee
                            </h3>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                                    <p className="text-textColor opacity-90">
                                        <strong className="font-semibold text-primary">
                                            Admission Fee:
                                        </strong>{" "}
                                        ₹100
                                    </p>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                                    <p className="text-textColor opacity-90">
                                        <strong className="font-semibold text-primary">
                                            Payment Type:
                                        </strong>{" "}
                                        One Time (Non-Refundable)
                                    </p>
                                </li>
                            </ul>
                        </section>
                    </div>

                    {/* Section 3: Who Can Apply */}
                    <section className="space-y-6">
                        <h3 className="text-3xl font-bold text-primary">
                            Who Can Apply
                        </h3>
                        <p className="text-textColor text-lg opacity-90">
                            Students from the following categories are eligible
                            for admission:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="bg-customGreyColor p-6 rounded-lg shadow-sm border border-primary-50 hover:shadow-md transition-shadow">
                                <h4 className="font-bold text-lg text-primary">
                                    School Students
                                </h4>
                                <p className="text-textColor opacity-80">
                                    (Class VI – XII)
                                </p>
                            </div>
                            <div className="bg-customGreyColor p-6 rounded-lg shadow-sm border border-primary-50 hover:shadow-md transition-shadow">
                                <h4 className="font-bold text-lg text-primary">
                                    Diploma Students
                                </h4>
                                <p className="text-textColor opacity-80">
                                    All streams
                                </p>
                            </div>
                            <div className="bg-customGreyColor p-6 rounded-lg shadow-sm border border-primary-50 hover:shadow-md transition-shadow">
                                <h4 className="font-bold text-lg text-primary">
                                    Undergraduate Students
                                </h4>
                                <p className="text-textColor opacity-80">
                                    BCA, B.Sc. Computer Science, B.Tech
                                </p>
                            </div>
                            <div className="bg-customGreyColor p-6 rounded-lg shadow-sm border border-primary-50 hover:shadow-md transition-shadow">
                                <h4 className="font-bold text-lg text-primary">
                                    Postgraduate Students
                                </h4>
                                <p className="text-textColor opacity-80">
                                    MCA, M.Sc. Computer Science, M.Tech
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 4: Steps for Offline Admission */}
                    <section className="bg-primary text-textSecondaryColor p-8 sm:p-12 rounded-2xl shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary rounded-full blur-3xl opacity-20 -mr-20 -mt-20"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary rounded-full blur-3xl opacity-20 -ml-20 -mb-20"></div>

                        <div className="relative z-10">
                            <h3 className="text-3xl font-bold mb-8 text-textSecondaryColor">
                                Steps for Offline Admission
                            </h3>
                            <p className="text-textSecondaryColor mb-6 opacity-90">
                                Follow the steps below to complete the admission
                                process:
                            </p>
                            <ul className="space-y-6">
                                <li className="flex gap-4 items-start">
                                    <div className="flex items-center justify-center w-8 h-8 rounded-full border-primary-50 border-2 text-textSecondaryColor font-bold shrink-0">
                                        1
                                    </div>
                                    <div className="mt-1">
                                        <p className="text-textSecondaryColor opacity-90">
                                            Visit Pakrashi Computer Academy
                                            during office hours.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <div className="flex items-center justify-center w-8 h-8 rounded-full border-primary-50 border-2 text-textSecondaryColor font-bold shrink-0">
                                        2
                                    </div>
                                    <div className="mt-1">
                                        <p className="text-textSecondaryColor opacity-90">
                                            Collect the Admission Form from the
                                            academy office.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <div className="flex items-center justify-center w-8 h-8 rounded-full border-primary-50 border-2 text-textSecondaryColor font-bold shrink-0">
                                        3
                                    </div>
                                    <div className="mt-1">
                                        <p className="text-textSecondaryColor opacity-90">
                                            Fill up the form with correct
                                            personal and academic details.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <div className="flex items-center justify-center w-8 h-8 rounded-full border-primary-50 border-2 text-textSecondaryColor font-bold shrink-0">
                                        4
                                    </div>
                                    <div className="mt-1">
                                        <p className="text-textSecondaryColor opacity-90">
                                            Submit the filled form along with
                                            the Admission Fee of ₹100.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <div className="flex items-center justify-center w-8 h-8 rounded-full border-primary-50 border-2 text-textSecondaryColor font-bold shrink-0">
                                        5
                                    </div>
                                    <div className="mt-1">
                                        <p className="text-textSecondaryColor opacity-90">
                                            Receive confirmation of admission
                                            and class schedule from the academy.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 5 & 6: Documents & Notes */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <section className="bg-primary-50 p-8 rounded-xl shadow-md border-t-4 border-primary">
                            <h3 className="text-2xl font-bold text-primary mb-4">
                                Documents Required
                            </h3>
                            <p className="text-textColor opacity-90 mb-4">
                                Students need to bring the following documents
                                at the time of admission:
                            </p>
                            <ul className="space-y-3">
                                <li className="flex gap-3 items-start">
                                    <div className="mt-2 w-2 h-2 bg-primary rounded-full shrink-0" />
                                    <p className="text-textColor opacity-90">
                                        One passport size photograph
                                    </p>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <div className="mt-2 w-2 h-2 bg-primary rounded-full shrink-0" />
                                    <p className="text-textColor opacity-90">
                                        Photocopy of last educational
                                        qualification / mark sheet
                                    </p>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <div className="mt-2 w-2 h-2 bg-primary rounded-full shrink-0" />
                                    <p className="text-textColor opacity-90">
                                        Student contact number and address
                                    </p>
                                </li>
                            </ul>
                        </section>

                        <section className="bg-customGreyColor p-8 rounded-xl border border-secondary opacity-90 hover:opacity-100 shadow-sm transition-transform duration-300">
                            <h3 className="text-2xl font-bold text-secondary mb-4">
                                Important Notes
                            </h3>
                            <ul className="space-y-3">
                                <li className="flex gap-3 items-start">
                                    <div className="mt-2 w-2 h-2 bg-secondary rounded-full shrink-0" />
                                    <p className="text-textColor opacity-90">
                                        Admission fee is one time only.
                                    </p>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <div className="mt-2 w-2 h-2 bg-secondary rounded-full shrink-0" />
                                    <p className="text-textColor opacity-90">
                                        Monthly course fees will be applicable
                                        according to the selected course.
                                    </p>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <div className="mt-2 w-2 h-2 bg-secondary rounded-full shrink-0" />
                                    <p className="text-textColor opacity-90">
                                        Students must maintain regular
                                        attendance in classes.
                                    </p>
                                </li>
                            </ul>
                        </section>
                    </div>

                    {/* Section 7: Contact & Visit */}
                    <div className="bg-primary-50 p-8 rounded-xl shadow-md border-l-4 border-primary">
                        <h3 className="text-2xl font-bold text-primary mb-4">
                            Contact & Visit
                        </h3>
                        <p className="text-textColor leading-relaxed opacity-90">
                            Students and guardians are welcome to visit the
                            academy for course counseling and admission
                            guidance.
                        </p>
                    </div>

                    {/* Footer Signature */}
                    <div className="pt-8 pb-4 text-center">
                        <p className="text-2xl font-medium text-primary italic drop-shadow-sm">
                            Pakrashi Computer Academy
                        </p>
                        <p className="text-lg text-textColor opacity-80 mt-2">
                            Providing quality computer education for school and
                            college students.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
