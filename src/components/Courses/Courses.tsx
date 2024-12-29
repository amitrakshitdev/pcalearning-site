import clsx from "clsx";
import CourseCards from "./CourseCards";
import { ButtonLink } from "../ui/Buttons/Buttons";

const courses = [
    {
        name: "School Computer",
        class: "Class VI to Class XII",
        boards: ["ICSE", "ISC", "CBSE", "WBBSE", "WBCHSE"],
    },
    {
        name: "Diploma",
        class: "(CST/IT)",
        boards: ["For all"], // No specific boards mentioned
    },
    {
        name: "B.Tech",
        class: "All Streams",
        boards: [], // No specific boards mentioned
    },
    {
        name: "BCA",
        class: "Bachelor in Computer Application", // No class information provided
        boards: ["For all"], // No specific boards mentioned
    },
    {
        name: "B.Sc",
        class: "in Computer Science",
        boards: ["For all"], // No specific boards mentioned
    },
    {
        name: "MCA",
        class: "Masters in Computer Application", // No class information provided
        boards: ["For all"], // No specific boards mentioned
    },
];

export default function Courses() {
    return (
        <section className={clsx(["Courses bg-customGreyColor p-4 w-full", "sm:p-0"])}>
            <div className={clsx(["relative bg-background px-0 pt-4 flex flex-col items-center", "rounded-md shadow-md overflow-hidden", "sm:rounded-none"])}>
                <h1 className={clsx(["text-5xl text-primary text-center font-bold", "mb-6", 
                    "md:mt-8 md:mb-10"], ["lg:text-7xl"])}>Our Courses</h1>
                <div className={clsx(["video-bg-wrapper", "relative w-full h-auto"])}>
                    <video className={clsx(["bg-video", "absolute inset-0 object-cover w-full h-full"])} autoPlay muted loop>
                        <source src="/videos/tech_1.mp4" type="video/mp4" />
                    </video>
                    <div
                        className={clsx([
                            "relative course-card-wrapper",
                            "w-full max-h-[500px] px-3 py-10 overflow-scroll",
                            "flex justify-around gap-y-8 gap-x-6 flex-wrap",
                            "lg:px-[20%] sm:max-h-none md:py-14 md:gap-y-10",
                        ])}
                    >
                        {courses.map((course, index) => {
                            return (
                                <>
                                    <CourseCards.CourseCardWrapper
                                        key={index}
                                        className={clsx(["relative py-4 px-4 min-h-48", "self-center justify-self-center", "w-full",
                                            ""
                                        ])}
                                        index={index + 1}
                                    >
                                        <CourseCards.CourseDetails className={clsx(["text-center h-full flex-1 flex flex-col justify-between"])}>
                                            <h2 className={clsx(["text-2xl font-bold", "my-2"])}>{course.name ?? ""}</h2>
                                            <p className={clsx(["text-base", "mb-1"])}>{course.class ?? ""}</p>
                                            <p className={clsx(["text-sm font-light", "mb-2"])}>{course.boards.length ? course.boards.join("/") : ""}</p>
                                            <ButtonLink buttonType="primary-rounded" className={clsx(["py-1 px-4 text-center w-auto self-center"])}>
                                                More info
                                            </ButtonLink>
                                        </CourseCards.CourseDetails>
                                    </CourseCards.CourseCardWrapper>
                                </>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
