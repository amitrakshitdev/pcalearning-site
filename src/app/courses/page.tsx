import clsx from "clsx";
import { Metadata } from "next";
import SchoolComputerData from "./jsons/school-computer-courses-data.json";
import BCACouseData from "./jsons/bca-courses-data.json";
import MCACouseData from "./jsons/mca-courses-data.json";
import BtechCourseData from "./jsons/btech-courses-data.json";
import BscCourseData from "./jsons/bsc-courses-data.json";
import PolytechnicCourseData from "./jsons/polytechnic-courses-data.json";
import EntraceExamData from "./jsons/entrance-exam-data.json";
export const metadata: Metadata = {
    title: "Courses",
    description:
        "PCA Learning offers a wide range of courses to help you learn coding and programming. We offer courses for beginners as well as advanced learners. Our courses are designed to help you learn coding in a fun and interactive way. Whether you are a student, a professional, or someone who is just interested in learning coding, we have a course for you.",
    keywords: [
        "Pca learning courses page",
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

export default function CoursesPage() {
    return (
        <section className={clsx(["Courses relative w-full bg-background text-textColor p-4", ["md:px-10 md:py-5", "lg:p-20 lg:py-5"]])}>
            <div className={clsx(["relative max-w-[1000px] mx-auto", "flex flex-col items-start"])}>
                <h2 className={clsx(["text-5xl text-center font-medium text-primary mb-4 w-full", ["md:text-5xl", "lg:text-7xl"]])}>Courses</h2>
                <section id="entrace-exam" className={clsx(["w-full"])}>
                    <h3
                        className={clsx([
                            "text-2xl text-textSecondaryColor text-center font-medium mb-3 py-2",
                            "bg-gradient-to-r from-secondary from-0% via-secondary via-50% to-background to-100%",
                            "sm:text-2xl",
                        ])}
                    >
                        {EntraceExamData.courseName}
                    </h3>
                    {/* <p className={clsx(["text-base mb-4"])}>{MCACouseData.shortDescription}</p> */}
                    <ul className={clsx(["py-2"])}>
                        {EntraceExamData.data.map((course, index) => (
                            <li key={index} className={clsx(["mb-4"])}>
                                <h4 className={clsx(["text-lg font-semibold"])}>{course.exam}</h4>
                            </li>
                        ))}
                    </ul>
                </section>

                <section id="school-computer">
                    <h3
                        className={clsx([
                            "text-2xl text-textSecondaryColor text-center font-medium mb-3 py-2",
                            "bg-gradient-to-r from-secondary from-0% via-secondary via-50% to-background to-100%",
                            "sm:text-2xl",
                        ])}
                    >
                        {SchoolComputerData.courseName}
                    </h3>
                    <p className={clsx(["text-base mb-4"])}>{SchoolComputerData.shortDescription}</p>
                    <ul className={clsx(["py-2"])}>
                        {SchoolComputerData.data.map((course, index) => (
                            <li key={index} className={clsx(["mb-4"])}>
                                <h4 className={clsx(["text-xl font-semibold my-1"])}>{course.board}</h4>
                                <h5 className={clsx(["text-lg font-semibold"])}>{course.class}</h5>
                                <ol className={clsx(["list-decimal ml-10"])}>
                                    {course.subjects.map((subject, index) => (
                                        <li key={index} className={clsx([""])}>
                                            {subject}
                                        </li>
                                    ))}
                                </ol>
                            </li>
                        ))}
                    </ul>
                </section>

                <section id="polytechnic">
                    <h3
                        className={clsx([
                            "text-2xl text-textSecondaryColor text-center font-medium mb-3 py-2",
                            "bg-gradient-to-r from-secondary from-0% via-secondary via-50% to-background to-100%",
                            "sm:text-2xl",
                        ])}
                    >
                        {PolytechnicCourseData.courseName}
                    </h3>
                    <p className={clsx(["text-base mb-4"])}>{PolytechnicCourseData.shortDescription}</p>
                    <ul className={clsx(["py-2"])}>
                        {PolytechnicCourseData.data.map((course, index) => (
                            <li key={index} className={clsx(["mb-4"])}>
                                <h4 className={clsx(["text-xl font-semibold my-1"])}>{course.board}</h4>
                                <h5 className={clsx(["text-lg font-semibold"])}>{course.class}</h5>
                                <ol className={clsx(["list-decimal ml-10"])}>
                                    {course.subjects.map((subject, index) => (
                                        <li key={index} className={clsx([""])}>
                                            {subject}
                                        </li>
                                    ))}
                                </ol>
                            </li>
                        ))}
                    </ul>
                </section>

                <section id="btech">
                    <h3
                        className={clsx([
                            "text-2xl text-textSecondaryColor text-center font-medium mb-3 py-2",
                            "bg-gradient-to-r from-secondary from-0% via-secondary via-50% to-background to-100%",
                            "sm:text-2xl",
                        ])}
                    >
                        {BtechCourseData.courseName}
                    </h3>
                    <p className={clsx(["text-base mb-4"])}>{BtechCourseData.shortDescription}</p>
                    <ul className={clsx(["py-2"])}>
                        {BtechCourseData.data.map((course, index) => (
                            <li key={index} className={clsx(["mb-4"])}>
                                <h4 className={clsx(["text-xl font-semibold my-1"])}>{course.board}</h4>
                                <h5 className={clsx(["text-lg font-semibold"])}>{course.class}</h5>
                                <ol className={clsx(["list-decimal ml-10"])}>
                                    {course.subjects.map((subject, index) => (
                                        <li key={index} className={clsx([""])}>
                                            {subject}
                                        </li>
                                    ))}
                                </ol>
                            </li>
                        ))}
                    </ul>
                </section>

                <section id="bca">
                    <h3
                        className={clsx([
                            "text-2xl text-textSecondaryColor text-center font-medium mb-3 py-2",
                            "bg-gradient-to-r from-secondary from-0% via-secondary via-50% to-background to-100%",
                            "sm:text-2xl",
                        ])}
                    >
                        {BCACouseData.courseName}
                    </h3>
                    <p className={clsx(["text-base mb-4"])}>{BCACouseData.shortDescription}</p>
                    <ul className={clsx(["py-2"])}>
                        {BCACouseData.data.map((course, index) => (
                            <li key={index} className={clsx(["mb-4"])}>
                                <h4 className={clsx(["text-xl font-semibold my-1"])}>{course.board}</h4>
                                <h5 className={clsx(["text-lg font-semibold"])}>{course.class}</h5>
                                <ol className={clsx(["list-decimal ml-10"])}>
                                    {course.subjects.map((subject, index) => (
                                        <li key={index} className={clsx([""])}>
                                            {subject}
                                        </li>
                                    ))}
                                </ol>
                            </li>
                        ))}
                    </ul>
                </section>

                <section id="bsc">
                    <h3
                        className={clsx([
                            "text-2xl text-textSecondaryColor text-center font-medium mb-3 py-2",
                            "bg-gradient-to-r from-secondary from-0% via-secondary via-50% to-background to-100%",
                            "sm:text-2xl",
                        ])}
                    >
                        {BscCourseData.courseName}
                    </h3>
                    <p className={clsx(["text-base mb-4"])}>{BscCourseData.shortDescription}</p>
                    <ul className={clsx(["py-2"])}>
                        {BscCourseData.data.map((course, index) => (
                            <li key={index} className={clsx(["mb-4"])}>
                                <h4 className={clsx(["text-xl font-semibold my-1"])}>{course.board}</h4>
                                <h5 className={clsx(["text-lg font-semibold"])}>{course.class}</h5>
                                <ol className={clsx(["list-decimal ml-10"])}>
                                    {course.subjects.map((subject, index) => (
                                        <li key={index} className={clsx([""])}>
                                            {subject}
                                        </li>
                                    ))}
                                </ol>
                            </li>
                        ))}
                    </ul>
                </section>

                <section id="mca" className={clsx(["w-full"])}>
                    <h3
                        className={clsx([
                            "text-2xl text-textSecondaryColor text-center font-medium mb-3 py-2",
                            "bg-gradient-to-r from-secondary from-0% via-secondary via-50% to-background to-100%",
                            "sm:text-2xl",
                        ])}
                    >
                        {MCACouseData.courseName}
                    </h3>
                    <p className={clsx(["text-base mb-4"])}>{MCACouseData.shortDescription}</p>
                    <ul className={clsx(["py-2"])}>
                        {MCACouseData.data.map((course, index) => (
                            <li key={index} className={clsx(["mb-4"])}>
                                <h4 className={clsx(["text-xl font-semibold my-1"])}>{course.board}</h4>
                                <h5 className={clsx(["text-lg font-semibold"])}>{course.class}</h5>
                                <ol className={clsx(["list-decimal ml-10"])}>
                                    {course.subjects.map((subject, index) => (
                                        <li key={index} className={clsx([""])}>
                                            {subject}
                                        </li>
                                    ))}
                                </ol>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </section>
    );
}
