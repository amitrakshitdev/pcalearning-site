import clsx from "clsx";
import React, { HTMLAttributes } from "react";

function CourseCardWrapper({ children, className, ...rest }: React.PropsWithChildren<HTMLAttributes<unknown>>) {
	return (
		<div className={clsx(["px-3 py-2 min-h-28 max-w-64 rounded bg-primary-50 shadow-md", 
		"flex flex-col items-center"], className)} {...rest}>
			{children}
		</div>
	)
}

function CourseCardsNumberIcon({ children, className, ...rest }: React.PropsWithChildren<HTMLAttributes<unknown>>) {
	return (
		<div className={clsx(["bg-primary text-textSecondaryColor rounded-full w-10 h-10 flex justify-center items-center"], className)} {...rest}>
			{children}
		</div>
	)
}

function CourseDetails({children, className, ...rest}: React.PropsWithChildren<HTMLAttributes<unknown>>) {
	return (
		<div className={clsx(["text-textColor"], className)} {...rest}>
			{children}
		</div>
	)

}

const CourseCards = { CourseCardWrapper, CourseCardsNumberIcon, CourseDetails };

export default CourseCards;