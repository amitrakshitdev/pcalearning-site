import clsx from "clsx";
import FeatureCard from "../UI/Cards/FeatureCard";

const contents = [
	{
		title: "Learn from the best",
		description: "Our courses are designed by industry experts who have years of experience in the field.",
		icon: "/icons/learn-from-best.png",
	},
	{
		title: "Practical learning",
		description: "We believe in learning by doing. Our courses are designed to give you hands-on experience.",
		icon: "/icons/practical-learning.png",
	},
	{
		title: "Flexible timings",
		description: "We understand that you have a busy schedule. Our courses are designed to fit your needs.",
		icon: "/icons/flexible-timing.png",
	},
	{
		title: "Affordable pricing",
		description: "We believe that quality education should be accessible to everyone. Our courses are priced competitively.",
		icon: "/icons/affordable-pricing.png",
	},
	{
		title: "Community support",
		description: "Join a community of learners and get support from peers and mentors.",
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
                <h1 className={clsx(["text-5xl text-primary text-center font-bold", "mb-6", "md:mt-8 md:mb-10"], ["lg:text-7xl"])}>Why PCA Learning?</h1>
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
