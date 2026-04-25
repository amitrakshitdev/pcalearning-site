import Carousel from "@/components/Carousel/Carousel";
import Courses from "@/components/Courses/Courses";
import Footer from "@/components/Footer/Footer";
import OurStory from "@/components/OurStory/OurStory";
import Marquee from "@/components/ui/Marquee/Marquee";
import WhyPCALearning from "@/components/WhyPCALearning/WhyPCALearning";
import FounderAndTrainer from "@/components/FounderAndTrainer/FounderAndTrainer";
import Gallery from "@/components/Gallery/Gallery";
import clsx from "clsx";

const marqueeText =
    "Even semester batches for 2026 (B.Tech/BCA/MCA) going to be started from first week of April 2026.";

export default function Home() {
    return (
        <>
            <Carousel />
            <Marquee
                duration={20}
                className={clsx([
                    "bg-primary text-textSecondaryColor",
                    "width-full",
                    "py-2 px-4",
                    "text-lg",
                    "font-bold",
                    "mb-1",
                ])}
            >
                <p>{marqueeText}</p>
            </Marquee>
            <OurStory />
            <Courses />
            <WhyPCALearning />
            <FounderAndTrainer />
            <Gallery />
            <Footer />
        </>
    );
}
