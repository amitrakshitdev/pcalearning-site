import clsx from "clsx";
import SchoolComputerData from "./school-computer-courses-data.json"
export default function CoursesPage() {
    return (
        <section className={clsx(["Courses relative w-full bg-background p-4", ["md:px-10 md:py-5", "lg:p-20 lg:py-5"]])}>
            <div className={clsx(["max-w-[1000px] mx-auto", "flex flex-col items-center"])}>
                <h2 className={clsx(["text-5xl text-center font-medium text-primary mb-4 w-full", ["md:text-5xl", "lg:text-7xl"]])}>Courses</h2>
                <section id="school-computer">
                    <h3 className={clsx(["text-3xl text-center font-medium mb-3"])}>{SchoolComputerData.courseName}</h3>
                    <p className={clsx(["text-base mb-4"])}>{SchoolComputerData.shortDescription}</p>
                    <ul className={clsx(["py-2"])}>
                        {SchoolComputerData.data.map((course, index) =>
                        (<li key={index} className={clsx(["mb-4"])}>
                            <h4 className={clsx(["text-xl font-semibold my-1"])}>{course.board}</h4>
                            <h5 className={clsx(["text-lg font-semibold"])}>{course.class}</h5>
                            <ol className={clsx(["list-decimal ml-10"])}>
                                {course.subjects.map((subject, index) => (
                                    <li key={index} className={clsx([""])}>{subject}</li>
                                ))}
                            </ol>
                        </li>)
                        )}</ul>
                </section>
            </div>
        </section>
    )
}