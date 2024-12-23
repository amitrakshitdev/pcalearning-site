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
            <div className={clsx(["bg-background px-0 py-4 flex flex-col", "rounded-md shadow-md overflow-hidden", "sm:rounded-none"])}>
                <h1 className={clsx(["text-5xl text-primary text-center font-bold", "mb-6"])}>Our Courses</h1>
                <div className={clsx(["course-card-wrapper", "w-full h-96 px-3 pt-6 overflow-scroll", "flex justify-around gap-y-8 flex-wrap"])}>
                    {courses.map((course, index) => {
                        return (
                            <>
                                <CourseCards.CourseCardWrapper key={index} className={clsx(["relative py-4 min-h-40", "self-center justify-self-center", "w-full"])}>
                                    <CourseCards.CourseCardsNumberIcon className={clsx(["absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"])}>
                                        {index + 1}
                                    </CourseCards.CourseCardsNumberIcon>
                                    <CourseCards.CourseDetails className={clsx(["text-center h-full flex-1 flex flex-col justify-between"])}>
                                        <h2 className={clsx(["text-lg font-bold", "my-2"])}>{course.name ?? ""}</h2>
                                        <p className={clsx(["text-sm", "mb-1"])}>{course.class ?? ""}</p>
                                        <p className={clsx(["text-sm font-light", "mb-2"])}>{course.boards.length ? course.boards.join("/") : ""}</p>
                                        <ButtonLink buttonType="primary-rounded" className={clsx(["py-1 px-4 text-center w-auto self-center"])}>
                                            More info
                                        </ButtonLink>
                                    </CourseCards.CourseDetails>
                                </CourseCards.CourseCardWrapper>
                            </>
                        );
                    })}
                    {/* <video className={clsx(["object-contain"])} autoPlay muted loop>
                        <source src="/videos/tech_1.mp4" type="video/mp4" />
                    </video> */}
                </div>
            </div>
        </section>
    );
}
