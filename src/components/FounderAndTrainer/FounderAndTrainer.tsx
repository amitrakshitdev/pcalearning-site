import Image from "next/image";
import designPattern from "@/assets/images/design.png";

export default function FounderAndTrainer() {
    return (
        <section className="relative w-full py-20 overflow-hidden flex items-center justify-center">
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={designPattern}
                    alt="Background Pattern"
                    fill
                    className="object-cover object-center opacity-90"
                />
            </div>

            <div className="relative z-10 container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-12">
                {/* Left Card: Text */}
                <div className="bg-white rounded-xl p-8 shadow-[0px_4px_20px_rgba(0,0,0,0.3)] max-w-lg text-center md:text-left border-4 border-primary">
                    <h2 className="text-3xl font-bold text-primary mb-4 underline decoration-blue-300 decoration-4 underline-offset-8">
                        Founder & Trainer
                    </h2>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">
                        Mr. Sourav Pakrashi (M.Tech in Computer Science & Engineering, B.Ed)
                    </h4>
                    <p className="text-gray-800 leading-relaxed font-medium">
                        <span>Mr. Sourav Pakrashi (M.Tech in Computer Science & Engineering, B.Ed)</span>
                        Sourav Pakrashi is the Founder and Trainer of Pakrashi
                        Computer Academy, holding an M.Tech in Computer Science
                        and Engineering from MAKAUT and a B.Ed degree, committed
                        to delivering practical and quality computer education.
                    </p>
                </div>

                {/* Right Circle: Tutor Image */}
                <div className="relative w-72 h-72 md:w-[22rem] md:h-[22rem] rounded-full border-[6px] border-blue-400 overflow-hidden shadow-[0px_4px_20px_rgba(0,0,0,0.4)] flex-shrink-0">
                    <Image
                        src="/GALLERY%20PIC/TutorImg.jpg"
                        alt="Founder & Trainer"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
