import clsx from "clsx";
import Image from "next/image";
import ourStoryImage from "@/assets/images/our-stories-image.jpg";
import Link from "next/link";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareFacebook, FaSquareXTwitter } from "react-icons/fa6";
import Button from "../ui/Buttons/Buttons";
export default function OurStory() {
    return (
        <section className={clsx("OurStory relative w-full bg-customGreyColor p-4", ["md:p-10", "lg:p-20"])}>
            <div className={clsx(["flex flex-col", "bg-background", "rounded-md shadow-md overflow-hidden", "md:flex-row"])}>
                <div className={clsx(["w-full", "text-textColor", "flex flex-col px-6 py-4", "md:w-2/3 md:px-12 md:py-10", "lg:px-32 lg:py-20"])}>
                    <h1 className={clsx(["text-5xl font-bold text-center", "text-primary", "mb-4", "lg:text-7xl"])}>Our Story</h1>
                    <h3 className={clsx(["font-semibold text-xl", "my-4"])}>Meet the Team Behind Your Coding Education</h3>
                    <p className={clsx(["text-sm font-light text-textColor", "text-gray-800", "lg:text-base"])}>
                        PCA Learning is a platform that offers a wide range of courses to help you learn coding and programming. We offer courses for beginners as well as advanced
                        learners. Our courses are designed to help you learn coding in a fun and interactive way. Whether you are a student, a professional, or someone who is just
                        interested in learning coding, we have a course for you.
                    </p>
                    <div className={clsx(["flex my-3 w-24 justify-between"])}>
                        <Link href="/about">
                            <FaSquareFacebook size={20} />
                        </Link>
                        <Link href="/about">
                            <FaSquareXTwitter size={20} />
                        </Link>
                        <Link href="/about">
                            <FaLinkedin size={20} />
                        </Link>
                        <Link href="/about">
                            <FaInstagram size={20}/>
                        </Link>
                    </div>
					<Button buttonType="primary-rounded" className={clsx(["px-7 py-2", "mt-2", "self-center", "md:self-start"])}>About us</Button>
                </div>
                <Image src={ourStoryImage} alt="our story image" className={clsx(["object-cover", "w-full aspect-[21/9]", "md:w-1/3 md:aspect-auto"])} />
            </div>
        </section>
    );
}
