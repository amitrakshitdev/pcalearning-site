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
                    <p className="text-gray-800 leading-relaxed font-medium">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat. Ut wisi enim ad
                        minim veniam, quis nostrud exerci tation ullamcorper
                        suscipit lobor
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
