import { ButtonLink } from "@/components/ui/Buttons/Buttons";
import clsx from "clsx";
import { FaInstagram, FaLinkedin, FaSquareFacebook, FaSquareXTwitter, FaPhone } from "react-icons/fa6";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact us",
    description:
        "PCA learning contact page. We offer courses for beginners as well as advanced learners. Our courses are designed to help you learn coding in a fun and interactive way. Contact us for any queries related to admissions, course details, or any other queries. \
        For admissions, course details, or any other queries, feel free to reach out to us. We would love to hear from you! If you have any questions, comments, or suggestions, please feel free to contact us. You can reach us by phone, WhatsApp, or by following us on social platform. We will get back to you as soon as possible.",
    keywords: [
        "pca learning connect",
        "Pca learning contact us",
        "Computer",
        "Computer Learning",
        "Computer Courses",
        "Computer Science",
        "MCA",
        "BCA",
        "Entrance Exam",
        "Computer Education",
        "Computer Training",
        "Computer Institute",
        "Computer Classes",
        "Computer Coaching",
        "Computer Academy",
        "Computer Center",
        "Computer School",
        "Computer College",
        "Computer University",
        "Computer Degree",
        "Computer Diploma",
        "Computer Certificate",
        "Computer Training Institute",
        "Computer Training Center",
        "Computer Training Classes",
        "Computer Training Coaching",
        "Computer Training Academy",
        "Computer Training School",
        "Computer Training College",
        "Computer Training University",
        "Computer Training Degree",
        "Computer Training Diploma",
        "Computer Training Certificate",
        "Computer Training Training",
        "Computer Training Training Institute",
        "Computer Training Training Center",
        "Computer Training Training Classes",
        "Computer Training Training Coaching",
        "Computer Training Training Academy",
        "Computer Training Training School",
        "Computer Training Training College",
        "Computer Training Training University",
        "Computer Training Training Degree",
        "Computer Training Training Diploma",
        "Computer Training Training Certificate",
    ],
    publisher: "PCA Learning",
    creator: "Amit Rakshit | +91 8918075974",
    category: "Education",
};

export default function ContactUs() {
    return (
		<>
        <section id="contact-us" className="ContactUs relative min-h-full w-full bg-primary">
            <div className="w-full h-full flex flex-col items-center bg-background rounded-b-md overflow-hidden shadow-md">
                <div className="h-full w-full text-textColor flex flex-col px-6 py-4 md:px-12 md:py-10 lg:px-32 lg:py-20 max-w-[1200px]">
                    <h1 className="text-5xl font-bold text-center text-primary mb-4 lg:text-7xl">{"Let's Connect!"}</h1>
                    <h3 className="font-semibold text-xl my-4 mb-2">Get in Touch with Us</h3>
                    <p className="text-sm font-light text-textColor text-gray-800 lg:text-base">
						For admissions, course details, or any other queries, feel free to reach out to us. We would love to hear from you! If you have any questions, comments, or suggestions, please feel free to contact us. You can reach us by phone, WhatsApp, or by following us on social platform. We will get back to you as soon as possible.
                    </p>
                    <h3 className="font-semibold text-xl my-4 mb-2">Connect Over Social Platforms</h3>
                    <div className="flex my-3 w-40 justify-between self-center md:self-start">
                        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                            <FaSquareFacebook size={35} />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                            <FaSquareXTwitter size={35} />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                            <FaLinkedin size={35} />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                            <FaInstagram size={35} />
                        </a>
                    </div>
                    <h3 className="font-semibold text-xl my-4 mb-2">Our Address</h3>
                    <p className="text-sm font-light text-textColor text-gray-800 lg:text-base">
                        3, Vivekananda Road P.O. Nabagram, Konnagar Dist: Hooghly State: West Bengal Pin: 712246 Land Mark: Near Nabagram Old Post Office
                    </p>
                    <h3 className="font-semibold text-xl my-4 mb-2 flex">Call us</h3>
                    <ButtonLink href="tel:+91-9051049912" buttonType="primary-rounded" className="my-4 mt-2 px-7 py-2 self-center md:self-start flex">
                        <FaPhone size={20} className={clsx(["mr-2"])}/>  <span>+91-9051049912</span>
                    </ButtonLink>
                </div>
            </div>
        </section>
		</>
    );
}
