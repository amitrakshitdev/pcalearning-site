import clsx from "clsx";
import React, { HTMLAttributes } from "react";

type CourseCardWrapperProps = {
    index: number;
    iconSize?: number;
};

function CourseCardWrapper({ children, index, className, ...rest }: React.PropsWithChildren<HTMLAttributes<unknown> & CourseCardWrapperProps>) {
    return (
        <li className={clsx([`px-3 pt-6 min-h-52 max-w-72 rounded-lg bg-primary-50 shadow-md`, "flex flex-col items-center", "md:pt-8"], className)} {...rest}>
            <CourseCardsNumberIcon>{index}</CourseCardsNumberIcon>
            {children}
        </li>
    );
}

function CourseCardsNumberIcon({ children, className, ...rest }: React.PropsWithChildren<HTMLAttributes<unknown>>) {
    return (
        <div
            className={clsx(
                [
                    "Course-card-number-icon",
                    "bg-primary text-textSecondaryColor rounded-full flex justify-center items-center",
                    "absolute top-0 left-1/2",
                    `w-12 h-12`,
                    "-translate-x-1/2 -translate-y-1/2",
                    "md:w-16 md:h-16 md:text-2xl",
                ],
                className
            )}
            {...rest}
        >
            {children}
        </div>
    );
}

function CourseDetails({ children, className, ...rest }: React.PropsWithChildren<HTMLAttributes<unknown>>) {
    return (
        <div className={clsx(["text-textColor"], className)} {...rest}>
            {children}
        </div>
    );
}

const CourseCards = { CourseCardWrapper, CourseCardsNumberIcon, CourseDetails };

export default CourseCards;
