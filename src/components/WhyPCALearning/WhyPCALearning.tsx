import clsx from "clsx";
import FeatureCard from "../ui/Cards/FeatureCard";

const contents = [
	{
		title: "Experienced and Qualified Faculty",
		description: "Classes are conducted by a highly qualified instructor with M.Tech in Computer Science & Engineering, ensuring strong conceptual understanding for students.",
		icon: "/icons/learn-from-best.png",
	},
	{
		title: "Regular Practice & Assignments",
		description: "Students receive: \n1. Practice problems \n2. Model questions \n3. Previous university question discussions. This helps them perform better in semester exams.",
		icon: "/icons/practical-learning.png",
	},
	{
		title: "Friendly Learning Environment",
		description: "Students feel comfortable asking doubts and discussing academic problems, making learning more effective.",
		icon: "/icons/flexible-timing.png",
	},
	{
		title: "Affordable Fees",
		description: "Quality education is provided at reasonable and student-friendly fees, making it accessible for more students.",
		icon: "/icons/affordable-pricing.png",
	},
	{
		title: "Academic Guidance & Career Support",
		description: "Students also receive guidance regarding:\n 1. Higher studies\n2. Project work\n3. Career opportunities in Computer Science",
		icon: "/icons/community-support.png",
	},
	{
		title: "Certification",
		description: "Receive a certificate upon completion of the course to showcase your skills.",
		icon: "/icons/certification.png",
	},
];

export default function WhyPCALearning() {
    return (
        <section id="why-pca-learning" className={clsx(["Why-PCA-learning bg-customGreyColor w-full", "sm:p-0"])}>
            <div className={clsx(["relative bg-background px-0 pt-4 flex flex-col items-center", "rounded-md shadow-md overflow-hidden", "sm:rounded-none"])}>
                <h1 className={clsx(["text-5xl text-primary text-center font-bold underline", "mb-6", "md:mt-8 md:mb-10"], ["lg:text-7xl"])}>Why PCA Learning?</h1>
                <div className={clsx(["feature-cards-wrapper",
				"max-w-[1200px]",
					"flex flex-wrap justify-center gap-y-6 gap-x-4",
					"relative w-full h-auto px-4",
					""])}>
                    {contents.map((content, index) => {
                        return (
                            <FeatureCard.FeatureCardWrapper key={index} className={clsx([""])}>
								<FeatureCard.FeatureCardIcon src={content.icon} alt={content.title} />
								<FeatureCard.FeatureCardTitle>{content.title}</FeatureCard.FeatureCardTitle>
								<FeatureCard.FeatureCardDescription>{content.description}</FeatureCard.FeatureCardDescription>
                            </FeatureCard.FeatureCardWrapper>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
