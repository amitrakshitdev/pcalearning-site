import clsx from "clsx";
import { Metadata } from "next";
import {
  LuMonitor,
  LuCpu,
  LuTerminal,
  LuCheck,
  LuLaptop,
  LuCode,
  LuDatabase,
  LuExternalLink,
} from "react-icons/lu";
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

interface CourseCategoryData {
  courseName?: string;
  shortDescription?: string;
  driveLink: string;
  data: Array<{
    board?: string;
    class?: string;
    exam?: string;
    subjects?: string[];
  }>;
}

const icons = [LuMonitor, LuCpu, LuTerminal, LuLaptop, LuCode, LuDatabase];

const CourseSection = ({
  data,
  id,
}: {
  data: CourseCategoryData;
  id: string;
}) => {
  const { driveLink } = data;
  return (
    <section id={id} className={clsx(["w-full mb-20 animate-fade-in-up"])}>
      <div
        className={clsx([
          "mb-12 flex flex-col items-center md:items-start text-center md:text-left",
        ])}
      >
        <h3
          className={clsx([
            "inline-block text-3xl md:text-4xl text-textSecondaryColor font-bold px-8 py-4 rounded-xl mb-6 w-full",
            "bg-gradient-to-r from-primary to-primary/80 backdrop-blur-md",
            "transform transition-all duration-300",
          ])}
        >
          {data.courseName}
        </h3>
        {data.shortDescription && (
          <p
            className={clsx([
              "text-lg md:text-xl mt-2 text-textColor opacity-80 max-w-4xl leading-relaxed",
            ])}
          >
            {data.shortDescription}
          </p>
        )}
        {driveLink && (
          <a
            href={driveLink}
            target="_blank"
            rel="noopener noreferrer"
            className={clsx([
              "mt-8 inline-flex items-center gap-2 group px-6 py-3 rounded-xl font-semibold",
              "bg-primary/10 text-primary border border-primary/20",
              "hover:bg-primary hover:text-white hover:shadow-lg transition-all duration-300"
            ])}
          >
            <span>View Detailed Information</span>
            <LuExternalLink className="text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </a>
        )}
      </div>

      <ul
        className={clsx([
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
        ])}
      >
        {data.data.map((course, index) => {
          const CardIcon = icons[index % icons.length];
          return (
            <li
              key={index}
              className={clsx([
                "group flex flex-col h-full bg-white dark:bg-zinc-900 rounded-lg",
                "border border-primary/20",
                "shadow-md transition-all duration-300 overflow-hidden",
              ])}
            >
              {/* Header */}
              <div className="bg-primary text-white p-6 relative flex items-center justify-between overflow-hidden">
                <h4 className="text-2xl font-bold relative z-10 leading-tight uppercase tracking-wide">
                  {course.board || course.exam || "Course"}
                </h4>
                {/* Decorative Bg Icon */}
                <CardIcon className="absolute -right-2 top-0 w-24 h-24 text-white opacity-20 transform -translate-y-4 transition-transform duration-500" />
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col relative">
                {course.class && (
                  <div className="mb-5">
                    <span className="inline-block bg-gray-100 text-gray-800 text-sm font-bold px-4 py-1.5 rounded-full shadow-sm border border-gray-200">
                      {course.class}
                    </span>
                  </div>
                )}

                {course.subjects && (
                  <ul className="flex-1 space-y-3 mt-1">
                    {course.subjects.map((subject, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-textColor/90 group-hover:text-textColor transition-colors"
                      >
                        <LuCheck className="text-secondary mr-3 mt-1 text-xl flex-shrink-0" />
                        <span className="leading-relaxed text-[1.05rem] font-medium">
                          {subject}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* <div className="mt-8 w-full">
                                    <span className="inline-block text-sm font-bold text-primary group-hover:text-blue-600 transition-colors uppercase tracking-wider relative after:content-[''] after:absolute after:w-full after:h-[2px] after:-bottom-1 after:left-0 after:bg-primary after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:origin-left hover:cursor-pointer">
                                        View Details →
                                    </span>
                                </div> */}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default function CoursesPage() {
  return (
    <section
      className={clsx([
        "Courses relative w-full bg-background text-textColor min-h-screen",
        ["px-4 py-16 md:px-12 md:py-20", "lg:px-24 lg:py-28"],
      ])}
    >
      {/* Background design elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary/5 to-transparent"></div>
        <div className="absolute top-40 right-10 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-40 left-10 w-[700px] h-[700px] bg-primary/10 rounded-full blur-[120px]"></div>
      </div>

      <div
        className={clsx([
          "relative z-10 max-w-[1400px] mx-auto",
          "flex flex-col items-center md:items-start",
        ])}
      >
        <div className="w-full text-center md:text-left mb-20">
          <h2
            className={clsx([
              "text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-primary mb-6",
              "tracking-tight drop-shadow-sm leading-tight inline-block",
            ])}
          >
            Our Courses
          </h2>
          <p className="max-w-3xl text-xl md:text-2xl opacity-80 leading-relaxed mx-auto md:mx-0 font-medium">
            Discover your potential with our expertly crafted curriculum. From
            school level to advanced engineering courses.
          </p>
        </div>

        <div className="w-full flex flex-col gap-6">
          <CourseSection id="school-computer" data={SchoolComputerData} />
          <CourseSection id="polytechnic" data={PolytechnicCourseData} />
          <CourseSection id="btech" data={BtechCourseData} />
          <CourseSection id="bca" data={BCACouseData} />
          <CourseSection id="bsc" data={BscCourseData} />
          <CourseSection id="mca" data={MCACouseData} />
          <CourseSection id="entrace-exam" data={EntraceExamData} />
        </div>
      </div>
    </section>
  );
}
